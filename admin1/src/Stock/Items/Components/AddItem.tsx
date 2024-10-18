import React, { useState } from 'react';

import upload from "../../../assets/images/upload image.svg";
import { Link } from 'react-router-dom';
import back from '../../../assets/images/backbutton.svg';
 
const AddItem: React.FC = () => {
    
  const [profile, setProfile] = useState(null); // Local state for profile image

  const handleProfileChange = (e: any) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setProfile(file); // Update local state with the selected file
    }
  };
  return (
<div className='p-6 '>
  <div className="flex gap-3 items-center w-full max-w-8xl mb-4 ms-1 ">
    <Link to={'/item'}>
      <div className="icon-placeholder">
        <img className='bg-gray-200 rounded-full p-2' src={back} alt="Back" />
      </div>
    </Link>
    <h2 className="text-[20px] text-[#303F58] font-bold">Add New item</h2>
  </div>

  <div className="w-full mx-auto p-5 bg-white rounded-lg shadow-md">
    <form className="grid grid-cols-1 md:grid-cols-2 gap-1 gap-x-5">

      {/* License Amount */}
      <div>
        <label className="block text-[#303F58] font-[14px] mb-1 mt-5">Item Name</label>
        <input
          type="text"
          placeholder="Enter Item Name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Uploaded Vehicle Image */}
      <div className="flex">
                      <label className="mt-4 border text-[#8F99A9] text-base font-[14px] rounded-lg cursor-pointer">
                        <div className="w-[80px] h-[80px] bg-[#F7E7CE] rounded-lg overflow-hidden">
                          <img
                            src={
                              profile ? URL.createObjectURL(profile) : upload
                            }
                            alt=""
                            className="object-cover w-20 h-20 rounded-md p-5"
                          />
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleProfileChange} // Handle file change
                          
                        />
                      </label>
                      <h2 className="font-bold mt-10 ms-3 text-[#303F58]">
                        Upload Item Image  
                      </h2>
                    </div>


       <div>
        <label className="block text-[#303F58] font-[14px] mb-1">SKU</label>
        <input
          type="text"
          placeholder="Enter SKU"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>


      <div>
        <label className="block text-[#303F58] font-[14px] mb-1">Price</label>
        <input
          type="number"
          placeholder="Enter Retail Price"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>



      <div>
        <label className="block text-[#303F58] font-[14px] mb-1">Purchase Price</label>
        <input
          type="number"
          placeholder="Enter Purchase Price"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>



      <div>
        <label className="block text-[#303F58] font-[14px] mb-1">Description</label>
        <input
          type="textr"
          placeholder="Enter Description"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>



      <div className="col-span-2 flex justify-end mt-6">
        <button
          className="px-3 py-1 bg-[#FEFDFA] text-[#565148] font-[14px] rounded-md mr-2 border-2 border-[#565148] w-[74px] h-[38px]"
          type="button"
        >
          Cancel
        </button>
        <button
          className="px-3 py-1 bg-[#820000] text-[#FEFDF9] font-[14px] rounded-md w-[142px] h-[38px]"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</div>

  );
};
 
export default AddItem;