const Unload = require('../Models/UnloadedSchema'); // Adjust the path as necessary
const { updateWarehouseStock } = require('../controller/WarehouseController'); // Adjust the path as necessary
const Warehouse = require('../Models/WarehouseSchema'); // Adjust the path as necessary

// Function to add a new unload document
const addUnload = async (req, res) => {
    try {
      const { mainRoute, warehouseName, date, transferNumber, items, autoNotes, termsAndConditions } = req.body;
        // Check if the warehouse exists in the database
        const warehouseExists = await Warehouse.findOne({ warehouseName: warehouseName });
        if (!warehouseExists) {
            return res.status(404).json({ message: 'Warehouse not found' });
        }
      const newUnload = new Unload({
        mainRoute,
        warehouseName,
        date,
        transferNumber,
        items,
        autoNotes,
        termsAndConditions
      });
  
      const savedUnload = await newUnload.save();
  
      // Update warehouse stock
      await updateWarehouseStock({ warehouseName: warehouseName, items });
  
      res.status(201).json(savedUnload);
    } catch (error) {
      console.error('Error adding unload:', error);
      res.status(500).json({ message: 'Failed to add unload', error });
    }
  };
  
  // Function to get all unload documents
  const getAllUnloads = async (req, res) => {
    try {
      const unloads = await Unload.find();
      res.status(200).json(unloads);
    } catch (error) {
      console.error('Error fetching unloads:', error);
      res.status(500).json({ message: 'Failed to fetch unloads', error });
    }
  };
  
module.exports = {
  addUnload,
  getAllUnloads
};