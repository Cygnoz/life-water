import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import back from '../../assets/images/backbutton.svg';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { BASEURL } from '../../services/Baseurl';
import axios from 'axios';
import { editSubRouteAPI } from '../../services/RouteAPI/subRouteAPI';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
const EditSubRoute: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get ID from URL params
  const [formData, setFormData] = useState({
    subRoute: '',
    subrouteCode: '',
    mainRoute: '',
    description: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing subroute data when component mounts
    const fetchSubRoute = async () => {
      try {
        const response = await axios.get(`${BASEURL}/api/getSRoute/${id}`);
        setFormData(response.data); // Ensure response.data contains subRoute, subRouteCode, etc.
      } catch (error) {
        console.error('Error fetching subroute data', error);
        toast.error('Failed to load subroute data'); // Show error toast
      }
    };

    fetchSubRoute();
  }, [id]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
     // Check if id is a string
     if (typeof id !== 'string') {
      console.error('ID is undefined or not a string:', id);
      toast.error('ID is required to update the subroute.'); // Show error message to the user
      return; // Exit early if id is not valid
    }
    try {
      console.log('Updating subroute with data:', formData); // Log the data being sent
      const response = await editSubRouteAPI(id, formData); // Call the API to update the subroute
      console.log('Response from update:', response); // Log the response
      toast.success('Subroute updated successfully!'); // Show success message
      navigate('/route/subroute'); // Redirect after successful edit
    } catch (error) {
      console.error('Error updating route', error);
      toast.error('Error updating subroute. Please try again.'); // Show error message
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-8">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex gap-4 items-center w-full max-w-8xl mb-6">
        <Link to={'/route/subroute'}>
          <div className="icon-placeholder">
            <img className='bg-gray-200 rounded-full p-2' src={back} alt="Back" />
          </div>
        </Link>
        <h2 className="text-2xl font-bold">Edit Sub Route</h2>
      </div>

      <div className="w-full max-w-8xl bg-white rounded-md shadow-md p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block mb-2 font-normal text-[14px] leading-[16.94px] text-[#303F58]">
                Sub Route
              </label>
              <input
                type="text"
                name="subRoute"
                value={formData.subRoute}
                onChange={handleInputChange}
                placeholder="Enter subroute"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-normal text-[14px] leading-[16.94px] text-[#303F58]">
                Sub Route Code
              </label>
              <input
                type="text"
                name="subrouteCode"
                value={formData.subrouteCode}
                onChange={handleInputChange}
                placeholder="Enter Sub Route Code"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-normal text-[14px] leading-[16.94px] text-[#303F58]">
                Main Route
              </label>
              <select
                name="mainRoute"
                value={formData.mainRoute}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="" disabled>Select Main Route</option>
                {/* Add options dynamically here based on your routes */}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-normal text-[14px] leading-[16.94px] text-[#303F58]">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter Description"
              className="w-full h-[36px] px-3 py-2 border border-[#CECECE] rounded-[4px] bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              style={{ resize: 'none', overflow: 'hidden' }} 
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-2 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
              onClick={() => navigate('/route/subroute')} // Implement Cancel functionality
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-10 py-2 bg-red-800 text-white rounded-md hover:bg-red-800 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSubRoute;
