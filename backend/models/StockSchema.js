const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  stockInHand: {
    type: Number, // Total stock currently available
    required: true,
    default: 0
  },
  damageStock: {
    type: Number, // Damaged stock, if any
    default: 0
  },
  internalTransfers: {
    type: Number, // Transfers between locations or departments
    default: 0
  },
  emptyStock: {
    type: Number, // Empty items (e.g., bottles) in stock
    default: 0
  },
  balanceStock: {
    type: Number, // Remaining stock after transfers and damages
    required: true,
    default: 0
  },
  startedStock: {
    type: Number, // Initial stock at the start of the tracking period
    required: true,
    default: 0
  }
}, { timestamps: true });

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
