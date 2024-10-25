const Item = require('../Models/ItemSchema'); // Assuming you have an Item schema

// Create a new item
const addItem = async (req, res) => {
  try {
    const newItem = new Item({
      itemName: req.body.itemName,
      SKU: req.body.SKU,
      purchasePrice: req.body.purchasePrice,
      retailPrice: req.body.retailPrice,
      description: req.body.description,
      itemImage: req.file ? req.file.path : null // Handle file upload
    });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: 'Error adding item', error });
  }
};

// Get all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find(); // Find all items in the database
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve items', error: error.message });
  }
};

// Update an item by ID
const updateItem = async (req, res) => {
  try {
    const { itemName, SKU, purchasePrice, retailPrice, description, itemImage } = req.body;

    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { itemName, SKU, purchasePrice, retailPrice, description, itemImage },
      { new: true, runValidators: true } // Return the updated document and validate the inputs
    );

    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });

    res.status(200).json({ message: 'Item updated successfully', data: updatedItem });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update item', error: error.message });
  }
};

// Delete an item by ID
const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id); // Find and delete the item

    if (!item) return res.status(404).json({ message: 'Item not found' });

    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete item', error: error.message });
  }
};

// Export all controllers as an object
module.exports = {
  addItem,
  getItems,
  updateItem,
  deleteItem
};
