import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/images/search (2).svg';
import plusIcon from '../assets/images/pluscircle.svg';
import phone from '../assets/images/phone.png';

import { getAllCustomersAPI } from '../services/customers/customers';
import { BASEURL } from '../services/BaseURL';
import { Box, Modal, Typography } from '@mui/material';

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  message: string;
  depositAmount: number;
  ratePerBottle: number;
  noOfBottles: number;
  logo: string;
  paymentMode: string;
  location: {
    address: string;
    coordinates: [number, number]; // [longitude, latitude]
  };
}

const ViewCustomers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [showLocation, setShowLocation] = useState(false); // Track if location iframe is shown

  const defaultImage = 'https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png';

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await getAllCustomersAPI();
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  const filteredCustomers = customers.filter((customer) =>
    `${customer.firstName} ${customer.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpen = (customer: Customer) => {
    console.log('Customer coordinates:', customer);
    setSelectedCustomer(customer);
    setShowLocation(false);
  };
  

  const handleClose = () => {
    setSelectedCustomer(null);
    setShowLocation(false); // Hide location iframe on close
  };

  return (
    <>
      <div className="min-h-screen p-4 bg-gray-100">
        {/* Search and Add Customer UI */}
        <div className="w-full max-w-md flex items-center justify-between px-4 mb-8">
          <div className="relative w-full flex items-center">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 text-sm w-full rounded-xl text-[#8F99A9] h-10 border-0 bg-[#FFFFFF] focus:ring-1 focus:ring-gray-100 focus:outline-none"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <img src={searchIcon} alt="Search Icon" className="w-4 h-4" />
            </div>
          </div>
          <Link to="/addcustomers">
            <img className="m-2" src={plusIcon} alt="Add Customer" width={30} />
          </Link>
        </div>

        {/* Customer List */}
        <div>
          {filteredCustomers.map((customer) => {
            const dueAmount = customer.depositAmount - customer.ratePerBottle * customer.noOfBottles;

            return (
              <div
                onClick={() => handleOpen(customer)}
                key={customer.id}
                className="flex items-center p-4 mb-2 bg-white rounded-xl shadow"
              >
                <div className="flex-1 flex gap-4">
                  <img
                    className="object-cover w-11 h-11 rounded-full"
                    src={customer.logo ? `${BASEURL}/uploads/${customer.logo}` : defaultImage}
                    alt={`${customer.firstName} ${customer.lastName}`}
                  />
                  <div>
                    <div className="font-bold">
                      {customer.firstName} {customer.lastName}
                    </div>
                    <div className="text-sm text-gray-600">Due Amount: ₹{dueAmount}</div>
                    <div className="text-sm">
                      Payment Mode - <span className="text-red-700 font-semibold">{customer.paymentMode}</span>
                    </div>
                  </div>
                </div>
                <button className="ml-4 p-3 bg-green-200 text-white rounded-full">
                  <img src={phone} alt="Action Icon" className="w-5 h-5 rounded-full" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <Modal
  open={!!selectedCustomer}
  onClose={handleClose}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <Box
    sx={{
      width: { xs: '90%', sm: '75%', md: '50%', lg: '40%' },
      maxWidth: '600px',
      bgcolor: 'white',
      p: 4,
      borderRadius: 2,
      boxShadow: 24,
      m: 'auto',
      mt: { xs: 2, sm: 4, md: 6 },
      textAlign: 'center', // Center-aligns all content inside the Box
    }}
  >
    <Typography 
      id="modal-title" 
      variant="h6" 
      component="h2" 
      fontWeight="bold"
    >
      {selectedCustomer ? `${selectedCustomer.firstName} ${selectedCustomer.lastName}` : ''}
    </Typography>

    <Typography id="modal-description" sx={{ mt: 2 }}>
      {selectedCustomer && (
        <>
          <p><strong>Deposit Amount:</strong> ₹{selectedCustomer.depositAmount}</p>
          <p><strong>Rate Per Bottle:</strong> ₹{selectedCustomer.ratePerBottle}</p>
          <p><strong>No of Bottles:</strong> {selectedCustomer.noOfBottles}</p>
          <p>
            <strong>Phone:</strong> {selectedCustomer.mobileNo}
          </p>
          <button 
            className="bg-red-800 text-white p-2 rounded-md mt-2 mx-auto" // Center-aligns the button with mx-auto
            onClick={() => setShowLocation(true)} // Set showLocation to true to display iframe
          >
            GET LOCATION
          </button>
        </>
      )}
    </Typography>

    {/* Conditional Rendering of Google Maps Iframe */}
    {showLocation && selectedCustomer && (
      <div className=" mt-4">
        <iframe
          src={`https://www.google.com/maps?q=${selectedCustomer.location.coordinates.coordinates[1]},${selectedCustomer.location.coordinates.coordinates[0]}&output=embed`}
          className="w-full h-[500px]"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    )}
  </Box>
</Modal>

    </>
  );
};

export default ViewCustomers;
