const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  transferNumber: {
    type: String,
    // required: true,
    // unique: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  mainRoute: {
    type: String,
  },
  // filledBottles: {
  //   type: Number,
  //   required: true
  // },
  // emptyBottles: {
  //   type: Number,
  //   default: 0
  // },
  items: [{
    itemName: String,
    quantity: Number,
    totalQuantity: Number
  }],
  autoNotes: String,
  termsAndConditions: String
});

// Virtual for calculating total stock
// stockSchema.virtual('calculatedTotalStock').get(function() {
//   return this.items.reduce((total, item) => total + item.totalQuantity, 0);
// });

// //Pre-save hook to update totalStock
// stockSchema.pre('save', function(next) {
//   this.totalStock = this.calculatedTotalStock;
//   next();
// });

module.exports = mongoose.model('Stock', stockSchema);