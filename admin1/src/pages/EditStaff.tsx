import React from 'react';

const EditStaff: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-8xl w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">Edit Staff</h2>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Profile Picture, Mobile Number, and WhatsApp Number */}
            <div className="space-y-6">
              {/* Profile Picture */}
              <div className="flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://via.placeholder.com/100" // Placeholder image
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <label className="ml-4 p-2 border border-gray-300 rounded-lg cursor-pointer text-gray-700">
                    Upload New Photo
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="mt-1 text-sm text-gray-600 text-center ml-1 mx-20">
                  At least 800 x 800 px Recommended. JPG or PNG is Allowed
                </p>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="text"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                  placeholder="909085878484"
                />
              </div>

              {/* WhatsApp Number with Checkbox */}
              <div>
                <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                <div className="mt-2 flex items-center">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-red-600" />
                  <span className="ml-2 text-sm text-gray-700 m-1">Same as phone number</span>
                </div>
                <input
                  type="text"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                  placeholder="Enter WhatsApp number"
                />
              </div>

              {/* Visa Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Visa Status</label>
                <select className="mt-1 p-2 border border-gray-300 rounded-lg w-full">
                  <option>Approved</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </select>
              </div>

              {/* Visa Number (Dropdown) */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Visa Number</label>
                <select className="mt-1 p-2 border border-gray-300 rounded-lg w-full">
                  <option value="" disabled selected>Select Visa Number</option>
                  <option value="234">234***********</option>
                  <option value="235">235***********</option>
                  <option value="236">236***********</option>
                </select>
              </div>

              {/* Emirates ID (Dropdown) */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Emirates ID</label>
                <select className="mt-1 p-2 border border-gray-300 rounded-lg w-full">
                  <option value="" disabled selected>Select Emirates ID</option>
                  <option value="Em-01">Em-01******</option>
                  <option value="Em-02">Em-02******</option>
                  <option value="Em-03">Em-03******</option>
                </select>
              </div>
            </div>

            {/* Right Column - Full Name, Date of Birth, and Other Fields */}
            <div className="space-y-6">
              {/* Full Name and Date of Birth */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    placeholder="Chandler Bing"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full h-20"
                  placeholder="Lorem ipsum"
                />
              </div>

              {/* Designation */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Designation</label>
                <div className="flex flex-col space-y-2 mt-2">
                  <label className="inline-flex items-center">
                    <input type="radio" name="designation" className="form-radio" />
                    <span className="ml-2">Salesman</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="designation" className="form-radio" />
                    <span className="ml-2">Driver</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="designation" className="form-radio" />
                    <span className="ml-2">Helper</span>
                  </label>
                </div>
              </div>

              {/* Visa Validity */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Visa Validity</label>
                <input
                  type="date"
                  className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>

              {/* Nationality */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Nationality</label>
                <select className="mt-1 p-2 border border-gray-300 rounded-lg w-full">
                  <option>Indian</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Buttons - Bottom Right */}
            <div className="col-span-2 flex justify-end space-x-4 mt-4">
              <button
                type="button"
                className="bg-gray-400 text-white p-2 rounded-lg"
              >
                Cancel
              </button>
              <button
              type='submit' className="bg-[#820000] rounded-lg text-white py-2 px-4">
                  Save
                </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditStaff;
