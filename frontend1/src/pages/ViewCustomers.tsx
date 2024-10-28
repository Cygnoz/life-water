import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/images/search (2).svg';
import plusIcon from '../assets/images/pluscircle.svg';
import phone from '../assets/images/phone.png';

import { getAllCustomersAPI } from '../services/customers/customers';
import { BASEURL } from '../services/BaseURL';


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
    coordinates: [number, number]; // longitude, latitude
  };
}

const ViewCustomers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <>
      <div className="min-h-screen p-4 bg-gray-100">
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

        <div>
          {filteredCustomers.map((customer) => {
            const dueAmount = customer.depositAmount - customer.ratePerBottle * customer.noOfBottles;

            return (
              <div key={customer.id} className="flex items-center p-4 mb-2 bg-white rounded-xl shadow">
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
    </>
  );
};

export default ViewCustomers;
