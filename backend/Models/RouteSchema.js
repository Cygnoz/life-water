const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
  mainRoute: {
    type: String,
    required: true
  },
  routeCode: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  }
});

const MainRouteSchema = mongoose.model('MainRoute', routeSchema);
module.exports = MainRouteSchema; // Make sure this line is correct
