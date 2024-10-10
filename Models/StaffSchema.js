const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  profile: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  visaStatus: {
    type: String,
    enum: ['Valid', 'Expired', 'In Process'],
    required: true
  },
  visaValidity: {
    type: Date,
    required: true
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
    required: true,
  },
  dateofBirth:{
    type: Date,
    required:true,
  },
  nationality:{
    type: String,
    required:true,
  },
  designation:{
    type:String,
    enum: ['Sales', 'Driver', 'Helper'],
    required: true
  },
  emiratesId:{
    type:String,
    required:true
  }
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
