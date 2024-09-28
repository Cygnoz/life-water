const mongoose = require('mongoose');

const returnSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now // Automatically set the current date
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Customer', // Assumes you have a Customer model
    required: true // To select the customer returning bottles
  },
  numberOfBottlesInHand: {
    type: Number,
    required: true, 
    min: 0 // Input field for bottles returned
  },
  returnConfirmation: {
    type: String,
    default: 'Bottles Returned' // Default confirmation message
  },
  depositAmount: {
    type: Number,
    required: true, 
    min: 0 // Shows deposit amount for the bottles
  },
  returnDepositAmount: {
    type: Number,
    required: true, 
    min: 0, // Calculates and stores the deposit to return

  },
  remarks: {
    type: String, // Field for any additional comments or notes
    maxlength: 500
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Return', returnSchema);
