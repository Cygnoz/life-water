const customerSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    flatNumber: {
      type: String,
      required: true
    },
    streetNumber: {
      type: String,
      required: true
    },
    mobileNumber: {
      type: String,
      required: true,
      unique: true // Ensures no duplicate mobile numbers
    },
    buildingNumber: {
      type: String,
      required: true
    },
    whatsappNumber: {
      type: String,
      required: true
    },
    salesMan: {
        type: String,
        required: true
      },
    address: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures no duplicate emails
    },
    landmark: {
      type: String,
      required: true
    },
    numberOfBottles: {
      type: Number,
      min: 0,
      required: true
    },
    customerType: {
      type: String,
      required: true,
      enum:['Family','Business','other']
    },
    ratePerBottle: {
      type: Number,
      min: 0,
      required: true
    },
    nationality: {
      type: String,
      required: true,
      default: 'Unknown'
    },
    depositAmount: {
      type: Number,
      min: 0,
      required: true
    },
    mainRoute: {
      type: String,
      required: true
    },
    subRoute: {
      type: String,
      required: true
    },
    paymentMode: {
      type: String,
      enum: ['Cash', 'Credit'],
      required: true
    },
    coupon: {
      type: String,
      default: 'NO'
    }
  }, {
    timestamps: true  // Enable timestamps for createdAt and updatedAt fields
  });
  
  module.exports = mongoose.model('Customer', customerSchema);
  