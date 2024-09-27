
import React, { useState } from 'react';
// import filter from '../../assets/Images/filter.png'; // Importing the filter image

const Visithistory = () => {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="text-2xl font-semibold">☰</div>
        <h1 className="text-xl font-bold">History</h1>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* Search Bar with Filter Icon */}
      <div className="relative">
        {/* Search Bar */}
        <div className="flex items-center justify-between p-4 bg-gray-100">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {/* Filter Icon */}
          <button
            className="ml-2 p-2 bg-gray-200 rounded-lg"
            onClick={toggleDropdown}
          >
            <img src={filter} alt="Filter Icon" className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Dropdown */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul className="p-2">
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                Visited
              </li>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                Not Visited
              </li>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                Delivered
              </li>
              <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                Not Delivered
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="p-4 space-y-4">
  <div className="grid grid-cols-2 gap-4">
    {/* Stats Card 1 */}
    <div className="flex flex-col items-center p-4 bg-red-100 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-medium">Visited Customer</h2>
      <p className="text-2xl font-semibold">38</p>
    </div>

    {/* Stats Card 2 */}
    <div className="flex flex-col items-center p-4 bg-red-200 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-medium">Not Visited Customer</h2>
      <p className="text-2xl font-semibold">38</p>
    </div>

    {/* Stats Card 3 */}
    <div className="flex flex-col items-center p-4 bg-grey-100 rounded-lg shadow-md border border-gray-200 col-span-2">
      <h2 className="text-lg font-medium">Total Customer</h2>
      <p className="text-2xl font-semibold">50</p>
    </div>
  </div>

  {/* Customer Cards */}
  <div className="space-y-4">
  {/* Customer 1 */}
  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md my-2 border border-gray-200">
    {/* Image and Name */}
    <div className="flex items-center">
      <img
        src="https://via.placeholder.com/50"
        alt="Monica Geller"
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-4 flex flex-col">
        <h3 className="font-medium text-gray-800">Monica Geller</h3>
      </div>
    </div>

    {/* Status Badges - Stacked Vertically */}
    <div className="flex flex-col space-y-2">
      <span className="flex items-center space-x-1 px-2 py-1 text-xs font-semibold bg-orange-100 text-orange-600 rounded-lg">
        <span className="w-2 h-2 bg-orange-600 rounded-full"></span> Not Delivered
      </span>
      <span className="flex items-center space-x-1 px-2 py-1 text-xs font-semibold bg-green-100 text-green-600 rounded-lg">
        <span className="w-2 h-2 bg-green-600 rounded-full"></span> Visited
      </span>
    </div>
  </div>

  {/* Customer 2 */}
  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md my-2 border border-gray-200">
    {/* Image and Name */}
    <div className="flex items-center">
      <img
        src="https://via.placeholder.com/50"
        alt="Kim Taehyung"
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-4 flex flex-col">
        <h3 className="font-medium text-gray-800">Kim Taehyung</h3>
      </div>
    </div>

    {/* Status Badges - Stacked Vertically */}
    <div className="flex flex-col space-y-2">
      <span className="flex items-center space-x-1 px-2 py-1 text-xs font-semibold bg-red-50 text-red-600 rounded-lg">
        <span className="w-2 h-2 bg-red-600 rounded-full"></span> Not Delivered
      </span>
      <span className="flex items-center space-x-1 px-2 py-1 text-xs font-semibold bg-red-50 text-red-600 rounded-lg">
        <span className="w-2 h-2 bg-red-600 rounded-full"></span> Not Visited
      </span>
    </div>
  </div>
</div>


</div>

    </div>
  );
};

export default Visithistory;

