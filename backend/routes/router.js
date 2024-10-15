const express = require('express');
const router = express.Router();
const staffController = require('../controller/staffController');
const vehicleController = require('../controller/VehicleController');
const routeController = require('../controller/RouteController');
const subrouteController = require('../controller/SubRouteController');
const CustomerController = require('../controller/CustomerController');

const upload = require('../middleware/Multermiddleware')

// STAFF 

// Add staff
router.post('/addstaff',upload.single('profile'),staffController.addStaff);
// Get all staff
router.get('/getallstaffs', staffController.getAllStaff);
// Get staff by ID
router.get('/staff/:id', staffController.getStaffById);
// Edit staff
router.put('/staff/:id',upload.single('profile'), staffController.editStaff);
// Delete staff
router.delete('/staff/:id', staffController.deleteStaff);


// VEHICLE 
// Add vehicle 
router.post('/addVehicle', upload.single('vehicleImage'), vehicleController.addVehicle);
// view vehicle 
router.get('/viewVehicles', vehicleController.getAllVehicles);
// view single vehicle 
router.get('/viewvehicle/:id',vehicleController.viewVehicleById)
// edit vehicle 
router.put('/editvehicle/:id',upload.single('image'), vehicleController.updateVehicle);
// delete vehicle 
router.delete('/deletevehicle/:id', vehicleController.deleteVehicle);





// ROUTE 

// Route endpoints
router.post('/addRoute', routeController.addRoute);
router.delete('/delRoute/:id', routeController.deleteRoute);    // Delete route by ObjectId
router.put('/updateRoute/:id', routeController.updateRoute);       // Update route by ObjectId
router.get('/getAllRoutes' ,routeController.getAllRoutes)        // View all routes
router.get('/viewRoute/:id', routeController.viewRouteById);     // View route by ObjectId

// subroute
router.post('/addSRoute', subrouteController.addSubroute);
router.put('/updateSRoute/:id', subrouteController.editSubroute);
router.delete('/delSRoute/:id', subrouteController.deleteSubroute);
router.get('/viewSRoute', subrouteController.viewAllSubroutes);
router.get('/viewSRoute/:id', subrouteController.viewSubroute);

//customer
// Bussiness customer
router.post('/business-customer',CustomerController.createBusinessCustomer);
router.get('/business-customer', CustomerController.getAllBusinessCustomers);
router.get('/business-customer/:id', CustomerController.getBusinessCustomerById);
router.put('/business-customer/:id', CustomerController.updateBusinessCustomerById);
router.delete('/business-customer/:id', CustomerController.deleteBusinessCustomerById);

// Individual customer
router.post('/customer', CustomerController.createCustomer);
router.get('/customer', CustomerController.getAllCustomers);
router.get('/customer/:id', CustomerController.getCustomerById);
router.put('/customer/:id', CustomerController.updateCustomerById);
router.delete('/customer/:id', CustomerController.deleteCustomerById);

module.exports = router;
