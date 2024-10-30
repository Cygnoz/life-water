// const BusinessCustomer = require('../Models/BussinessCustomerSchema');
const Customer = require('../Models/CustomerSchema');
 
 
const createCustomer = async (req, res) => {
  try {
    const {
      customerType,
      companyName,
      companyWebsite,
      firstName,
      lastName,
      taxPreference,
      mobileNo,
      workPhone,
      workPhone2,
      whatsappNo,
      currency,
      currencyCode,
      placeOfSupply,
      state,
      city,
      area,
      zipPostalCode,
      billingAddress,
      email,
      landmark,
      buildingNo,
      street,
      salesman,
      nationality,
      mainRoute,
      subRoute,
      noOfBottles,
      ratePerBottle,
      depositAmount,
      paymentMode
    } = req.body;

    console.log(req.body);
    
 
    // Validate required fields
    if (!firstName) {
      return res.status(400).json({ message: 'First name is required.' });
    }
 
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!email || !emailRegex.test(email)) {
    //   return res.status(400).json({ message: 'Invalid email format.' });
    // }
 
    const existingCustomer = await Customer.findOne({ whatsappNo });
    if (existingCustomer) {
      return res.status(400).json({ message: 'A customer with this WhatsApp number already exists.' });
    }
 
    // Create a new customer based on type
    const newCustomer = new Customer({
      customerType,
      companyName: customerType === 'Business' ? companyName : null,
      logo: req.file ? req.file.filename : null,
      companyWebsite,
      firstName,
      lastName,
      taxPreference,
      mobileNo,
      workPhone,
      workPhone2,
      whatsappNo,
      currency,
      currencyCode,
      placeOfSupply,
      state,
      city,
      area,
      zipPostalCode,
      billingAddress,
      email,
      landmark,
      buildingNo,
      street,
      salesman,
      nationality,
      mainRoute,
      subRoute,
      noOfBottles,
      ratePerBottle,
      depositAmount,
      paymentMode
    });
 
    const savedCustomer = await newCustomer.save();
 
    return res.status(201).json({
      message: 'Customer created successfully!',
      data: savedCustomer,
      status: 201
    });
  } catch (error) {
    console.error('Error creating customer:', error);
 
    // if (error.code === 11000) {
    //   return res.status(400).json({ message: 'A customer with this email already exists.' });
    // }
 
    return res.status(500).json({ message: 'Error creating customer', error });
  }
};



// Ensure correct path to your model

// Controller to add a customer from Salesman module
const addCustomerFromSalesman = async (req, res) => {
  try {
    // Destructure only the necessary fields from the request body
    const {
      customerType,
      companyName,
      firstName,
      lastName,
      email,
      numberOfBottles,
      rate,
      paymentMode,
      contactNumber,
      whatsappNumber,
      depositAmount,
      mainRoute,
      subRoute,
      location
    } = req.body;

    console.log(req.body);
    

    console.log('Coordinates:', location.coordinates);

    const { address, coordinates } = req.body.location;
        const transformedLocation = {
            address,
            coordinates: {
                type: "Point",
                coordinates: [coordinates.longitude, coordinates.latitude] // [longitude, latitude]
            }
        };


    // Create a new customer document
    const newCustomer = new Customer({
      customerType,
      companyName,
      firstName,
      lastName,
      email,
      noOfBottles: numberOfBottles,
      ratePerBottle: rate,
      paymentMode,
      mobileNo: contactNumber,
      whatsappNo: whatsappNumber,
      depositAmount,
      mainRoute,
      subRoute,
      location: transformedLocation
    });

    // Save the customer to the database
    const savedCustomer = await newCustomer.save();
    res.status(201).json({ message: 'Customer added successfully', customer: savedCustomer, status:201 });
  } catch (error) {
    console.error('Error adding customer:', error);
    res.status(500).json({ message: 'Error adding customer', error: error.message });
  }
};





 
// Get all customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching business customers', error });
  }
};
 
// Get a single customer by ID
const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Business customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching business customer', error });
  }
};
 
// Update a customer by ID
const updateCustomerById = async (req, res) => {
  try {
    // Check if a file (logo) is uploaded
    let updatedData = { ...req.body };
    if (req.file) {
      updatedData.logo = req.file.filename;  // Store the uploaded file's name in the logo field
    }

    // Update the customer in the database
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, updatedData, { new: true });

    // Check if the customer was found and updated
    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    // Return the updated customer
    return res.status(200).json(updatedCustomer);
  } catch (error) {
    console.error('Error updating customer:', error);
    return res.status(500).json({ message: 'Error updating customer', error });
  }
};



 
// Delete a business customer by ID
const deleteCustomerById = async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting business customer', error });
  }
};

  
module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
  addCustomerFromSalesman
};
