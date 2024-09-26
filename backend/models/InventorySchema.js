const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  stockBalance: {
    type: Number, // Current inventory stock available
    required: true,
    default: 0
  },
  sold: {
    type: Number, // Number of items sold in a given period
    required: true,
    default: 0
  },
  cashInHand: {
    type: Number, // Cash received from sales, not deposited
    required: true,
    default: 0
  },
  totalSales: {
    cashSale: {
      type: Number, // Sales made through cash
      required: true,
      default: 0
    },
    creditSale: {
      type: Number, // Sales made on credit
      required: true,
      default: 0
    }
  },
//   timePeriod: {
//     daily: {
//       type: Number, // Daily filter option
//       default: 0
//     },
//     weekly: {
//       type: Number, // Weekly filter option
//       default: 0
//     },
//     monthly: {
//       type: Number, // Monthly filter option
//       default: 0
//     }
//   }
}, { timestamps: true });

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
