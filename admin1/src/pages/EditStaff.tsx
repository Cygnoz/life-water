import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import backbutton from "../assets/images/backbutton.svg";
import { getStaffByIdAPI, updateStaffAPI } from "../services/AllApi";
import { BASEURL } from "../services/Baseurl";

const EditStaff: React.FC = () => {
  const [staff, setStaff] = useState<any>(null);
  const [profile, setProfile] = useState(null); // Local state for profile image

  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [isSameAsPhone, setIsSameAsPhone] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { id } = useParams(); // Get the staff ID from the URL
  const navigate = useNavigate(); // Used for redirecting after saving
  const defaultImage =
    "https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png";

  console.log(whatsAppNumber);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await getStaffByIdAPI(id as string);
        setStaff(response);
      } catch (error: any) {
        console.error("Error fetching staff data:", error.message);
      }
    };

    if (id) {
      fetchStaff();
    }
  }, [id]);

  const handleWhatsAppCheckbox = () => {
    setIsSameAsPhone((prev) => !prev);
    setWhatsAppNumber(isSameAsPhone ? "" : staff?.mobileNumber || "");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStaff((prevStaff: any) => ({ ...prevStaff, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStaff((prevStaff: any) => ({ ...prevStaff, [name]: value }));
  };

  const handleProfileChange = (e: any) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setProfile(file); // Update local state with the selected file
      console.log(file);
    }
  };

  const handleSave = async () => {
    try {
      // Check if any required field is empty
      if (
        staff.firstname === "" ||
        staff.lastname === "" ||
        staff.address === "" ||
        staff.dateofBirth === "" ||
        staff.designation === "" ||
        staff.emiratesId === "" ||
        staff.mobileNumber === "" ||
        staff.nationality === "" ||
        staff.visaNumber === "" ||
        staff.visaStatus === "" ||
        staff.visaValidity === ""
      ) {
        alert("Please fill in the missing field");
      }
      // Validate mobile number length
      else if (
        staff.mobileNumber.length < 10 ||
        staff.emiratesId.length < 15 ||
        staff.visaNumber.length < 10
      ) {
        alert("Either the Mobile No, Visa No, or Emirates ID is incorrect.");
      } else {
        // Update staff details
        await updateStaffAPI(id!, staff, profile); // Pass the profile image
        setSuccessMessage("Staff updated successfully!");
        console.log(staff);
        setErrorMessage(""); // Clear any previous errors

        // Redirect to staff list after success
        setTimeout(() => {
          navigate("/staff");
        }, 2000); // Redirect after 2 seconds
      }
    } catch (error: any) {
      setErrorMessage(error.message || "Failed to update staff.");
      setSuccessMessage(""); // Clear any previous success messages
    }
  };

  return (
    <div className="min-h-screen bg-gray-100  items-center justify-center p-10">
      <div className="flex mt-3">
        <Link to={"/staff"}>
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
                      className="mx-auto object-cover w-11 h-11 rounded-full"
                      src={
                        staff.profile
                          ? `${BASEURL}/uploads/${staff.profile}`
                          : defaultImage
                      }
                      alt={`${staff.firstname} ${staff.lastname}`}
                    />
                    <label className="ml-4 p-2 border border-gray-300 rounded-lg cursor-pointer text-gray-700">
                      Upload New Photo
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleProfileChange} // Handle file change
                      />
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
                    required
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="mobileNumber"
                    value={staff?.mobileNumber || ""}
                    onChange={(e) => {
                      // Allow only numbers
                      const value = e.target.value.replace(/\D/g, "");
                      // Limit to 10 digits
                      if (value.length <= 10) {
                        handleInputChange(e);
                      }
                    }}
                    maxLength={10}
                    pattern="\d{10}"
                    title="Mobile number must be exactly 10 digits"
                  />
                </div>

                {/* WhatsApp Number with Checkbox */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    WhatsApp Number
                  </label>
                  <div className="mt-2 flex items-center">
                    <input
                      type="checkbox"
                      checked={isSameAsPhone}
                      onChange={handleWhatsAppCheckbox}
                      className="form-checkbox h-4 w-4 text-red-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Same as phone number
                    </span>
                  </div>
                  <input
                    type="Number"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="whatsAppNumber"
                    value={
                      isSameAsPhone
                        ? staff.mobileNumber
                        : staff.whatsAppNumber || ""
                    }
                    onChange={handleInputChange}
                    disabled={isSameAsPhone}
                  />
                </div>

                {/* Visa Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Visa Status
                  </label>
                  <select
                    required
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="visaStatus"
                    value={staff?.visaStatus || ""}
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
                    required
                    type="tel" // Use "tel" to ensure numeric input
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="visaNumber"
                    value={staff.visaNumber || ""}
                    onChange={handleInputChange}
                    maxLength={10} // Limits the input to 10 digits
                    pattern="\d{10}" // Ensures the input is exactly 10 digits
                    placeholder="Enter Visa Number"
                    title="Please enter exactly 10 digits"
                  />
                </div>

                {/* Emirates ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Emirates ID
                  </label>
                  <input
                    required
                    type="tel"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="emiratesId"
                    value={staff.emiratesId || ""}
                    onChange={handleInputChange}
                    maxLength={15} // Ensures the input does not exceed 15 characters
                    pattern="\d{15}" // Enforces exactly 15 digits
                    placeholder="Enter Emirates ID"
                    title="Please enter exactly 15 digits"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Full Name and Date of Birth */}
                <div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                      name="firstname"
                      value={`${staff.firstname}`}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                      name="lastname"
                      value={`${staff.lastname}`}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    required
                    type="date"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="dateofBirth"
                    value={staff?.dateofBirth?.substring(0, 10) || ""}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    required
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="address"
                    value={staff?.address || ""}
                    onChange={handleInputChange}
                  />
                </div>

                {/* designation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Designation
                  </label>
                  <div className="flex flex-col space-y-2 mt-2">
                    <label className="inline-flex items-center">
                      <input
                        required
                        type="radio"
                        name="designation" // Add name attribute
                        value="Sales"
                        checked={staff.designation === "Sales"} // Use staff state object
                        onChange={handleInputChange} // Use the unified change handler
                        className="form-radio"
                      />
                      <span className="ml-2">Salesman</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        required
                        type="radio"
                        name="designation" // Add name attribute
                        value="Driver"
                        checked={staff.designation === "Driver"} // Use staff state object
                        onChange={handleInputChange} // Use the unified change handler
                        className="form-radio"
                      />
                      <span className="ml-2">Driver</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        required
                        type="radio"
                        name="designation" // Add name attribute
                        value="Helper"
                        checked={staff.designation === "Helper"} // Use staff state object
                        onChange={handleInputChange} // Use the unified change handler
                        className="form-radio"
                      />
                      <span className="ml-2">Helper</span>
                    </label>
                  </div>
                </div>

                {/* visa validity */}

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Visa Validity
                  </label>
                  <input
                    required
                    type="date"
                    name="visaValidity" // Add name attribute
                    value={staff?.visaValidity?.substring(0, 10) || ""} // Format to 'YYYY-MM-DD'
                    onChange={handleInputChange} // Use the unified change handler
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                  />
                </div>

                {/* Nationality */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nationality
                  </label>
                  <input
                    required
                    type="text"
                    className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                    name="nationality"
                    value={staff?.nationality || ""}
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
        <Link to={"/staff"}>
          <button
            type="button"
            className="bg-gray-400 text-white p-2 rounded-lg"
          >
            Cancel
          </button>
        </Link>
        <button
          type="button"
          onClick={handleSave}
          className="bg-[#820000] rounded-lg text-white py-2 px-4"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditStaff;
