const express = require('express');
const router = express.Router();
const staffController = require('../controller/staffController');
const vehicleController = require('../controller/VehicleController');
const routeController = require('../controller/RouteController');
const subrouteController = require('../controller/SubRouteController');

const upload = require('../middleware/Multermiddleware')

// Add staff
router.post('/addstaff',upload.single('profile'),staffController.addStaff);

// Get all staff setted
router.get('/getallstaffs', staffController.getAllStaff);

// Get staff by ID
router.get('/staff/:id', staffController.getStaffById);

// Edit staff
router.put('/staff/:id', staffController.editStaff);

// Delete staff
router.delete('/staff/:id', staffController.deleteStaff);


// Define routes
router.post('/addVehicle', vehicleController.addVehicle);
router.get('/viewVehicles', vehicleController.getAllVehicles);
router.put('/update/:id', vehicleController.updateVehicle);
router.delete('/delete/:id', vehicleController.deleteVehicle);
router.get('/view/:id',vehicleController.viewVehicleById)

// Route endpoints
router.post('/addRoute', routeController.addRoute);
router.delete('/delRoute/:id', routeController.deleteRoute);    // Delete route by ObjectId
router.put('/updateRoute/:id', routeController.updateRoute);       // Update route by ObjectId
router.get('/viewRoutes', routeController.viewAllRoutes);         // View all routes
router.get('/viewRoute/:id', routeController.viewRouteById);     // View route by ObjectId

// subroute
router.post('/addSRoute', subrouteController.addSubroute);
router.put('/updateSRoute/:id', subrouteController.editSubroute);
router.delete('/delSRoute/:id', subrouteController.deleteSubroute);
router.get('/viewSRoute', subrouteController.viewAllSubroutes);
router.get('/viewSRoute/:id', subrouteController.viewSubroute);

module.exports = router;
