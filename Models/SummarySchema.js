const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({
  openingStock: {
    type: Number, // Starting stock for the day
    required: true,
    default: 0
  },
  loadedFromPlant: {
    type: Number, // New stock added from a plant or supplier
    required: true,
    default: 0
  },
  additionalAdding: {
    type: Number, // Additional stock added manually
    default: 0
  },
  total: {
    type: Number, // Sum of opening stock and new stock
    required: true,
    default: 0
  },
  bottleLeak: {
    type: Number, // Damaged stock due to bottle leaks
    default: 0
  },
  capLeak: {
    type: Number, // Damaged stock due to cap leaks
    default: 0
  },
  waterDamage: {
    type: Number, // Damaged stock due to water damage
    default: 0
  },
  FOC: {
    type: Number, // Free of Charge products given away
    default: 0
  },
  netTotal: {
    type: Number, // Remaining stock after accounting for damages and giveaways
    required: true,
    default: 0
  },
  emptyBottle: {
    type: Number, // Number of empty bottles returned or handled
    default: 0
  },
  balanceStock: {
    type: Number, // Final stock available after all adjustments
    required: true,
    default: 0
  }
}, { timestamps: true });

const Summary = mongoose.model('Summary', summarySchema);

module.exports = Summary;
