const express = require('express');
const router = express.Router();
const staffController = require('../controller/staffController');

// Add staff
router.post('/staff', staffController.addStaff);

// Get all staff
router.get('/getallstaff', staffController.getAllStaff);

// Get staff by ID
router.get('/staff/:id', staffController.getStaffById);

// Edit staff
router.put('/staff/:id', staffController.editStaff);

// Delete staff
router.delete('/staff/:id', staffController.deleteStaff);

module.exports = router;
