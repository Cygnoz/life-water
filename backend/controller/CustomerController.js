const BusinessCustomer = require('../Models/BussinessCustomerSchema');


// Create a new business customer
const createBusinessCustomer = async (req, res) => {
    try {
      const {
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
        depositAmount,
        paymentMode
      } = req.body;
      
      const logo = req.file ? req.file.filename : null;

      // Validate required fields
      if (!companyName || !firstName) {
        return res.status(400).json({ message: 'Company name and first name are required.' });
      }
  
      // Create a new business customer
      const newCustomer = new BusinessCustomer({
        companyName,
        logo:logo,
        companyWebsite,
        firstName,
        lastName,
        taxPreference,
        mobileNo,
        workPhone,
        workPhone2,
        whatsappNo,
        currency,
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
        depositAmount,
        paymentMode
      });
  
      const savedCustomer = await newCustomer.save();
      res.status(201).json(savedCustomer);
    } catch (error) {
      res.status(500).json({ message: 'Error creating business customer', error });
    }
  };

// Get all business customers
const getAllBusinessCustomers = async (req, res) => {
  try {
    const customers = await BusinessCustomer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching business customers', error });
  }
};

// Get a single business customer by ID
const getBusinessCustomerById = async (req, res) => {
  try {
    const customer = await BusinessCustomer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Business customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching business customer', error });
  }
};

// Update a business customer by ID
const updateBusinessCustomerById = async (req, res) => {
  try {
    const updatedCustomer = await BusinessCustomer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Business customer not found' });
    }
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: 'Error updating business customer', error });
  }
};

// Delete a business customer by ID
const deleteBusinessCustomerById = async (req, res) => {
  try {
    const deletedCustomer = await BusinessCustomer.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) {
      return res.status(404).json({ message: 'Business customer not found' });
    }
    res.status(200).json({ message: 'Business customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting business customer', error });
  }
};


// Individual Customers
// Create a new customer
const createCustomer = async (req, res) => {
  try {
    const {
      customerName,
      firstName,
      lastName,
      taxPreference,
      mobileNo,
      workPhone,
      workPhone2,
      whatsappNo,
      currency,
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
      depositAmount,
      paymentMode
    } = req.body;

    // Validate required fields
    if (!customerName || !firstName) {
      return res.status(400).json({ message: 'Customer name and first name are required.' });
    }

    // Create a new customer
    const newCustomer = new Customer({
      customerName,
      firstName,
      lastName,
      taxPreference,
      mobileNo,
      workPhone,
      workPhone2,
      whatsappNo,
      currency,
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
      depositAmount,
      paymentMode
    });

    const savedCustomer = await newCustomer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    res.status(500).json({ message: 'Error creating customer', error });
  }
};

// Get all customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching customers', error });
  }
};

// Get a single customer by ID
const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching customer', error });
  }
};

// Update a customer by ID
const updateCustomerById = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: 'Error updating customer', error });
  }
};

// Delete a customer by ID
const deleteCustomerById = async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting customer', error });
  }
};


module.exports = {
  createBusinessCustomer,
  getAllBusinessCustomers,
  getBusinessCustomerById,
  updateBusinessCustomerById,
  deleteBusinessCustomerById,
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById
};