const Subroute = require('../Models/SubrouteSchema'); // Adjust the path as necessary
const Route = require('../Models/RouteSchema'); // Adjust the path as necessary

// Add a new subroute
exports.addSubroute = async (req, res) => {
    try {
        const { subrouteName, subrouteCode, description, routeCode } = req.body;

        // Check if the main route with the provided routeCode exists
        const routeExists = await Route.findOne({ routeCode });
        if (!routeExists) {
            return res.status(400).json({ message: 'Main route not found' });
        }

        const newSubroute = new Subroute({
            subrouteName,
            subrouteCode,
            description,
            routeCode // Reference to the main route code
        });

        const savedSubroute = await newSubroute.save();
        res.status(201).json(savedSubroute);
    } catch (error) {
        res.status(500).json({ message: 'Error adding subroute', error });
    }
};

// Edit an existing subroute by ID
exports.editSubroute = async (req, res) => {
    try {
        const { id } = req.params;
        const { subrouteName, subrouteCode, description, routeCode } = req.body;

        const updatedSubroute = await Subroute.findByIdAndUpdate(
            id,
            { subrouteName, subrouteCode, description, routeCode },
            { new: true } // Return the updated document
        );

        if (!updatedSubroute) {
            return res.status(404).json({ message: 'Subroute not found' });
        }

        res.status(200).json(updatedSubroute);
    } catch (error) {
        res.status(500).json({ message: 'Error updating subroute', error });
    }
};

// Delete a subroute by ID
exports.deleteSubroute = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedSubroute = await Subroute.findByIdAndDelete(id);

        if (!deletedSubroute) {
            return res.status(404).json({ message: 'Subroute not found' });
        }

        res.status(200).json({ message: 'Subroute deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting subroute', error });
    }
};

// View a single subroute by ID
exports.viewSubroute = async (req, res) => {
    try {
        const { id } = req.params;

        const subroute = await Subroute.findById(id);

        if (!subroute) {
            return res.status(404).json({ message: 'Subroute not found' });
        }

        res.status(200).json(subroute);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching subroute', error });
    }
};

// View all subroutes
exports.viewAllSubroutes = async (req, res) => {
    try {
        const subroutes = await Subroute.find();

        if (subroutes.length === 0) {
            return res.status(404).json({ message: 'No subroutes found' });
        }

        res.status(200).json(subroutes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching subroutes', error });
    }
};
