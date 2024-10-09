const Staff = require('../models/staffSchema'); // Adjust the path based on your file structure

// Add new staff


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
    const existingStaff = await Staff.findOne({ emiratesId: req.body.emiratesId });

    if (existingStaff) {
      return res.status(400).json({ message: 'Staff member with this emiratesId number already exists.' });
    }

    const newStaff = new Staff({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      profile: req.file ? normalizeFilePath(req.file.path) : null,
      address: req.body.address,
      visaStatus: req.body.visaStatus,
      visaValidity: req.body.visaValidity,
      mobileNumber: req.body.mobileNumber,
      whatsAppNumber: req.body.whatsAppNumber,
      visaNumber: req.body.visaNumber,
      dateofBirth: req.body.dateofBirth,
      nationality: req.body.nationality,
      designation: req.body.designation,
      emiratesId: req.body.emiratesId,
    });

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
