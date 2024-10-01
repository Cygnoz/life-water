const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
  routeName: {
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
  },
  subroutes: [{
    type: Schema.Types.ObjectId,
    ref: 'Subroute'
  }]
});

const Route = mongoose.model('Route', routeSchema);
module.exports = Route;
