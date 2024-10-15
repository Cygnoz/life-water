const MainRoute = require("../Models/RouteSchema");



// Add a new route
const addRoute = async (req, res) => {
  try {
    // Check if a route with the same routeCode already exists
    const existingRoute = await MainRoute.findOne({ routeCode: req.body.routeCode });

    if (existingRoute) {
      return res.status(400).json({ message: 'Route with this code already exists.' });
    }

    // Create a new route
    const newRoute = new MainRoute({
      mainRoute: req.body.mainRoute,
      routeCode: req.body.routeCode,
      description: req.body.description,
      // Add additional fields here if necessary
    });

    // Save the new route in the database
    const savedRoute = await newRoute.save();

    // Send success response
    res.status(201).json(savedRoute);
  } catch (error) {
    res.status(500).json({ message: 'Error creating route', error: error.message });
  }
};



// Delete a route by ObjectId
const deleteRoute = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("ID received for deletion:", id);  // Log the ID to verify it's being passed correctly

    const deletedRoute = await MainRoute.findByIdAndDelete(id);
    if (!deletedRoute) {
      return res.status(404).json({ message: 'Route not found' });
    }

    return res.status(200).json({ message: 'Route deleted successfully' });
  } catch (error) {
    console.error('Error deleting route:', error.message);
    return res.status(500).json({ message: 'Error deleting route', error: error.message });
  }
};


// Update a route by ObjectId
const updateRoute = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedRoute = await Route.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedRoute) {
      return res.status(404).json({ message: 'Route not found' });
    }

    return res.status(200).json({ message: 'Route updated successfully', route: updatedRoute });
  } catch (error) {
    console.error('Error updating route:', error.message);
    return res.status(500).json({ message: 'Error updating route', error: error.message });
  }
};

// View all routes
 const getAllRoutes = async (req, res) => {
  try {
    const routes = await MainRoute.find();
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// View a route by ObjectId
const viewRouteById = async (req, res) => {
  try {
    const { id } = req.params;

    const route = await Route.findById(id).populate('subroutes');
    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }

    return res.status(200).json({ route });
  } catch (error) {
    console.error('Error fetching route:', error.message);
    return res.status(500).json({ message: 'Error fetching route', error: error.message });
  }
};

module.exports = {
  addRoute,
  deleteRoute,
  updateRoute,
  getAllRoutes,
  viewRouteById
};