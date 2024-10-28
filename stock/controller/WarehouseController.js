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

    // Create new warehouse entry
    const warehouse = new Warehouse({
      warehouseName,
      contactNo,
      address
    });

    await warehouse.save();

    res.status(201).json({
      success: true,
      data: warehouse
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
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


module.exports = {
  createStock,
  getAllStock,
  addWarehouse,
  getWarehouses
};