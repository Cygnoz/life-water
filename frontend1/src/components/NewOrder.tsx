import React, { useState, FormEvent } from "react";
import handcoin from "../assets/images/ordercoupon.png";
import tags from "../assets/images/ordernotvs.svg";
import userplus from "../assets/images/user-round-plus.svg";
import circleplus from "../assets/images/circle-plus.png";
import circleminus from "../assets/images/circle-minus.png";

interface OrderFormState {
  date: string;
  orderNumber: string;
  filter: string;
  selectedCustomer: string;
  item: string;
  paymentMode: string;
  ratePerItem: string;
  returnBottle: string;
  remarks: string;
  total: number;
}

const NewOrder: React.FC = () => {
  const [formData, setFormData] = useState<OrderFormState>({
    date: "",
    orderNumber: "",
    filter: "",
    selectedCustomer: "",
    item: "",
    paymentMode: "",
    ratePerItem: "",
    returnBottle: "",
    remarks: "",
    total: 0,
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted", formData);
  };

  return (
    <div className="bg-[#F5F6FA] p-3">
      
      <div className="grid grid-cols-2 my-2 space-x-2">
        <div className="bg-[#FFFFFF] flex rounded-xl">
          <div>
          <img
              src={tags}
              alt="Not Visited Icon"
              className=" text-white m-2"
            />
          </div>
          <div className="m-1">
          <h2 className="text-[18px] font-[700] text-[#820000]">2</h2>
          <p className="font-bold text-[#787A7D]  text-sm">Stock Limit</p>
        
          </div>
          
        </div>
        <div  className="bg-[#FFFFFF] flex rounded-lg">
       
             <div>
             <img
              src={handcoin}
              alt="Total Customers Icon"
              className=" text-white m-2"
            />
          </div>
          <div className="m-1">
          <h2 className="text-lg font-medium text-[#820000]">2</h2>
          <p className="font-bold text-[#787A7D]  text-sm">Coupon Limit</p>
        
          </div>
        </div>

      </div>
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Date */}
          <div>
            <input type="date"
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="24-09-11" />
          </div>

          {/* Order Number & Filter */}
          <div className="flex space-x-2">
            <div className="w-1/2">
              <label className="block text-gray-700">Order Number</label>
              <input
                type="text"
                name="orderNumber"
                value={formData.orderNumber}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Filter</label>
              <input
                type="text"
                name="filter"
                value={formData.filter}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>
          </div>

          {/* Search for Customer */}
          <div>
            <label className="block text-gray-700">Search for Customer</label>
            <select
              name="selectedCustomer"
              value={formData.selectedCustomer}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
            >
              <option value="">Select order number</option>
              {/* Add options for customers */}
            </select>
            <button className="mt-2 flex text-red text-sm">
              <img src={userplus} className="me-1" alt="" />Add new customer
            </button>
          </div>

          {/* Select Item */}
          <div>
            <label className="block text-gray-700">Select an Item</label>
            <div className="flex items-center space-x-2">
              <select
                name="item"
                value={formData.item}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded-md"
              >
                <option value="">Select Item</option>
                {/* Add options for items */}
              </select>
              <button>
                <img src={circleplus} alt="" />
              </button>
              <button className=" text-red rounded-md">
                3
              </button>
              <button className="w-[30px]">
                <img src={circleminus} alt="" />
              </button>
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
              <option value="">Enter Payment</option>
              {/* Add options for payment modes */}
            </select>
          </div>

          {/* Rate per Item */}
          <div>
            <label className="block text-gray-700">Rate per Item</label>
            <input
              type="text"
              name="ratePerItem"
              value={formData.ratePerItem}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
            />
          </div>

          {/* Return Empty Bottle */}
          <div>
            <label className="block text-gray-700">Return Empty Bottle</label>
            <input
              type="text"
              name="returnBottle"
              value={formData.returnBottle}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
            />
          </div>

          {/* Remarks */}
          <div>
            <label className="block text-gray-700">Remarks</label>
            <input
              type="text"
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
            />
          </div>

          {/* Total */}
          <div>
            <label className="block text-gray-700">Total</label>
            <input
              type="text"
              name="total"
              value={formData.total.toString()}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              disabled
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#820000] text-white p-2 mt-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewOrder;
