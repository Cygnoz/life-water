import React from 'react';
import back from '../../assets/images/backbutton.svg'
import uploadedvehicle from '../../assets/images/uploadedvehicle.svg'
import { Link } from 'react-router-dom';
import list from '../../assets/images/list-todo.svg'
import history from '../../assets/images/history.svg'
import mappinned from '../../assets/images/map-pinned.svg'
import calender from '../../assets/images/calendar-minus-2.svg'
import calender1 from '../../assets/images/calendar-search.svg'






const ViewVehicle: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Row 1: View Customer Profile */}
      <div className="flex items-center space-x-2 mb-6">
        <button className="text-gray-600">
        <Link to={'/vehicle'}>
     <div className="icon-placeholder">
         <img className='bg-gray-200 rounded-full p-2' src={back} alt="" />
        </div>
     </Link>
        </button>
        <h1 className="text-xl font-semibold text-gray-800">View Customer Profile</h1>
      </div>

      {/* Row 2: Profile Picture and Vehicle Number in a rounded container */}
      <div className="bg-gradient-to-r from-[#E3E6D5] to-[#F7E7CE] rounded-[8px] p-[16px_18px] flex items-center space-x-[24px] mb-6 w-[1299px] h-[92px]">
        <img src={uploadedvehicle} alt="" className="w-19 h-12 bg-gradient-to-r from-white-100 to-gray-200 rounded-full flex items-center justify-center" />
        <span className="text-[18px] font-bold text-gray-700 leading-[21.78px] text-left font-inter">
          KL-43 8001
        </span>
      </div>

      {/* Row 3: Tabs in a smaller container with equal button sizes and icons */}
      <div className="bg-[#FFFFFD] shadow-md rounded-[8px] p-[8px_16px] flex justify-center items-center gap-[6px] mb-6 mx-20 w-[1145px] h-[52px]">
        {/* Information Button with Icon */}
        <button className="flex-3 flex items-center justify-center bg-gray-100 py-2 rounded-md font-medium space-x-2 px-6 hover:bg-gray-200">
          <img src={list} alt="" />
          <span className="text-gray-700">Information</span>
        </button>

        {/* Ride History Button with Icon */}
        <button className="flex-1 flex items-center justify-start py-2 rounded-md font-medium space-x-2 px-6 hover:bg-gray-200">
        <img src={history} alt="" />

          <span className="text-gray-700">Ride History</span>
        </button>
      </div>

      {/* Row 4: Content - Cards and Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side (Cards) */}
        <div className="md:col-span-1 space-y-[20px]">
          {/* Card 1: Most Visited Route */}
          <div
            className="p-8 rounded-[24px] flex justify-between items-center w-[388px] mx-8 h-[123px]"
            style={{ background: 'linear-gradient(91.71deg, #FFE3B8 -19.39%, #D5DCB3 97.82%)' }}
          >
           <img src={mappinned} alt="" />
            <div className="text-right">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">KL-43 8001</h2>
              <p className="text-gray-600">Most Visited Route</p>
            </div>
          </div>

          {/* Card 2: Insurance Validity */}
          <div
            className="p-8 rounded-[24px] flex justify-between items-center w-[388px] mx-8 h-[123px]"
            style={{ background: 'linear-gradient(91.71deg, #FFE3B8 -19.39%, #D5DCB3 97.82%)' }}
          >
           <img src={calender} alt="" />
            <div className="text-right">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">20-12-2012</h2>
              <p className="text-gray-600">Insurance Validity</p>
            </div>
          </div>

          {/* Card 3: License Validity */}
          <div
            className="p-8 rounded-[24px] flex justify-between items-center w-[388px] mx-8 h-[123px]"
            style={{ background: 'linear-gradient(91.71deg, #FFE3B8 -19.39%, #D5DCB3 97.82%)' }}
          >
           <img src={calender1} alt="" />
            <div className="text-right">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">20-02-2012</h2>
              <p className="text-gray-600">License Validity</p>
            </div>
          </div>
        </div>

        {/* Right Side (Stats) */}
        <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6 mx-4">
          {/* Stats Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-700">Stats</h2>
          </div>

          {/* Cards: Today Route, Deposit Amount, Insurance Amount */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-end p-4 border-2 rounded-lg bg-gradient-to-r from-green-100 to-yellow-100">
              <h2 className="text-xl font-bold text-gray-800">Kochi 0</h2>
              <p className="text-gray-700">Today Route</p>
            </div>

            <div className="text-end p-4 border-2 rounded-lg bg-gradient-to-r from-blue-100 to-green-100">
              <h2 className="text-xl font-semibold text-gray-800">AED 0</h2>
              <p className="text-gray-700">Deposit Amount</p>
            </div>

            <div className="text-end p-4 border-2 rounded-lg bg-gradient-to-r from-yellow-100 to-pink-100">
              <h2 className="text-xl font-semibold text-gray-800">AED 0</h2>
              <p className="text-gray-700">Insurance Amount</p>
            </div>
          </div>

          {/* General Details and Other Details */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-5 p-2 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">General Details</h3>
              <div className="space-y-2">
                <p className="text-gray-700">Vehicle Number</p>
                <p>1234</p>
                <p className="text-gray-700">Insurance Validity</p>
                <p>12-12-2022</p>
                <p className="text-gray-700">Insurance Amount</p>
                <p>1000</p>
                <p className="text-gray-700">License Validity</p>
                <p>2024/07/17</p>
              </div>
            </div>
            <div className="bg-gray-5 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-700 mb-4">Other Details</h3>
              <div className="space-y-2">
                <p className="text-gray-700">Expense</p>
                <p>0</p>
                <p className="text-gray-700">Started Km</p>
                <p>0</p>
                <p className="text-gray-700">Ending Km</p>
                <p>0</p>
                <p className="text-gray-700">Total Km</p>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewVehicle;
