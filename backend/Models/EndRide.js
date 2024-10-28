const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  remarks: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
});

const EndRideSchema = new Schema({
  endingKM: {
    type: String,
    required: true,
  },
  travelledKM: {
    type: String,
    required: true,
  },
  expenses: [ExpenseSchema], // Array of expense items
  activeRouteId: {
    type: Schema.Types.ObjectId,
    ref: 'ActiveRoute', // Reference to ActiveRoute
    required: true,
  },
});

const EndRide = mongoose.model('EndRide', EndRideSchema);
module.exports = EndRide;
