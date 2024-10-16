const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const staffSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
  },
  username: {
    type: String,
    unique: true,  // Ensure unique username for login
    required: function() {
      return this.designation === 'Sales';  // Only required for Sales
    }
  },
  password: {
    type: String,
    required: function() {
      return this.designation === 'Sales';  // Only required for Sales
    }
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
  whatsAppNumber: {
    type: String,
    required: true,
  },
  visaNumber: {
    type: String,
  },
  dateofBirth: {
    type: Date,
  },
  nationality: {
    type: String,
  },
  designation: {
    type: String,
    enum: ['Sales', 'Driver', 'Helper'],
    required: true,
  },
  emiratesId: {
    type: String,
  }
});

// Pre-save hook to hash the password before saving
staffSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Method to compare password for login
staffSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
