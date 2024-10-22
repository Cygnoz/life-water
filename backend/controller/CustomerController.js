// const BusinessCustomer = require('../Models/BussinessCustomerSchema');
const Customer = require('../Models/CustomerSchema');
 
 
// Create a new business customer
// const createBusinessCustomer = async (req, res) => {
//     try {
//       const {
//         companyName,
//         companyWebsite,
//         firstName,
//         lastName,
//         taxPreference,
//         mobileNo,
//         workPhone,
//         workPhone2,
//         whatsappNo,
//         currency,
//         placeOfSupply,
//         state,
//         city,
//         area,
//         zipPostalCode,
//         billingAddress,
//         email,
//         landmark,
//         buildingNo,
//         street,
//         salesman,
//         nationality,
//         mainRoute,
//         subRoute,
//         noOfBottles,
//         depositAmount,
//         paymentMode
//       } = req.body;
 
//       console.log(req.body);
     
     
//       const logo = req.file ? req.file.filename : null;
 
//       // Validate required fields
//       if (!companyName || !firstName) {
//         return res.status(400).json({ message: 'Company name and first name are required.' });
//       }
 
//       // Create a new business customer
//       const newCustomer = new BusinessCustomer({
//         companyName,
//         logo:logo,
//         companyWebsite,
//         firstName,
//         lastName,
//         taxPreference,
//         mobileNo,
//         workPhone,
//         workPhone2,
//         whatsappNo,
//         currency,
//         placeOfSupply,
//         state,
//         city,
//         area,
//         zipPostalCode,
//         billingAddress,
//         email,
//         landmark,
//         buildingNo,
//         street,
//         salesman,
//         nationality,
//         mainRoute,
//         subRoute,
//         noOfBottles,
//         depositAmount,
//         paymentMode
//       });
 
//       const savedCustomer = await newCustomer.save();
//       res.status(201).json(savedCustomer);
//     } catch (error) {
//       res.status(500).json({ message: 'Error creating business customer', error });
//     }
//   };
 
 
 
// Create a new customer (Business or Individual)
// const createCustomer = async (req, res) => {
//   try {
//     const {
//       customerType, // Add customerType to distinguish between business and individual
//       companyName,
//       companyWebsite,
//       firstName,
//       lastName,
//       taxPreference,
//       mobileNo,
//       workPhone,
//       workPhone2,
//       whatsappNo,
//       currency,
//       placeOfSupply,
//       state,
//       city,
//       area,
//       zipPostalCode,
//       billingAddress,
//       email,
//       landmark,
//       buildingNo,
//       street,
//       salesman,
//       nationality,
//       mainRoute,
//       subRoute,
//       noOfBottles,
//       depositAmount,
//       paymentMode
//     } = req.body;
 
//     console.log("Request Body:", req.body);
//     console.log("Customer Type:", req.body.customerType);
 
 
//     // Common validation
//     if (!firstName) {
//       return res.status(400).json({ message: 'First name is required.' });
//     }
 
//     let savedCustomer;
//     if (customerType === 'Business') {
//       // Validate business-specific fields
//       if (!companyName) {
//         return res.status(400).json({ message: 'Company name is required for business customers.' });
//       }
//       const logo = req.file ? req.file.filename : null;
 
//       // Create a new business customer
//       const newBusinessCustomer = new BusinessCustomer({
//         companyName,
//         logo,
//         companyWebsite,
//         firstName,
//         lastName,
//         taxPreference,
//         mobileNo,
//         workPhone,
//         workPhone2,
//         whatsappNo,
//         currency,
//         placeOfSupply,
//         state,
//         city,
//         area,
//         zipPostalCode,
//         billingAddress,
//         email,
//         landmark,
//         buildingNo,
//         street,
//         salesman,
//         nationality,
//         mainRoute,
//         subRoute,
//         noOfBottles,
//         depositAmount,
//         paymentMode
//       });
 
//       savedCustomer = await newBusinessCustomer.save();
//     } else if (customerType === 'Individual') {
//       // Create a new individual customer
//       const newIndividualCustomer = new CustomerSchema({
//         firstName,
//         lastName,
//         taxPreference,
//         mobileNo,
//         workPhone,
//         workPhone2,
//         whatsappNo,
//         currency,
//         placeOfSupply,
//         state,
//         city,
//         area,
//         zipPostalCode,
//         billingAddress,
//         email,
//         landmark,
//         buildingNo,
//         street,
//         salesman,
//         nationality,
//         mainRoute,
//         subRoute,
//         noOfBottles,
//         depositAmount,
//         paymentMode
//       });
 
//       savedCustomer = await newIndividualCustomer.save();
//     } else {
//       return res.status(400).json({ message: 'Invalid customer type. Please select either Business or Individual.' });
//     }
 
//     res.status(201).json(savedCustomer);
//   } catch (error) {
//     console.error("Error creating customer:", error);
//     res.status(500).json({ message: 'Error creating customer', error });
//   }
// };
 
// const createCustomer = async (req, res) => {
//   try {
//     const {
//       customerType,
//       companyName,
//       companyWebsite,
//       firstName,
//       lastName,
//       taxPreference,
//       mobileNo,
//       workPhone,
//       workPhone2,
//       whatsappNo,
//       currency,
//       placeOfSupply,
//       state,
//       city,
//       area,
//       zipPostalCode,
//       billingAddress,
//       email,
//       landmark,
//       buildingNo,
//       street,
//       salesman,
//       nationality,
//       mainRoute,
//       subRoute,
//       noOfBottles,
//       depositAmount,
//       paymentMode
//     } = req.body;
 
//     console.log("Request Body:", req.body);
//     console.log("Customer Type:", req.body.customerType);
 
//     // Common validation
//     if (!firstName) {
//       return res.status(400).json({ message: 'First name is required.' });
//     }
 
//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
//     if (!email || !emailRegex.test(email)) {
//       return res.status(400).json({ message: 'Invalid email format.' });
//     }
 
//     // Check for existing customer by email
//     const existingCustomer = await CustomerSchema.findOne({ email });
//     if (existingCustomer) {
//       return res.status(400).json({ message: 'A customer with this email already exists.' });
//     }
 
//     let savedCustomer;
//     if (customerType === 'Business') {
//       // Validate business-specific fields
//       if (!companyName) {
//         return res.status(400).json({ message: 'Company name is required for business customers.' });
//       }
//       const logo = req.file ? req.file.filename : null;
 
//       // Create a new business customer
//       const newBusinessCustomer = new BusinessCustomer({
//         companyName,
//         logo,
//         companyWebsite,
//         firstName,
//         lastName,
//         taxPreference,
//         mobileNo,
//         workPhone,
//         workPhone2,
//         whatsappNo,
//         currency,
//         placeOfSupply,
//         state,
//         city,
//         area,
//         zipPostalCode,
//         billingAddress,
//         email,
//         landmark,
//         buildingNo,
//         street,
//         salesman,
//         nationality,
//         mainRoute,
//         subRoute,
//         noOfBottles,
//         depositAmount,
//         paymentMode
//       });
 
//       savedCustomer = await newBusinessCustomer.save();
//     } else if (customerType === 'Individual') {
//       // Create a new individual customer
//       const newIndividualCustomer = new CustomerSchema({
//         firstName,
//         lastName,
//         taxPreference,
//         mobileNo,
//         workPhone,
//         workPhone2,
//         whatsappNo,
//         currency,
//         placeOfSupply,
//         state,
//         city,
//         area,
//         zipPostalCode,
//         billingAddress,
//         email,
//         landmark,
//         buildingNo,
//         street,
//         salesman,
//         nationality,
//         mainRoute,
//         subRoute,
//         noOfBottles,
//         depositAmount,
//         paymentMode
//       });
 
//       savedCustomer = await newIndividualCustomer.save();
//     } else {
//       return res.status(400).json({ message: 'Invalid customer type. Please select either Business or Individual.' });
//     }
 
//     // Send success response with a custom message
//     res.status(201).json({
//       message: 'Customer created successfully!',
//       customer: savedCustomer,
//     });
//   } catch (error) {
//     console.error("Error creating customer:", error);
   
//     // Handle MongoDB duplicate key error
//     if (error.code === 11000) {
//       return res.status(400).json({ message: 'A customer with this email already exists.' });
//     }
 
//     // Generic error response
//     res.status(500).json({ message: 'Error creating customer', error });
//   }
// }; working
 
// const createCustomer = async (req, res) => {
//   try {
//     const {
//       customerType,
//       companyName,
//       companyWebsite,
//       firstName,
//       lastName,
//       taxPreference,
//       mobileNo,
//       workPhone,
//       workPhone2,
//       whatsappNo,
//       currency,
//       placeOfSupply,
//       state,
//       city,
//       area,
//       zipPostalCode,
//       billingAddress,
//       email,
//       landmark,
//       buildingNo,
//       street,
//       salesman,
//       nationality,
//       mainRoute,
//       subRoute,
//       noOfBottles,
//       depositAmount,
//       paymentMode
//     } = req.body;
 
//     console.log("Request Body:", req.body);
//     console.log("Customer Type:", req.body.customerType);
 
//     // Common validation
//     if (!firstName) {
//       return res.status(400).json({ message: 'First name is required.' });
//     }
 
//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
//     if (!email || !emailRegex.test(email)) {
//       return res.status(400).json({ message: 'Invalid email format.' });
//     }
 
//     // Check for existing customer by email
//     const existingCustomer = await CustomerSchema.findOne({ email });
//     if (existingCustomer) {
//       return res.status(400).json({ message: 'A customer with this email already exists.' });
//     }
 
//     let savedCustomer;
//     if (customerType === 'Business') {
//       // Validate business-specific fields
//       if (!companyName) {
//         return res.status(400).json({ message: 'Company name is required for business customers.' });
//       }
//       const logo = req.file ? req.file.filename : null;
 
//       // Create a new business customer
//       const newBusinessCustomer = new BusinessCustomer({
//         companyName,
//         logo,
//         companyWebsite,
//         firstName,
//         lastName,
//         taxPreference,
//         mobileNo,
//         workPhone,
//         workPhone2,
//         whatsappNo,
//         currency,
//         placeOfSupply,
//         state,
//         city,
//         area,
//         zipPostalCode,
//         billingAddress,
//         email,
//         landmark,
//         buildingNo,
//         street,
//         salesman,
//         nationality,
//         mainRoute,
//         subRoute,
//         noOfBottles,
//         depositAmount,
//         paymentMode
//       });
 
//       savedCustomer = await newBusinessCustomer.save();
//     } else if (customerType === 'Individual') {
//       // Create a new individual customer
//       const newIndividualCustomer = new CustomerSchema({
//         firstName,
//         lastName,
//         taxPreference,
//         mobileNo,
//         workPhone,
//         workPhone2,
//         whatsappNo,
//         currency,
//         placeOfSupply,
//         state,
//         city,
//         area,
//         zipPostalCode,
//         billingAddress,
//         email,
//         landmark,
//         buildingNo,
//         street,
//         salesman,
//         nationality,
//         mainRoute,
//         subRoute,
//         noOfBottles,
//         depositAmount,
//         paymentMode
//       });
 
//       savedCustomer = await newIndividualCustomer.save();
//     } else {
//       return res.status(400).json({ message: 'Invalid customer type. Please select either Business or Individual.' });
//     }
 
//     // Send success response with a custom message
//     return res.status(201).json({
//       message: 'Customer created successfully!',
//       data: savedCustomer,
//       status:201
//     });
//   } catch (error) {
//     console.error("Error creating customer:", error);
   
//     // Handle MongoDB duplicate key error
//     if (error.code === 11000) {
//       return res.status(400).json({ message: 'A customer with this email already exists.' });
//     }
 
//     // Generic error response
//     return res.status(500).json({ message: 'Error creating customer', error });
//   }
// };
 
 
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
    if (!firstName) {
      return res.status(400).json({ message: 'First name is required.' });
    }
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format.' });
    }
 
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({ message: 'A customer with this email already exists.' });
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
 
    return res.status(201).json({
      message: 'Customer created successfully!',
      data: savedCustomer,
      status: 201
    });
  } catch (error) {
    console.error('Error creating customer:', error);
 
    if (error.code === 11000) {
      return res.status(400).json({ message: 'A customer with this email already exists.' });
    }
 
    return res.status(500).json({ message: 'Error creating customer', error });
  }
};
 
 
 
 
// Get all business customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching business customers', error });
  }
};
 
// Get a single business customer by ID
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
 
// Update a business customer by ID
const updateCustomerById = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCustomer) {
      return res.status(404).json({ message: 'Business customer not found' });
    }
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: 'Error updating business customer', error });
  }
};
 
// Delete a business customer by ID
const deleteCustomerById = async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
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
// Create a new customer
// const createCustomer = async (req, res) => {
 
//   try {
//     // Log the incoming request body for debugging
//     console.log("Request Body:", req.body);
 
//     const {
//       firstName,
//       lastName,
//       taxPreference,
//       mobileNo,
//       workPhone,
//       workPhone2,
//       whatsappNo,
//       currency,
//       placeOfSupply,
//       state,
//       city,
//       area,
//       zipPostalCode,
//       billingAddress,
//       email,
//       landmark,
//       buildingNo,
//       street,
//       salesman,
//       nationality,
//       mainRoute,
//       subRoute,
//       noOfBottles,
//       depositAmount,
//       paymentMode
//     } = req.body;
 
//     // Validate required fields
//     if (!firstName) {
//       console.log("Validation Error: First name is required.");
//       return res.status(400).json({ message: 'Customer first name is required.' });
//     }
 
//     // Log the customer details before creation
//     console.log("Creating customer with details:", {
//       firstName,
//       lastName,
//       taxPreference,
//       mobileNo,
//       workPhone,
//       workPhone2,
//       whatsappNo,
//       currency,
//       placeOfSupply,
//       state,
//       city,
//       area,
//       zipPostalCode,
//       billingAddress,
//       email,
//       landmark,
//       buildingNo,
//       street,
//       salesman,
//       nationality,
//       mainRoute,
//       subRoute,
//       noOfBottles,
//       depositAmount,
//       paymentMode
//     });
 
//     // Create a new customer
//     const newCustomer = new CustomerSchema({
//       firstName,
//       lastName,
//       taxPreference,
//       mobileNo,
//       workPhone,
//       workPhone2,
//       whatsappNo,
//       currency,
//       placeOfSupply,
//       state,
//       city,
//       area,
//       zipPostalCode,
//       billingAddress,
//       email,
//       landmark,
//       buildingNo,
//       street,
//       salesman,
//       nationality,
//       mainRoute,
//       subRoute,
//       noOfBottles,
//       depositAmount,
//       paymentMode
//     });
 
//     const savedCustomer = await newCustomer.save();
//     console.log("Customer created successfully:", savedCustomer);
//     res.status(201).json(savedCustomer);
//   } catch (error) {
//     console.error("Error creating customer:", error);
//     res.status(500).json({ message: 'Error creating customer', error });
//   }
// };
 
 
// Get all customers
 
 
 
// Get a single customer by ID
 
 
 
module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById
};
