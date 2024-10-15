const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
  },
  username:{
    type: String,
    // required: true,
  },
  profile: {
    type: String,
    
  },
  address: {
    type: String,
  },
  visaStatus: {
    type: String,
    enum: ['Valid', 'Expired', 'In Process'],

  },
  visaValidity: {
    type: Date,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  whatsAppNumber:{
    type: String,
    required: true,
  },
  visaNumber:{
    type: String,
  },
  dateofBirth:{
    type: Date,
  },
  nationality:{
    type: String,
  },
  designation:{
    type:String,
    enum: ['Sales', 'Driver', 'Helper'],
    required: true
  },
  emiratesId:{
    type:String,
  
  }
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
