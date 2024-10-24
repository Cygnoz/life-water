const ActiveRoute = require('../Models/ActiveRoute'); // Adjust the path accordingly

// POST method to create a new ActiveRoute
const createActiveRoute = async (req, res) => {
  try {
    const { mainRoute, subRoute, helper, driver, vehicleNo, openingStock, loadedStock, totalStock, startingKm } = req.body;

    // Create a new ActiveRoute instance
    const newActiveRoute = new ActiveRoute({
      mainRoute,
      subRoute,
      helper,
      driver,
      vehicleNo,
      openingStock,
      loadedStock,
      totalStock,
      startingKm,
    });

    // Save the new ActiveRoute to the database
    await newActiveRoute.save();

    // Send a success response
    res.status(201).json({
      message: 'ActiveRoute created successfully',
      data: newActiveRoute,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred while creating the ActiveRoute',
      error: error.message,
    });
  }
};


const getActiveRoutes = async (req, res) => {
  try {
    // Retrieve all active routes from the database
    const activeRoutes = await ActiveRoute.find();

    // Send a success response with the active routes data
    res.status(200).json({
      message: 'ActiveRoutes retrieved successfully',
      data: activeRoutes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'An error occurred while retrieving ActiveRoutes',
      error: error.message,
    });
  }
};
module.exports = {
  createActiveRoute,
  getActiveRoutes,
};
