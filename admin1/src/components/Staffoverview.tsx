import React, { useEffect, useState } from 'react';
import backbutton from '../assets/images/backbutton.svg';
import user from '../assets/images/user staffview.svg';
import history from '../assets/images/history.svg';
import collapse from '../assets/images/list-collapse.svg';
import dollar from '../assets/images/badge-dollar-sign.svg';
import folder from '../assets/images/folder-check.svg';
import map from '../assets/images/map-pin.svg';
import status from '../assets/images/folder-status.svg';
import nationality from '../assets/images/nationality.svg';
import visaNo from '../assets/images/visa no.svg';
import validity from '../assets/images/visa validity.svg';
import date from '../assets/images/date-route.svg';

import kim from '../assets/images/kim chaa.svg';

import { getStaffByIdAPI } from '../services/AllApi';
import { useParams } from 'react-router-dom';

const StaffOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personalDetails');
  const [staff, setStaff] = useState<any>(null); // Changed to any for flexibility
  const { id } = useParams(); // Get the staff ID from the URL


   useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await getStaffByIdAPI(id); // Use the dynamic staff ID here
        console.log(response);
        setStaff(response)
      } catch (error:any) {
        console.error("Error fetching staff data:", error.message);
      }
    };

    if (id) {
      fetchStaff();
    }
  }, [id]);
  

  if (!staff) return <div>Loading...</div>; // Loading state

  return (
    <div className='min-h-screen w-full'>
      <div className='flex mt-3'>
        <button className='w-[40px] h-[40px] px-2.5 bg-[#FFFFFF] rounded-[56px]'>
          <img src={backbutton} alt="" />
        </button>
        <h3 className="text-[#303F58] mt-1 ms-3 text-[20px] font-bold">Staff Overview</h3>
      </div>

      {/* Tabs */}
      <div className="flex justify-between w-ful mt-3 mx-auto mb-5 pt-2 h-[52px] ps-5 pe-5 bg-white shadow-md rounded-lg ">
        <button
          className={`flex px-9 py-2 h-[36px] text-center text-[14px] w-[221px] font-bold text-[#495160] ${activeTab === 'personalDetails' ? 'bg-[#E3E6D5] border-green-500' : ''}`}
          onClick={() => setActiveTab('personalDetails')}
        >
          <img className='me-1' src={user} alt="" />
          <h1>Personal Details</h1>
        </button>
        <button
          className={`flex px-10 py-2 h-[36px] text-center text-[14px] w-[221px] font-bold text-[#495160] ${activeTab === 'orderHistory' ? 'bg-[#E3E6D5] border-green-500' : ''}`}
          onClick={() => setActiveTab('orderHistory')}
        >
          <img className='me-1' src={history} alt="" />
          <h1>Order History</h1>
        </button>
        <button
          className={`flex px-7 py-2 h-[36px] text-center text-[14px] w-[221px] font-bold text-[#495160] ${activeTab === 'commissionHistory' ? 'bg-[#E3E6D5] border-green-500' : ''}`}
          onClick={() => setActiveTab('commissionHistory')}
        >
          <img className='me-1' src={collapse} alt="" />
          <h1>Commission History</h1>
        </button>
        <button
          className={`flex px-7 py-2 h-[36px] text-center text-[14px] w-[221px] font-bold text-[#495160] ${activeTab === 'paymentHistory' ? 'bg-[#E3E6D5] border-green-500' : ''}`}
          onClick={() => setActiveTab('paymentHistory')}
        >
          <img className='me-1' src={dollar} alt="" />
          <h1>Payment History</h1>
        </button>
        <button
          className={`flex px-14 py-2 h-[36px] text-center text-[14px] w-[221px] font-bold text-[#495160] ${activeTab === 'summary' ? 'bg-[#E3E6D5] border-green-500' : ''}`}
          onClick={() => setActiveTab('summary')}
        >
          <img className='me-1' src={folder} alt="" />
          <h1>Summary</h1>
        </button>
      </div>

      <div className="w-ful mx-auto mb-5 pt-2 ps-5 pe-5 bg-white shadow-md rounded-lg ">
        {/* Content */}
        <div className='mt-2'>
          {activeTab === 'personalDetails' && (
            <div className="p-4">
              <div className="flex items-center bg-gradient-to-l from-[#cead7c] to-[#a8b18c] rounded-lg h-[82px] space-x-4">
                <img
                  src={kim}
                  alt="Staff"
                  className="w-[60px] h-[60px] ps-3 rounded-full"
                />
                <div>
                  <h2 className="text-[18px] text-[#FCF8ED] font-[500]">{staff.name} | {staff.id}</h2>
                  <p className="text-[16px] text-[#FFFFFF] font-[300]">{staff.role}</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-9 mb-5">
                <div>
                  <p className="text-[#4B5C79] text-[14px] font-[600] flex"><img className='me-2' src={map} alt="" />Address</p>
                  <p className="text-[#8F99A9] text-[14px] font-[600]">{staff.address}</p>
                </div>
                <div>
                  <h1 className="text-[#4B5C79] text-[14px] font-[600] flex"><img className='me-2' src={status} alt="" />Visa Status</h1>
                  <p className="text-[#8F99A9] text-[14px] font-[600]">{staff.visaStatus}</p>
                </div>
                <div>
                  <p className="text-[#4B5C79] text-[14px] font-[600] flex"><img className='me-2' src={nationality} alt="" />Nationality</p>
                  <p className="text-[#8F99A9] text-[14px] font-[600]">{staff.nationality}</p>
                </div>
                <div>
                  <p className="text-[#4B5C79] text-[14px] font-[600] flex"><img className='me-2' src={visaNo} alt="" />Visa number</p>
                  <p className="text-[#8F99A9] text-[14px] font-[600]">{staff.visaNumber}</p>
                </div>
                <div className='mt-2'>
                  <p className="text-[#4B5C79] text-[14px] font-[600] flex"><img className='me-2' src={validity} alt="" />Visa validity</p>
                  <p className="text-[#8F99A9] text-[14px] font-[600]">{staff.visaValidity}</p>
                </div>
                <div className='mt-2'>
                  <p className="text-[#4B5C79] text-[14px] font-[600] flex"><img className='me-2' src={date} alt="" />Date of Birth</p>
                  <p className="text-[#8F99A9] text-[14px] font-[600]">{staff.dob}</p>
                </div>
                <div className='mt-2'>
                  <p className="text-[#4B5C79] text-[14px] font-[600] flex"><img className='me-2' src={id} alt="" />Emirates ID</p>
                  <p className="text-[#8F99A9] text-[14px] font-[600]">{staff.emiratesId}</p>
                </div>
              </div>
            </div>
          )}
          {/* Add content for other tabs here (Order History, Commission History, etc.) */}
        </div>
      </div>
    </div>
  );
};

export default StaffOverview;
