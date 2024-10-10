import React, { useState } from 'react';
import back from '../../assets/images/backbutton.svg'
import { Link } from 'react-router-dom';
import car from '../../assets/images/car-front.png'
import user from '../../assets/images/user.png'
import user2 from '../../assets/images/user2.png'
import map from '../../assets/images/map-pinned.png'
import bottle from '../../assets/images/bottle.png'
import history from '../../assets/images/history.png'
import list from '../../assets/images/list-collapse.png'
import dollar from '../../assets/images/badge-dollar-sign.png'
const ViewRoute: React.FC = () => {


    const [activeSection, setActiveSection] = useState('routeDetail');

  return (
    <div className="p-6">
        <div className="flex gap-3 items-center w-full max-w-8xl mb-6 ms-3">
     <Link to={'/route/createroute'}>
     <div className="icon-placeholder">
         <img className='bg-gray-200 rounded-full p-2' src={back} alt="" />
        </div>
     </Link>
        <h2 className="text-2xl font-bold">View Route</h2>
      </div>


      <div className="grid grid-cols-4 gap-4 mb-6">
     
 <div className="flex = items-center bg-gradient-to-r from-[#b6b8a9] to-[#524b3e] rounded-lg p-4  shadow">
      <div className="flex items-center justify-center w-12 h-12  rounded-full">
       <img src={car} alt="" />
      </div>
      <div className="ml-4">
        <div className='text-white' >40</div>
        <div className="text-lg text-white font-bold">Current Vehicle</div>
       
      </div>
    </div>



    <div className="flex = items-center bg-gradient-to-r from-[#b6b8a9] to-[#524b3e] rounded-lg p-4  shadow">
      <div className="flex items-center justify-center w-12 h-12  rounded-full">
       <img src={user} alt="" />
      </div>
      <div className="ml-4">
      <div className='text-white' >Chandler</div>
      <div className="text-lg text-white font-bold">Current Salesman</div>
      </div>
    </div>

    <div className="flex = items-center bg-gradient-to-r from-[#b6b8a9] to-[#524b3e] rounded-lg p-4  shadow">
      <div className="flex items-center justify-center w-12 h-12  rounded-full">
       <img src={map} alt="" />
      </div>
      <div className="ml-4">
      <div className='text-white'>lorem  </div>
      <div className="text-lg text-white font-bold">Current Sub Route</div>
      </div>
    </div>



    <div className="flex = items-center bg-gradient-to-r from-[#b6b8a9] to-[#524b3e] rounded-lg p-4  shadow">
      <div className="flex items-center justify-center w-12 h-12  rounded-full">
       <img src={bottle} alt="" />
      </div>
      <div className="ml-4">
      <div className='text-white'>23  </div>
      <div className="text-lg text-white font-bold">Bottle Stock</div>
      </div>
    </div>
      </div>

     <div className="flex space-x-7 mb-4">
     <button
  className={`w-[221px] font-bold p-2 rounded-lg flex items-center ${activeSection === 'routeDetail' ? 'bg-[#E3E6D5] text-black' : 'bg-white'}`}
  onClick={() => setActiveSection('routeDetail')}
>
  <img src={user2} alt="" className="mr-2" />
  Route Detail
</button>
        <button
          className={`w-[221px] p-2 font-bold rounded-lg flex items-center ${activeSection === 'rideHistory' ? 'bg-[#E3E6D5] text-black' : 'bg-white'}`}
          onClick={() => setActiveSection('rideHistory')}
        >
          <img src={history} alt="" className="mr-2" />
           Ride History
        </button>
        <button
          className={`w-[221px] font-bold p-2 rounded-lg flex items-center ${activeSection === 'commissionHistory' ? 'bg-[#E3E6D5] text-black' : 'bg-white'}`}
          onClick={() => setActiveSection('commissionHistory')}
        >
          <img src={list} alt="" className="mr-2" /> 
          Commission History
        </button>
        <button
          className={`w-[221px] font-bold p-2  rounded-lg flex items-center ${activeSection === 'currentStock' ? 'bg-[#E3E6D5] text-black' : 'bg-white'}`}
          onClick={() => setActiveSection('currentStock')}
        >
          <img src={dollar} alt="" className="mr-2" />
           Current Stock
        </button>
      </div>

      {/* Conditional rendering based on the active section */}
      {activeSection === 'routeDetail' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <p className="font-semibold">Main Route</p>
              <p>AN-099</p>
            </div>
            <div>
              <p className="font-semibold">Sub Route</p>
              <p>Lorem</p>
            </div>
            <div>
              <p className="font-semibold">Main Route Code</p>
              <p>6475</p>
            </div>
            <div>
              <p className="font-semibold">Description</p>
              <p>Lorem ipsum agna</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'rideHistory' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="font-semibold">No Ride History </p>
          
        </div>
      )}

      {activeSection === 'commissionHistory' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="font-semibold">No Commission History </p>
         
        </div>
      )}

      {activeSection === 'currentStock' && (
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="font-semibold">No Current Stock </p>
         
        </div>
      )}
    </div>
  );
};

export default ViewRoute;