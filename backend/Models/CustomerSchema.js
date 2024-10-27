const mongoose = require('mongoose');
 
const customerSchema = new mongoose.Schema({
  customerType: {
    type: String,
    enum: ['Business', 'Individual'],
    required: true
  },
  companyName: {
    type: String,
    trim: true,
    required: function () {
      return this.customerType === 'Business';
    }
  },
  logo: {
    type: String,
    trim: true
  },
  companyWebsite: {
    type: String,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  taxPreference: {
    type: String,
    enum: ['inclusive', 'exclusive']
  },
  mobileNo: {
    type: String,
    trim: true
  },
  workPhone: {
    type: String,
    trim: true
  },
  workPhone2: {
    type: String,
    trim: true
  },
  whatsappNo: {
    type: String,
    trim: true
  },
  currency: {
    type: String,
    trim: true
  },
  currencyCode: {
    type: String,
  },
  placeOfSupply: {
    type: String,
    trim: true
  },
  state: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  area: {
    type: String,
    trim: true
  },
  zipPostalCode: {
    type: String,
    trim: true
  },
  billingAddress: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  landmark: {
    type: String,
    trim: true
  },
  buildingNo: {
    type: String,
    trim: true
  },
  street: {
    type: String,
    trim: true
  },
  salesman: {
    type: String,
    trim: true
  },
  nationality: {
    type: String,
    trim: true
  },
  mainRoute: {
    type: String,
    trim: true
  },
  subRoute: {
    type: String,
    trim: true
  },
  noOfBottles: {
    type: Number
  },
  ratePerBottle:{
    type: Number
  },
  depositAmount: {
    type: Number
  },
  paymentMode: {
    type: String,
    enum: ['Cash', 'Credit']
  },
  location: {
    address: {
      type: String,
      // required: true
    },
    coordinates: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        // required: true
      }
    }
  }
},{ timestamps: true });

customerSchema.index({ 'location.coordinates': '2dsphere' });

 
module.exports = mongoose.model('Customer', customerSchema);
 
