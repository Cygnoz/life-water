import React, { useState } from 'react';

const AddPayment = () => {

  const [form, setForm] = useState({
    date: '2024-09-24',
    customer: '',
    invoiceNumber: '',
    invoiceAmount: '',
    remainingAmount: '',
    collectAmount: '',
    totalOutstanding: 0,
  });

  const [customers] = useState(['Felecia', 'John Doe', 'Jane Smith']); // Sample customer list
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Handle input change for form fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle customer search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowDropdown(true); // Show dropdown when typing
  };

  // Filter customers based on search query
  const filteredCustomers = customers.filter((customer) =>
    customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle customer selection
  const handleCustomerSelect = (customer) => {
    setForm({ ...form, customer });
    setSearchQuery(customer); // Set the search input to the selected customer
    setShowDropdown(false); // Hide the dropdown
  };

  // Clear search input
  const clearSearch = () => {
    setSearchQuery('');
    setForm({ ...form, customer: '' });
    setShowDropdown(false);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      {/* Date */}
      <div className="mb-4">
        <label className="block text-gray-700">Date</label>
        <div className="flex items-center border border-gray-300 rounded-lg p-2">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-8 4h8m-8 4h8m-8 4h8m-4-12v16"
            />
          </svg>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="ml-2 w-full bg-transparent outline-none text-gray-700"
          />
        </div>
      </div>

      {/* Search for Customer */}
      <div className="mb-4">
        <label className="block text-gray-700">Search For Customer</label>
        <div className="relative">
          <input
            type="text"
            name="customer"
            placeholder="Search customer"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setShowDropdown(true)} // Show dropdown when input is focused
            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          />

          {/* Dropdown arrow */}
          <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Clear Button */}
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute top-1/2 right-10 transform -translate-y-1/2 text-gray-500"
            >
              X
            </button>
          )}

          {/* Dropdown List */}
          {showDropdown && filteredCustomers.length > 0 && (
            <ul
              className="absolute z-10 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1"
              onMouseDown={(e) => e.preventDefault()} // Prevents blur event when clicking dropdown
            >
              {filteredCustomers.map((customer, index) => (
                <li
                  key={index}
                  onClick={() => handleCustomerSelect(customer)}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {customer}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Other form fields */}
      <div className="mb-4">
        <label className="block text-gray-700">Invoice Number</label>
        <input
          type="text"
          name="invoiceNumber"
          placeholder="Enter the quantity"
          value={form.invoiceNumber}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Invoice Amount</label>
        <input
          type="number"
          name="invoiceAmount"
          placeholder="Enter the Invoice amount"
          value={form.invoiceAmount}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Remaining Amount</label>
        <input
          type="number"
          name="remainingAmount"
          placeholder="Enter the remaining amount"
          value={form.remainingAmount}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Collect Amount</label>
        <input
          type="number"
          name="collectAmount"
          placeholder="Enter the collect amount"
          value={form.collectAmount}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
          
        />
      </div>

      {/* Total Outstanding Amount with border */}
      <div className="border border-gray-300 rounded-lg p-4 mt-6 text-center">
        <p className="text-gray-700">Total Outstanding Amount</p>
        <p className="text-red-500 font-bold text-xl">{form.totalOutstanding}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button className="w-1/3 p-2 bg-white text-red-500 border border-red-500 rounded-lg hover:bg-gray-100">
          Cancel
        </button>
        <button className="w-1/3 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Submit
        </button>
      </div>
    </div>
  </div>
  )
}

export default AddPayment