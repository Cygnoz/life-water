import React, { useState } from 'react';

interface NewCustomerFormState {
  firstName: string;
  lastName: string;
  numberOfBottles: string;
  rate: string;
  paymentMode: string;
  contactNumber: string;
  whatsappNumber: string;
  depositAmount: string;
  location: string;
  customerType: string;
  companyName: string;
  
}

const AddCustomer: React.FC = () => {
  const [formData, setFormData] = useState<NewCustomerFormState>({
    firstName: '',
    lastName: '',
    numberOfBottles: '',
    rate: '',
    paymentMode: '',
    contactNumber: '',
    whatsappNumber: '',
    depositAmount: '',
    location: '',
    customerType:'',
    companyName:''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('New customer form submitted', formData);
  };

  return (
    <div className='m-3 bg-[#F5F6FA]'>
        <div className="max-w-md mx-auto p-6 bg-[#FFFFFF] shadow-md rounded-lg">
      <h2 className="text-lg font-semibold text-center mb-4">New Customer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      <div>
      <div>
                <label className="block text-sm font-medium text-gray-700 mt-3 mb-3">Customer Type</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="customerType" value="Business" checked={formData.customerType === "Business"} onChange={handleInputChange} className="mr-2" required />
                    Business
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="customerType" value="Individual" checked={formData.customerType === "Individual"} onChange={handleInputChange} className="mr-2" required />
                    Individual
                  </label>
                </div>
              </div>
         
        </div>
        {formData.customerType === "Business" && (
                <div>
                  <label className="block text-[#303F58] font-[14px] mb-2">Company Name</label>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} className="w-full h-[36px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Company Name" required />
                </div>
              )}
        {/* First Name */}
        <div>
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Enter First Name"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Enter Last Name"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="text"
            name="email"
        
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Enter Last Name"
          />
        </div>

        {/* Number of Bottles and Rate */}
        <div className="flex space-x-2">
          <div className="w-1/2">
            <label className="block text-gray-700">Number of Bottles</label>
            <input
              type="text"
              name="numberOfBottles"
              value={formData.numberOfBottles}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="Number of Bottles"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700">Rate</label>
            <input
              type="text"
              name="rate"
              value={formData.rate}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="Rate"
            />
          </div>
        </div>

        {/* Payment Mode */}
        <div>
          <label className="block text-gray-700">Payment Mode</label>
          <select
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-md"
          >
            <option value="">Select Payment Mode</option>
            <option value="Cash">Cash</option>
            <option value="Credit">Credit</option>
          </select>
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-gray-700">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Enter Contact Number"
          />
        </div>

        {/* Whatsapp Number */}
        <div>
          <label className="block text-gray-700">Whatsapp Number</label>
          <input
            type="text"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Enter Whatsapp Number"
          />
        </div>

        {/* Deposit Amount */}
        <div>
          <label className="block text-gray-700">Deposit Amount</label>
          <input
            type="text"
            name="depositAmount"
            value={formData.depositAmount}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Deposit Amount"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Enter Location"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-[#820000] text-white p-2 mt-4 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddCustomer;
