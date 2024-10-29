const WStock = require('../Models/StockSchema');
const Warehouse = require('../Models/WarehouseSchema');

// Create new stock entry
const createStock = async (req, res) => {
  try {
    const { warehouse, transferNumber, date, items, termsAndConditions } = req.body;

    // Validate required fields
    if (!transferNumber || !items || !items.length) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Create new stock entry
    const wStock = new WStock({
      warehouse,
      transferNumber,
      date: date || new Date(),
      items,
      termsAndConditions
    });

    await wStock.save();

    res.status(201).json({
      success: true,
      data: wStock
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get all stock entries
const getAllStock = async (req, res) => {
  try {
    const stocks = await WStock.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: stocks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
 
// Function to add a new warehouse
const addWarehouse = async (req, res) => {
  try {
    const { warehouseName, contactNo, address } = req.body;

    // Validate required fields
    if (!warehouseName || !contactNo || !address) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Additional validation (optional)
    // Check if warehouseName is too long
    if (warehouseName.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Warehouse Name cannot exceed 100 characters'
      });
    }

    // Check if contactNo is a valid phone number (basic validation)
    // if (!/^\d{10}$/.test(contactNo)) { // Adjust regex based on your needs
    //   return res.status(400).json({
    //     success: false,
    //     message: 'Contact Number must be a valid 10-digit number'
    //   });
    // }

    // Create new warehouse entry
    const warehouse = new Warehouse({
      warehouseName,
      contactNo,
      address
    });

    await warehouse.save();

    res.status(201).json({
      success: true,
      message: 'Warehouse created successfully',
      data: warehouse
    });
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error adding warehouse:', error);

    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the warehouse. Please try again.'
    });
  }
};


// Function to list all warehouses
const getWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouse.find().sort({ createdAt: -1 });

    res.status(200).json({ warehouses });
  } catch (error) {
    res.status(500).json({
      message:'Error fetching warehouses',error});
  }
};



// Function to delete an warehouse by ID
const deleteWarehouse = async (req, res) => {
  try {
    const deleteWarehouse = await Warehouse.findByIdAndDelete(req.params.id);
    if (!deleteWarehouse) {
      return res.status(404).json({ message: 'warehouse not found' });
    }
    res.status(200).json({ message: 'warehouse deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting warehouse', error });
  }
};


module.exports = {
  createStock,
  getAllStock,
  addWarehouse,
  getWarehouses,
  deleteWarehouse
};