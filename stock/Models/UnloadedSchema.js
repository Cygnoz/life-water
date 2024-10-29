const mongoose = require('mongoose');
const Warehouse = require('./WarehouseSchema');

const unloadSchema = new mongoose.Schema({

  mainRoute: {
    type: String,
  },
  Warehouse: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  transferNumber: {
    type: String,
  },
  items: [{
    itemName: String,
    quantity: Number,
  }],
  autoNotes: String,
  termsAndConditions: String
});

module.exports = mongoose.model('Unload', unloadSchema);