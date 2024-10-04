import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import backbutton from "../assets/images/backbutton.svg";
import { getStaffByIdAPI, updateStaffAPI } from '../services/AllApi';
import { BASEURL } from '../services/Baseurl';

const EditStaff: React.FC = () => {
  const [staff, setStaff] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { id } = useParams(); // Get the staff ID from the URL
  const navigate = useNavigate(); // Used for redirecting after saving
  const defaultImage = "https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png";

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await getStaffByIdAPI(id);
        setStaff(response);
      } catch (error: any) {
        console.error("Error fetching staff data:", error.message);
      }
    };

    if (id) {
      fetchStaff();
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStaff((prevStaff: any) => ({ ...prevStaff, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStaff((prevStaff: any) => ({ ...prevStaff, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await updateStaffAPI(id!, staff); // Call the update API
      setSuccessMessage('Staff updated successfully!');
      setErrorMessage(''); // Clear any previous errors
      setTimeout(() => {
        navigate('/staff'); // Redirect back to staff list after success
      }, 2000); // Redirect after 2 seconds
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to update staff.');
      setSuccessMessage(''); // Clear any previous success messages
    }
  };

  return (
    <div className="min-h-screen bg-gray-100  items-center justify-center p-10">
      <div className="flex mt-3">
        <Link to={'/staff'}>
          <button className="w-[40px] h-[40px] px-2.5 bg-[#FFFFFF] rounded-[56px]">
            <img src={backbutton} alt="" />
          </button>
        </Link>
        <h3 className="text-[#303F58] mt-1 ms-3 text-[20px] font-bold">
          Edit Staff
        </h3>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-8xl w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Edit Staff</h2>

        {successMessage && (
          <p className="bg-green-100 text-green-700 p-2 rounded-lg mb-4">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="bg-red-100 text-red-700 p-2 rounded-lg mb-4">
            {errorMessage}
          </p>
        )}

        {staff && (
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Profile Picture */}
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex items-center space-x-4">
                  <img
                  className="ms-5  object-cover w-25 h-25 rounded-full"
                  src={
                    staff.profile
                      ? `${BASEURL}/${staff.profile.replace(/\\/g, "/")}`
                      : defaultImage
                  }
                  alt={`${staff.firstname} ${staff.lastname}`} // Use full name for alt text
                />
                    <label className="ml-4 p-2 border border-gray-300 rounded-lg cursor-pointer text-gray-700">
                      Upload New Photo
                      <input   type="file" accept="image/*" className="hidden" />
                    </label>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 text-center ml-1 mx-20">
                    At least 800 x 800 px Recommended. JPG or PNG is Allowed
                  </p>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="mobileNumber"
                    value={staff?.mobileNumber || ''}
                    onChange={handleInputChange}
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="whatsAppNumber"
                    value={staff?.whatsAppNumber || ''}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Visa Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Visa Status
                  </label>
                  <select
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="visaStatus"
                    value={staff?.visaStatus || ''}
                    onChange={handleSelectChange}
                  >
                    <option value="">Enter Visa Status</option>
                    <option value="Valid">Valid</option>
                    <option value="Expired">Expired</option>
                    <option value="In Process">In Process</option>
                  </select>
                </div>

                {/* Visa Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Visa Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="visaNumber"
                    value={staff?.visaNumber || ''}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Emirates ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Emirates ID
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="emiratesId"
                    value={staff?.emiratesId || ''}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Full Name and Date of Birth */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                      name="firstname"
                      value={`${staff.firstname}`}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                      name="dateofBirth"
                      value={staff?.dateofBirth?.substring(0, 10) || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="address"
                    value={staff?.address || ''}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Nationality */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nationality
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="nationality"
                    value={staff?.nationality || ''}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </div>

      {/* Buttons Section */}
      <div className="flex justify-end w-full max-w-8xl mx-4 mt-6 space-x-4">
        <Link to={'/staff'}>
          <button type="button" className="bg-gray-400 text-white p-2 rounded-lg">
            Cancel
          </button>
        </Link>
        <button type="button" onClick={handleSave} className="bg-[#820000] rounded-lg text-white py-2 px-4">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditStaff;
