import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import back from '../../assets/images/backbutton.svg';
import list from '../../assets/images/list-todo.svg'
import history from '../../assets/images/history.svg';
import mappinned from '../../assets/images/map-pinned.svg';
import calender from '../../assets/images/calendar-minus-2.svg';
// import calender1 from '../../../assets/images/calendar-search.svg';
import wtsp from '../../assets/images/whatsapp.svg';
import call from '../../assets/images/call.svg';
import mail from '../../assets/images/mail-check.svg';
import dot from '../../assets/images/threedot.svg';
import profile from '../../assets/images/profile.svg';
import bottle from '../../assets/images/bottle.svg';




const ViewCustmor: React.FC = () => {
  const [activeTab, setActiveTab] = useState('information');
//   const { id } = useParams(); // Get the vehicle ID from the URL

  // Placeholder vehicle data
  const vehicle = {
    vehicleNo: "ABC123",
    insuranceValidity: "2025-12-31",
    licenseValidity: "2026-06-15",
    insuranceAmount: "1500",
    expenses: "500",
    startingKilometer: "12000",
    todayRoute: "City A to City B",
    depositAmount: "2000",
  };

  if (!vehicle) return <div>Loading...</div>; // Loading state

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header: View Customer Profile */}
      <div className="flex items-center space-x-2 mb-6">
        <button className="text-gray-600">
          <Link to={'/customer'}>
            <img className="bg-gray-200 rounded-full p-2" src={back} alt="Back" />
          </Link>
        </button>
        <h1 className="text-xl font-bold text-gray-800">View Customer Profile</h1>
      </div>

      {/* Profile Picture and Vehicle Number */}
      <div className="bg-gradient-to-r from-[#E3E6D5] to-[#F7E7CE] rounded-[8px] p-[16px_18px] flex justify-between items-center mb-6 w-full h-[92px]">
  {/* Left Side: Profile Picture and Name */}
  <div className="flex items-center space-x-[12px]">
    <img
      src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png"
      alt="Profile"
      className="w-[45px] h-[45px] rounded-full object-cover"
    />
    <span className="text-[18px] font-bold text-gray-700">{vehicle?.vehicleNo || 'N/A'}</span>
  </div>

  {/* Right Side: Placeholder for Icons */}
  <div className="flex items-center space-x-4">
    <div className="w-[20px] h-[20px]">
        <img src={wtsp} alt="" /></div> {/* Placeholder for Icon 1 */}
    <div className="w-[20px] h-[20px]">
        <img src={call} alt="" /></div> {/* Placeholder for Icon 2 */}
    <div className="w-[20px] h-[20px]">
        <img src={mail} alt="" /></div> {/* Placeholder for Icon 3 */}
    <div className="w-[20px] h-[20px]">
        <img src={dot} alt="" /></div> {/* Placeholder for Icon 4 */}
  </div>
</div>


      {/* Tabs for Information and Ride History */}
      <div className="bg-[#FFFFFD] shadow-md rounded-[8px] p-[8px_16px] flex justify-center items-center gap-[6px] mb-6 mx-20 w-[1145px] h-[52px]">
        <button
          className={`flex-1 flex items-center justify-center py-2 rounded-md font-medium space-x-2 px-6 ${
            activeTab === 'information' ? 'bg-gray-200' : 'hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('information')}
        >
          <img src={profile} alt="Information" />
          <span className="text-gray-700">Profile</span>
        </button>

        <button
          className={`flex-1 flex items-center justify-start py-2 rounded-md font-medium space-x-2 px-6 ${
            activeTab === 'sales' ? 'bg-gray-200' : 'hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('sales')}
        >
          <img src={history} alt="Ride History" />
          <span className="text-gray-700">Sales</span>
        </button>

        <button
          className={`flex-1 flex items-center justify-start py-2 rounded-md font-medium space-x-2 px-6 ${
            activeTab === 'ledger' ? 'bg-gray-200' : 'hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('ledger')}
        >
          <img src={list} alt="Customer Ledger" />
          <span className="text-gray-700">Customer Ledger</span>
        </button>
      </div>

      {/* Conditional Rendering based on activeTab */}
      {activeTab === 'information' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side - Cards */}
          <div className="md:col-span-1 space-y-[20px]">
            {/* Most Visited Route */}
            <div className="p-8 rounded-[24px] flex justify-between items-center w-[388px] mx-8 h-[123px]" style={{ background: 'linear-gradient(91.71deg, #FFE3B8 -19.39%, #D5DCB3 97.82%)' }}>
              <img src={mappinned} alt="Most Visited Route" />
              <div className="text-right">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Eranakulam</h2>
                <p className="text-gray-600">Kakkanad</p>
              </div>
            </div>

            {/* Insurance Validity */}
            <div className="p-8 rounded-[24px] flex justify-between items-center w-[388px] mx-8 h-[123px]" style={{ background: 'linear-gradient(91.71deg, #FFE3B8 -19.39%, #D5DCB3 97.82%)' }}>
              <img src={calender} alt="Insurance Validity" />
              <div className="text-right">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Inactive Days</h2>
                <p className="text-gray-600">0</p>
              </div>
            </div>

            {/* License Validity */}
            <div className="p-8 rounded-[24px] flex justify-between items-center w-[388px] mx-8 h-[123px]" style={{ background: 'linear-gradient(91.71deg, #FFE3B8 -19.39%, #D5DCB3 97.82%)' }}>
              <img src={bottle} alt="License Validity" />
              <div className="text-right">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Vehicle in hand</h2>
                <p className="text-gray-600">0</p>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="md:col-span-2 bg-white shadow-md rounded-lg p-6 mx-4">
      {/* Stats Header */}
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Stats</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 border-2 rounded-lg bg-gradient-to-r from-[#E3E6D5] to-[#F7E7CE]">
          <h2 className="text-xl font-bold text-gray-800">AED 0</h2>
          <p className="text-gray-700">DUE AMOUNT</p>
        </div>

        <div className="text-center p-4 border-2 rounded-lg bg-gradient-to-r from-[#E3E6D5] to-[#F7E7CE]">
          <h2 className="text-xl font-bold text-gray-800">AED 0</h2>
          <p className="text-gray-700">DEPOSIT AMOUNT</p>
        </div>

        <div className="text-center p-4 border-2 rounded-lg bg-gradient-to-r from-[#E3E6D5] to-[#F7E7CE]">
          <h2 className="text-xl font-bold text-gray-800">AED 0</h2>
          <p className="text-gray-700">SALE</p>
        </div>
      </div>

      {/* General and Other Details */}
      <div className="grid grid-cols-3 gap-6 mb-6">
  {/* General Details */}
  <div className="bg-gray-5 p-4 rounded-lg">
    <h3 className="font-semibold text-lg text-gray-700 mb-4">General Details</h3>
   <div className='space-y-2'>
   <p className="font-bold text-gray-500 text-lg text-[14px]"
   >Email</p>
    <p className="font-bold text-gray-700 text-[14px]"
    >abc</p>

    <p className="font-bold text-gray-500 text-lg text-[14px]">Mobile</p>
    <p className="text-gray-700">900909090</p>

    <p className="font-bold text-gray-500 text-lg text-[14px]">WhatsApp Number</p>
    <p className="text-gray-700">8989898989</p>

    <p className="font-bold text-gray-500 text-lg text-[14px]">Designation</p>
    <p className="text-gray-700">Salesman</p>
   </div>
  </div>

  {/* Other Details */}
  <div className="bg-gray-5 p-4 rounded-lg">
    <h3 className="font-semibold text-lg text-gray-700 mb-4">Other Details</h3>
   <div className='space-y-2'>
   <p className="font-bold text-gray-500 text-lg text-[14px]">Customer Type</p>
    <p className="text-gray-700">Shop</p>

    <p className="font-bold text-gray-500 text-lg text-[14px]">Payment Mode</p>
    <p className="text-gray-700">Credit</p>

    <p className="font-bold text-gray-500 text-lg text-[14px]">Joined Date</p>
    <p className="text-gray-700">02-02-2002</p>

   <div className="text-lg text-gray-700 flex justify-between" >
    <div>   <p className="text-gray-700 w-[200px]">Last Inactive Days</p>
    <p className="text-lg text-gray-700">0 days</p></div>
    <div>    <p className="text-lg text-gray-70 w-[200px]">Last Purchase Date</p>
    <p className="text-gray-700">12-12-2024</p></div>

   </div>


   </div>

  </div>
  </div>

  <hr />

  


      {/* Billing and Delivery Addresses */}
      <div className="grid grid-cols-2 gap-6">
        {/* Billing Address */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-700 mb-4">Billing Address</h3>
          <p className="text-gray-700">4517 Washington Ave., Kentucky 39495</p>
        </div>

        {/* Delivery Address */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-700 mb-4">Delivery Address</h3>
          <p className="text-gray-700">4517 Washington Ave., Kentucky 39495</p>
        </div>
      </div>
    </div>
        </div>
      )}
      {/* Conditional Rendering based on activeTab */}
      {activeTab === 'sales' &&(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side - Cards */}
          <div className="md:col-span-1 space-y-[20px]">
            {/* Most Visited Route */}
            

          </div>

   
        </div>
      ) }
      {/* Conditional Rendering based on activeTab */}
      {activeTab === 'ledger' &&(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side - Cards */}
         
        </div>
      )}
    </div>
  );
};

export default ViewCustmor;
