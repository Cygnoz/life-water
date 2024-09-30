const Staff = require('../models/StaffSchema'); // Adjust the path based on your file structure

// Add new staff
const addStaff = async (req, res) => {
  try {
    // Check if a staff member with the same mobile number already exists
    const existingStaff = await Staff.findOne({ emiratesId: req.body.emiratesId });

    if (existingStaff) {
      return res.status(400).json({ message: 'Staff member with this emiratesId number already exists.' });
    }

    // If no existing staff member is found, proceed to create a new one
    const newStaff = new Staff(req.body);
    const savedStaff = await newStaff.save();

    res.status(201).json(savedStaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


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
const editStaff = async (req, res) => {
  try {
    const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
