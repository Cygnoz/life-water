const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subrouteSchema = new Schema({
  subrouteName: {
    type: String,
    required: true
  },
  subrouteCode: {
    type: String,
    required: true,
    unique: true
  },
  routeCode: {
    type: String,
    required: true, // Referencing the route by routeCode
    ref: 'Route'
  },
  description: {
    type: String
  }
});

const Subroute = mongoose.model('Subroute', subrouteSchema);
module.exports = Subroute;
