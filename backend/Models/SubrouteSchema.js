const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Route = require('./RouteSchema'); // Importing the Route schema

const subRouteSchema = new Schema({
  subrouteName: {
    type: String,
    required: true
  },
  subrouteCode: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  routeCode: {
    type: String,
    required: true,
    ref: 'Route'  // Reference to Route schema's routeCode
  }
}, {
  timestamps: true  // This adds createdAt and updatedAt fields
});

const SubRoute = mongoose.model('SubRoute', subRouteSchema);
module.exports = SubRoute;
