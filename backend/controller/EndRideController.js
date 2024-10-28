const ActiveRoute = require('../Models/ActiveRoute');
const EndRide = require('../Models/EndRide');

// Controller to handle ending the ride
const endRide = async (req, res) => {
  const { endingKM, travelledKM, expenses, activeRouteId } = req.body;

  try {
    // Create a new EndRide entry
    const endRideEntry = new EndRide({
      endingKM,
      travelledKM,
      expenses,
      activeRouteId,
    });

    await endRideEntry.save();

    // Delete the active route once the ride is ended
    await ActiveRoute.findByIdAndDelete(activeRouteId);

    res.status(200).json({
      message: 'Ride ended successfully and active route deleted.',
      endRideEntry,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to end ride',
      error: error.message,
    });
  }
};

module.exports = { endRide };
