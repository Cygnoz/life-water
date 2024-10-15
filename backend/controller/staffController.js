


// Add new staff
const bcrypt = require('bcrypt');
const Staff = require("../Models/StaffSchema"); // Ensure the path matches the casing
const Login = require('../Models/LoginSchema');

// Get all staff members
const getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get staff by ID
const getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) return res.status(404).json({ message: 'Staff not found' });
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Edit (Update) staff
// Utility function to normalize file paths
const normalizeFilePath = (filePath) => {
  return filePath.replace(/\\/g, "/").replace(/^uploads\//, ""); // remove "uploads/" prefix if it exists
};

const addStaff = async (req, res) => {
  try {
    const { firstname, lastname, username, designation, password, emiratesId } = req.body;

    // Check for existing staff with the same emiratesId
    const existingStaff = await Staff.findOne({ emiratesId });
    if (existingStaff) {
      return res.status(400).json({ message: 'Staff member with this emiratesId number already exists.' });
    }

    // Handle logic specific to "Salesman"
    if (designation === 'Sales') {
      // Ensure username and password are provided
      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required for Salesman.' });
      }

      // Check for existing login with the same username
      const existingLogin = await Login.findOne({ username });
      if (existingLogin) {
        return res.status(400).json({ message: 'User with this username already exists.' });
      }

      // Hash password for "Salesman"
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new login record for "Salesman"
      const newLogin = new Login({
        username,
        password: hashedPassword,
      });

      try {
        // Save login record for Salesman only
        await newLogin.save();
      } catch (error) {
        return res.status(500).json({ message: 'Failed to save login for Salesman', error: error.message });
      }
    }

    // Create the new staff record for both "Salesman", "Driver", or "Helper"
    const newStaff = new Staff({
      firstname,
      lastname,
      username: designation === 'Sales' ? username : null, // Only assign username for Salesman
      profile: req.file ? normalizeFilePath(req.file.path) : null,
      address: req.body.address,
      visaStatus: req.body.visaStatus,
      visaValidity: req.body.visaValidity,
      mobileNumber: req.body.mobileNumber,
      whatsAppNumber: req.body.whatsAppNumber,
      visaNumber: req.body.visaNumber,
      dateofBirth: req.body.dateofBirth,
      nationality: req.body.nationality,
      designation,
      emiratesId,
    });

    // Save the staff record
    const savedStaff = await newStaff.save();
    res.status(201).json(savedStaff);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



const editStaff = async (req, res) => {
  try {
    const updatedData = { ...req.body };

    if (req.file) {
      updatedData.profile = normalizeFilePath(req.file.path); // normalize path on update
    }

    const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!updatedStaff) return res.status(404).json({ message: 'Staff not found' });
    res.status(200).json(updatedStaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



// Delete staff
const deleteStaff = async (req, res) => {
  try {
    const deletedStaff = await Staff.findByIdAndDelete(req.params.id);
    if (!deletedStaff) return res.status(404).json({ message: 'Staff not found' });
    res.status(200).json({ message: 'Staff deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addStaff,
  getAllStaff,
  getStaffById,
  editStaff,
  deleteStaff
};
