import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/images/profile1.png'
import arrow from '../assets/images/arrow.png'
import start from '../assets/images/image 4.svg'


const StartRide: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100 p-4">
      {/* Header */}
      <header className="w-full flex justify-end items-center bg-gray-100  p-4">
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

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow ">
        {/* Illustration */}
        <div className="mb-8">
          <img
            src={start} // Placeholder, replace with actual image
            alt="Delivery Man"
            className="w-full max-w-md"
          />
        </div>

        {/* Text Content */}
        <p className="text-center text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Vulputate phasellus condimentum.
          Cursus nisl quisque.
        </p>

        {/* Button */}
        <Link to={'/addstart'}>
        <button className="bg-[#820000] text-white px-6 py-3 rounded-lg shadow hover:bg-red-800 transition flex items-center gap-3">
          Start Your Ride <img src={arrow} alt="" width={15}/>
        </button>
        
        </Link>
        
      </main>
    </div>
  );
};

export default StartRide;
