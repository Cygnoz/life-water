const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  customer: {
    type: String, // Could be customer name or ID
    required: true
  },
  item: {
    type: String, // Item selected for the order
    required: true
  },
  paymentMode: {
    type: String, // E.g., 'Cash', 'Credit', 'Card'
    required: true
  },
  ratePerItem: {
    type: Number, // Rate for each item selected
    required: true
  },
  returnEmptyBottle: {
    type: Number, 
    default: 0
  },
  remarks: {
    type: String, // Any additional remarks
    default: ''
  },
  totalAmount: {
    type: Number, 
    required: true
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
