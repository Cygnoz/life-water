const mongoose = require('mongoose');

const creditCollectionSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now, // Automatically set to current date
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', // Assumes you have a Customer model
    required: true, // To select the customer related to the credit collection
  },
  invoiceNumber: {
    type: String, // Input or dropdown for invoice number
    required: true,
  },
  invoiceAmount: {
    type: Number,
    required: true, // Total invoice amount
    min: 0,
  },
  remainingAmount: {
    type: Number,
    required: true, // Remaining unpaid amount
    min: 0,
  },
  collectAmount: {
    type: Number,
    required: true, // Amount being collected in this session
    min: 0,
    validate: {
      validator: function(v) {
        return v <= this.remainingAmount; // Ensure collected amount is not more than the remaining amount
      },
      message: 'Collected amount cannot exceed remaining amount.'
    },
  },
  totalOutstandingAmount: {
    type: Number,
    required: true, // Calculates outstanding after collection
    min: 0,
    default: function() {
      return this.remainingAmount - this.collectAmount; // Calculated field
    },
  },
  remarks: {
    type: String, // Optional field for any additional comments or notes
    maxlength: 500,
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model('CreditCollection', creditCollectionSchema);