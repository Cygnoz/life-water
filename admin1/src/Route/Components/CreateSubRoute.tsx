import React, { useState, ChangeEvent, FormEvent } from 'react';

const CreateSubRoute: React.FC = () => {
  // State to manage form values
  const [formData, setFormData] = useState({
    subRoute: '',
    subRouteCode: '',
    mainRoute: '',
    description: ''
  });

  // Handler to update form state
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler for form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-8">
      {/* First Row: Heading and Icon */}
      <div className="flex justify-between items-center w-full max-w-8xl mb-6">
        <h2 className="text-2xl font-semibold">Create New Sub Route</h2>
        {/* Placeholder for Icon */}
        <div className="icon-placeholder">
          {/* Add your icon here */}
        </div>
      </div>

      {/* Second Row: Form Container */}
      <div className="w-full max-w-8xl bg-white rounded-md shadow-md p-8">
        <form onSubmit={handleSubmit}>
          {/* First Row with 3 Input Fields */}
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
                Sub Route code
              </label>
              <input
                type="text"
                name="subRouteCode"
                value={formData.subRouteCode}
                onChange={handleInputChange}
                placeholder="Enter Sub route code"
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
                {/* Add options as needed */}
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
              style={{ resize: 'none', overflow: 'hidden' }} // Inline styles to remove resize handles
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-2 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
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

export default CreateSubRoute;
