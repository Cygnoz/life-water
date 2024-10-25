const WStock = require('../Models/WarehouseSchema');

class WStockController {
  // Create new stock entry
  async createStock(req, res) {
    try {
      const { warehouse,transferNumber, date, items, termsAndConditions } = req.body;

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

}

module.exports = new WStockController();