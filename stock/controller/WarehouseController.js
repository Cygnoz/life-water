const WStock = require('../Models/WarehouseSchema');

class WStockController {
  // Create new stock entry
  async createStock(req, res) {
    try {
      const { transferNumber, date, items, termsAndConditions } = req.body;

      // Validate required fields
      if (!transferNumber || !items || !items.length) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields'
        });
      }

      // Create new stock entry
      const wStock = new WStock({
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
  }

  // Get all stock entries
  async getAllStock(req, res) {
    try {
      const stocks = await WStock.find()
        .sort({ createdAt: -1 });

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
  }

  // Get single stock entry
  async getStockById(req, res) {
    try {
      const stock = await WStock.findById(req.params.id);
      
      if (!stock) {
        return res.status(404).json({
          success: false,
          message: 'Stock entry not found'
        });
      }

      res.status(200).json({
        success: true,
        data: stock
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  // Update stock entry
  async updateStock(req, res) {
    try {
      const { items, termsAndConditions, status } = req.body;
      
      const stock = await WStock.findById(req.params.id);
      
      if (!stock) {
        return res.status(404).json({
          success: false,
          message: 'Stock entry not found'
        });
      }

      if (items) stock.items = items;
      if (termsAndConditions) stock.termsAndConditions = termsAndConditions;
      if (status) stock.status = status;

      await stock.save();

      res.status(200).json({
        success: true,
        data: stock
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  // Delete stock entry
  async deleteStock(req, res) {
    try {
      const stock = await WStock.findById(req.params.id);
      
      if (!stock) {
        return res.status(404).json({
          success: false,
          message: 'Stock entry not found'
        });
      }

      await stock.remove();

      res.status(200).json({
        success: true,
        message: 'Stock entry deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = new WStockController();