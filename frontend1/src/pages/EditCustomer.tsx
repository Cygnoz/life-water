import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backbutton from '../assets/images/nav-item.png';
import { Link } from "react-router-dom";





const EditCustomer: React.FC = () => {
 
  return (
    <div className="m-3 bg-[#F5F6FA]">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="p-6 bg-[#FFFFFF] shadow-md rounded-lg">
        <Link to={"/viewcustomers"}>
          <button className="w-[40px] h-[40px] rounded-full p-1 flex items-center justify-center">
            <img src={backbutton} alt="Back" className="w-full h-full" />
          </button>
        </Link>
        <h2 className="text-lg font-semibold text-center">Edit Customer</h2>
        <form  className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mt-3 mb-3">Customer Type</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="customerType" value="Individual"  />
                Individual
              </label>
              <label className="flex items-center">
                <input type="radio" name="customerType" value="Business"  />
                Business
              </label>
            </div>
          </div>

         
            <div>
              <label className="block text-[#303F58] font-[14px] mb-2">Company Name</label>
              <input type="text" name="companyName"  className="w-full h-[36px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Company Name" required />
             
            </div>
          

          <div>
            <label className="block text-gray-700">First Name</label>
            <input type="text" name="firstName"  className="w-full p-2 mt-1 border rounded-md" placeholder="Enter First Name" />
          
          </div>

          <div>
            <label className="block text-gray-700">Last Name</label>
            <input type="text" name="lastName"  className="w-full p-2 mt-1 border rounded-md" placeholder="Enter Last Name" />
            
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email"  className="w-full p-2 mt-1 border rounded-md" placeholder="Enter Email" />
           
          </div>

          <div className="flex space-x-2">
            <div className="w-1/2">
              <label className="block text-gray-700">Number of Bottles</label>
              <input type="text" name="numberOfBottles"  className="w-full p-2 mt-1 border rounded-md" placeholder="Number of Bottles" />
              
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Rate</label>
              <input type="text" name="rate"  className="w-full p-2 mt-1 border rounded-md" placeholder="Rate" />
             
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Payment Mode</label>
            <select name="paymentMode" className="w-full p-2 mt-1 border rounded-md">
              <option value="Cash">Cash</option>
              <option value="Credit">Credit</option>
            </select>
         
          </div>

          <div>
            <label className="block text-gray-700">Contact Number</label>
            <input type="text" name="contactNumber"  className="w-full p-2 mt-1 border rounded-md" placeholder="Enter Contact Number" />
          </div>

          <div>
            <label className="block text-gray-700">Whatsapp Number</label>
            <input type="text" name="whatsappNumber"  className="w-full p-2 mt-1 border rounded-md" placeholder="Enter Whatsapp Number" />
          </div>

          <div>
            <label className="block text-gray-700">Deposit Amount</label>
            <input type="text" name="depositAmount" className="w-full p-2 mt-1 border rounded-md" placeholder="Deposit Amount" />
          
          </div>

                    {/* Main Route Selection */}
                    <div className="space-y-1">
            <label htmlFor="main-route" className="text-sm font-medium text-gray-700">
              Main Route
            </label>
            <select
              id="main-route"
              className="w-full p-2 border border-gray-300 rounded-lg"
        
            >
              <option value="">Select Main Route</option>
              
            </select>
          </div>
 
          {/* Sub Route Selection */}
          <div className="space-y-1">
            <label htmlFor="sub-route" className="text-sm font-medium text-gray-700">
              Sub Route
            </label>
            <select
              id="sub-route"
              className="w-full p-2 border border-gray-300 rounded-lg"
            
            >
              <option value="">Select Sub Route</option>
             
            </select>
          </div>

          {/* <div>
            <label className="block text-gray-700">Location</label>
            <input type="text" name="location" value={formData.location.address} onChange={handleInputChange} className="w-full p-2 mt-1 border rounded-md" placeholder="Enter Location" />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div> */}
           
           
            <button
          type="button"
        
          className={`w-full bg-[#820000] text-white p-2 mt-4 rounded-md `}
        >
          Save Loacation
        </button>
          <button type="submit"  className="w-full bg-[#820000] text-white p-2 mt-4 rounded-md">
           Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCustomer;
