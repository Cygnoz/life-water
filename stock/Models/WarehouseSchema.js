const mongoose = require('mongoose');

const wStockSchema = new mongoose.Schema({
  transferNumber: {
    type: String,
    // required: true,
    unique: true
  },
  date: {
    type: Date,
    // required: true,
    default: Date.now
  },
  items: [{
    itemName: {
      type: String,
    //   required: true
    },
    quantity: {
      type: Number,
    //   required: true,
      min: 0
    },
    totalQuantity: {
      type: Number,
    //   required: true,
      min: 0
    },
    amount: {
      type: Number,
    //   required: true,
      min: 0
    }
  }],
  totalAmount: {
    type: Number,
    // required: true,
    default: 0
  },
  termsAndConditions: {
    type: String
  }
});

// Middleware to update totalAmount before saving
wStockSchema.pre('save', function(next) {
  this.totalAmount = this.items.reduce((sum, item) => sum + item.amount, 0);
  this.updatedAt = new Date();
  next();
});

const WStock = mongoose.model('WStock', wStockSchema);

module.exports = WStock;