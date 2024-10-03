import React, { useState } from 'react';
import backbutton from '../assets/images/backbutton.svg'
import user from '../assets/images/user staffview.svg'
import history from '../assets/images/history.svg'
import collapse from '../assets/images/list-collapse.svg'
import dollar from '../assets/images/badge-dollar-sign.svg'
import folder from '../assets/images/folder-check.svg'
import map from '../assets/images/map-pin.svg'
import status from '../assets/images/folder-status.svg'
import nationality from '../assets/images/nationality.svg'
import visaNo from '../assets/images/visa no.svg'
import validity from '../assets/images/visa validity.svg'
import date from '../assets/images/date-route.svg'
import id from '../assets/images/credit-card.svg'
import kim from '../assets/images/kim chaa.svg'
import order from '../assets/images/delivery-man-with-water-barrel.svg'
import commission from '../assets/images/delivery-man-with-commission.svg'
import payment from '../assets/images/delivery-man-with-water-payment.svg'
import summary from '../assets/images/delivery-man-with-water-summary.svg'
import plus from '../assets/circle-plus.svg'

const StaffOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personalDetails');

  return (
    <div className='min-h-screen w-full'>
        
        <div className='flex mt-3'>
            <button  className='w-[40px] h-[40px] px-2.5 bg-[#FFFFFF] rounded-[56px]'>
                <img src={backbutton} alt="" />
            </button>
                 <h3 className="text-[#303F58] mt-1 ms-3 text-[20px] font-bold">Staff Overview</h3>
        </div>

        {/* Tabs */}
        <div className="flex justify-between w-ful mt-3 mx-auto mb-5 pt-2 h-[52px] ps-5 pe-5 bg-white shadow-md rounded-lg ">
          <button
            className={` flex px-9 py-2 h-[36px] text-center text-[14px] w-[221px] font-bold text-[#495160] ${activeTab === 'personalDetails' ? ' bg-[#E3E6D5] border-green-500  ' : ''}`}
            onClick={() => setActiveTab('personalDetails')}>
            <img className='me-1' src={user} alt="" />
            <h1>Personal Details</h1>          
          </button>
          <button
            className={` flex px-10 py-2 h-[36px] text-center text-[14px] w-[221px] font-bold text-[#495160] ${activeTab === 'orderHistory' ? ' bg-[#E3E6D5] border-green-500  ' : ''}`}
            onClick={() => setActiveTab('orderHistory')}
          >
            <img className='me-1' src={history} alt="" />
            <h1>Order History</h1>  
          </button>
          <button
            className={` flex px-7 py-2 h-[36px] text-center text-[14px] w-[221px] font-bold text-[#495160] ${activeTab === 'commissionHistory' ? ' bg-[#E3E6D5] border-green-500  ' : ''}`}
            onClick={() => setActiveTab('commissionHistory')}
          >
            <img className='me-1' src={collapse} alt="" />
            <h1>Commission History</h1> 
          </button>
          <button
            className={` flex px-7 py-2 h-[36px] text-center text-[14px] w-[221px] font-bold text-[#495160] ${activeTab === 'paymentHistory' ? ' bg-[#E3E6D5] border-green-500  ' : ''}`}
            onClick={() => setActiveTab('paymentHistory')}
          >
            <img className='me-1' src={dollar} alt="" />
            <h1>Payment History</h1> 
          </button>
          <button
            className={` flex px-14 py-2 h-[36px] text-center text-[14px] w-[221px] font-bold text-[#495160] ${activeTab === 'summary' ? ' bg-[#E3E6D5] border-green-500  ' : ''}`}
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
              <div className="flex items-center  bg-[#bfa276] h-[82px] rounded-lg space-x-4">
                <img
                  src={kim}
                  alt="Staff"
                  className="w-[60px] h-[60px] ps-3 rounded-full"
                />
                <div>
                  <h2 className="text-[18px] text-[#FCF8ED] font-[500] ">Kim Taehyung | 6786543213</h2>
                  <p className="text-[16px] text-[#FFFFFF] font-[300]">Salesman</p>
                </div>
              </div>
  
              <div className="grid grid-cols-4 gap-4 mt-9 mb-5">
                <div>
                  <p className="text-[#4B5C79] text-[14px] font-[600] flex "> <img className='me-2' src={map} alt="" />Address</p>
                  <p className="text-[#8F99A9] text-[14px] font-[600]">Lorem ipsum edrcft</p>
                </div>
                <div>
                  <h1 className="text-[#4B5C79] text-[14px] font-[600] flex"><img className='me-2'  src={status} alt="" /> Visa Status</h1>
                  <p className="text-[#8F99A9] text-[14px] font-[600] ">Approved</p>
                </div>
                <div>
                  <p className="text-[#4B5C79] text-[14px] font-[600] flex "><img className='me-2'  src={nationality} alt="" /> Nationality</p>
                  <p className="text-[#8F99A9] text-[14px] font-[600]">Indian</p>
                </div>
                <div>
                  <p className="text-[#4B5C79] text-[14px] font-[600] flex "><img className='me-2'  src={visaNo} alt="" /> Visa number</p>
                  <p className="text-[#8F99A9] text-[14px] font-[600]">012</p>
                </div>
                <div className='mt-2'>
                  <p className="text-[#4B5C79] text-[14px] font-[600] flex "><img className='me-2'  src={validity} alt="" />Visa validity</p>
                  <p className="text-[#8F99A9] text-[14px] font-[600]">12-11-2003</p>
                </div>
                <div className='mt-2'>
                  <p className="text-[#4B5C79] text-[14px] font-[600] flex"><img className='me-2'  src={date} alt="" />Date of birth</p>
                  <p className="text-[#8F99A9] text-[14px] font-[600]">12-11-2003</p>
                </div>
                <div className='mt-2'>
                  <p className="text-[#4B5C79] text-[14px] font-[600] flex"><img className='me-2'  src={id} alt="" />Emirates ID</p>
                  <p className="text-[#8F99A9] text-[14px] font-[600]">2425</p>
                </div>
              </div>
            </div>
          )}
  
          {activeTab === 'orderHistory' && (
            <div className="p-4 text-center grid grid-cols-2 gap-4">
                <div>      
                            <img src={order} alt="No Orders" className="w-[690px] h-[420px] mt-10 mb-10  rounded-md mx-auto" />
                </div>
                <div className='justify-center  mt-40'>
                    <p className="text-[32px] text-[#303F58]  font-[400]">No Order History Found</p>
                    <p className="text-[16px] text-[#4B5C79]  font-[300]">
                Lorem ipsum dolor sit amet consectetur. Arcu porttitor lacus sit ut a sed gravida.
              </p>
              
              <button className="mt-4 px-4 py-2 bg-[#820000] text-[14] font-[400] text-white rounded-lg mx-5"><p className='flex'><img className='me-2' src={plus} alt="" />Go to Orders</p></button>

              
            </div>
              </div>
          )}
  
          {activeTab === 'commissionHistory' && (
             <div className="p-4 text-center grid grid-cols-2 gap-4">
             <div>      
                         <img src={commission} alt="No Orders" className="w-[690px] h-[420px] mt-10 mb-10  rounded-md mx-auto" />
             </div>
             <div className='justify-center  mt-40'>
                 <p className="text-[32px] text-[#303F58]  font-[400]">No Commission History Found</p>
                 <p className="text-[16px] text-[#4B5C79]  font-[300]">
             Lorem ipsum dolor sit amet consectetur. Arcu porttitor lacus sit ut a sed gravida.
           </p>
           
           <button className="mt-4 px-4 py-2 bg-[#820000] text-[14] font-[400] text-white rounded-lg mx-5">
            <p className='flex'><img className='me-2' src={plus} alt="" />Go to Orders</p></button>

           
         </div>
           </div>
          )}

        {activeTab === 'paymentHistory' && (
             <div className="p-4 text-center grid grid-cols-2 gap-4">
             <div>      
                         <img src={payment} alt="No Orders" className="w-[690px] h-[420px] mt-10 mb-10  rounded-md mx-auto" />
             </div>
             <div className='justify-center  mt-40'>
                 <p className="text-[32px] text-[#303F58]  font-[400]">No Payment History Found</p>
                 <p className="text-[16px] text-[#4B5C79]  font-[300]">
             Lorem ipsum dolor sit amet consectetur. Arcu porttitor lacus sit ut a sed gravida.
           </p>
           
           <button className="mt-4 px-4 py-2 bg-[#820000] text-[14] font-[400] text-white rounded-lg mx-5">
            <p className='flex'><img className='me-2' src={plus} alt="" />Go to Payment</p></button>

           
         </div>
           </div>
          )}

        {activeTab === 'summary' && (
             <div className="p-4 text-center grid grid-cols-2 gap-4">
             <div>      
                         <img src={summary} alt="No Orders" className="w-[690px] h-[420px] mt-10 mb-10  rounded-md mx-auto" />
             </div>
             <div className='justify-center  mt-40'>
                 <p className="text-[32px] text-[#303F58]  font-[400]">No Summary Found</p>
                 <p className="text-[16px] text-[#4B5C79]  font-[300]">
             Lorem ipsum dolor sit amet consectetur. Arcu porttitor lacus sit ut a sed gravida.
           </p>
           
           <button className="mt-4 px-4 py-2 bg-[#820000] text-[14] font-[400] text-white rounded-lg mx-5">
            <p className='flex'><img className='me-2' src={plus} alt="" />Go to Summary</p>
            </button>

           
         </div>
           </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffOverview;
