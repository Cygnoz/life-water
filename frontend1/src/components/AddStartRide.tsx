import React from 'react';
import profile from '../assets/images/profile1.png'
import { useNavigate } from 'react-router-dom';
const AddStartRide: React.FC = () => {

const navigate = useNavigate()

const handleSubmit =()=>{
    navigate('/home')
}


  return (
    <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg mt-3">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-md p-6">
        {/* Header */}
        <header className="flex justify-end items-center mb-6">
        <div className="flex items-center space-x-2">
          <div>
            <h2 className="text-lg font-semibold">Hello, User</h2>
            <p className="text-sm text-gray-500">Welcome</p>
            <p className="text-xs text-green-500">Last login in: 0 min</p>
          </div>
          <img
            src={profile}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
        </header>

        {/* Form */}
        <form className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="main-route" className="text-sm font-medium text-gray-700">
              Main Route
            </label>
            <select id="main-route" className="w-full p-2 border border-gray-300 rounded-lg">
              <option>Enter main route</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="sub-route" className="text-sm font-medium text-gray-700">
              Sub Route
            </label>
            <select id="sub-route" className="w-full p-2 border border-gray-300 rounded-lg">
              <option>Enter sub route</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="helper" className="text-sm font-medium text-gray-700">
              Helper
            </label>
            <select id="helper" className="w-full p-2 border border-gray-300 rounded-lg">
              <option>Enter helper</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="driver" className="text-sm font-medium text-gray-700">
              Driver
            </label>
            <select id="driver" className="w-full p-2 border border-gray-300 rounded-lg">
              <option>Enter driver</option>
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="vehicle-number" className="text-sm font-medium text-gray-700">
              Vehicle Number
            </label>
            <input
              type="text"
              id="vehicle-number"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter vehicle number"
            />
          </div>

          {/* Stock Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="opening-stock" className="text-sm font-medium text-gray-700">
                Opening Stock
              </label>
              <input
                type="number"
                id="opening-stock"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="loaded-stock" className="text-sm font-medium text-gray-700">
                Loaded Stock
              </label>
              <input
                type="number"
                id="loaded-stock"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Stock Hand and KM */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="total-stock" className="text-sm font-medium text-gray-700">
                Total stock in Hand
              </label>
              <input
                type="number"
                id="total-stock"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="started-km" className="text-sm font-medium text-gray-700">
                Started KM
              </label>
              <input
                type="number"
                id="started-km"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button  onClick={handleSubmit}
              type="submit"
              className="w-full max-w-xs bg-[#820000] text-white py-2 rounded-lg shadow hover:bg-red-800 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStartRide;
