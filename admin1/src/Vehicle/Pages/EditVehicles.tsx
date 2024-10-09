import React, { useEffect, useState } from 'react';
import uploadedvehicle from '../../assets/images/uploadedvehicle.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import back from '../../assets/images/backbutton.svg';
import { getVehicleByIdAPI, updateVehicleAPI, Vehicle } from '../../services/VehicleAPI/Vehicle';

type Props = {};

function EditVehicles({}: Props) {
    const { id } = useParams<{ id: string }>();
    const navigate=useNavigate()
    const [successMessage,setSuccessMessage]= useState("")
    const [errorMessage,setErrorMessage]= useState("")
    

   
    console.log(successMessage);
    console.log(errorMessage);
    
    
    const [vehicleData, setVehicleData] = useState<Vehicle>({
        _id: '', // Initialize with default value
        vehicleNo: '',
        image: '', // Initialize with default value
        insuranceValidity: '',
        insuranceStatus: '',
        registrationValidity: '',
        startingKilometer: 0, // Number
        insuranceAmount: 0, // Number
        expenses: 0, // Number
        licenseAmount: 0, // Number
        licenseValidity: '',
        createdAt: '', // Initialize with default value
        updatedAt: '' // Initialize with default value
    });
    
    useEffect(() => {
        const fetchVehicle = async () => {
            try {
                const response = await getVehicleByIdAPI(id as string);
                if (response.vehicle) {
                    // Ensure to include all properties from the response
                    setVehicleData({
                        _id: response.vehicle._id,
                        vehicleNo: response.vehicle.vehicleNo,
                        image: response.vehicle.image,
                        insuranceValidity: response.vehicle.insuranceValidity,
                        insuranceStatus: response.vehicle.insuranceStatus,
                        registrationValidity: response.vehicle.registrationValidity,
                        startingKilometer: response.vehicle.startingKilometer, // Assuming this is a number
                        insuranceAmount: response.vehicle.insuranceAmount, // Assuming this is a number
                        expenses: response.vehicle.expenses, // Assuming this is a number
                        licenseAmount: response.vehicle.licenseAmount, // Assuming this is a number
                        licenseValidity: response.vehicle.licenseValidity,
                        createdAt: response.vehicle.createdAt, // Ensure to include this
                        updatedAt: response.vehicle.updatedAt, // Ensure to include this
                    });
                } else {
                    // Handle case where vehicle is not found
                    setErrorMessage("Vehicle data not found");
                }
            } catch (error: any) {
                console.error("Error fetching vehicle data:", error.message);
                setErrorMessage(error.message || "Failed to fetch vehicle data.");
            }
        };
    
        if (id) {
            fetchVehicle();
        }
    }, [id]);
    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
      
        setVehicleData((prevStaff: any) => ({ ...prevStaff, [name]: value }));
      };
      
  

    const handleSubmit = async () => {
      try {
        await updateVehicleAPI(id!,vehicleData) // Call the update API
        setSuccessMessage("vehicle updated successfully!")
        navigate("/vehicle") // Redirect back to staff list after success
        setErrorMessage("") // Clear any previous errors
       
         // Redirect after 2 seconds
      } catch (error: any) {
        setErrorMessage(error.message || "Failed to update staff.")
        setSuccessMessage("") // Clear any previous success messages
      }
    }

    return (
        <div className='p-6'>
            <div className="flex gap-3 items-center w-full max-w-8xl mb-6 ms-3">
                <Link to={'/vehicle'}>
                    <div className="icon-placeholder">
                        <img className='bg-gray-200 rounded-full p-2' src={back} alt="Back" />
                    </div>
                </Link>
                <h2 className="text-[20px] text-[#303F58] font-bold">Edit Vehicle</h2>
            </div>

            <div>
                {vehicleData && (
                    <form  className="w-full mx-auto p-10 bg-white rounded-lg shadow-md">
                        <h2 className="text-[20px] text-[#303F58] font-semibold mb-6">Edit Vehicle</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[#303F58] font-[14px] mb-2">Vehicle Number</label>
                                <input
                                    type="text"
                                    name="vehicleNo"
                                    value={vehicleData.vehicleNo || ''}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex">
                                <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                                    <img src={uploadedvehicle} alt="Uploaded vehicle" className="object-cover w-24" />
                                </div>
                                <div className="mx-5">
                                    <h2 className="font-bold mb-1 text-[#303F58]">Uploaded Vehicle Image</h2>
                                    <p className="text-[#8F99A9] text-base font-[14px]">Preview of Uploaded vehicle image</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <label className="block text-[#303F58] font-[14px] mb-2">Insurance Status</label>
                          <select
                            name="insuranceStatus"
                            value={vehicleData.insuranceStatus || ''}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select status</option> {/* Optional placeholder */}
                            <option value="Valid">Valid</option>
                            <option value="Expired">Expired</option>
                          </select>
                        </div>

                            <div>
                                <label className="block text-[#303F58] font-[14px] mb-2">Registration Validity</label>
                                <input
                                    type="date"
                                    name="registrationValidity"
                                    value={vehicleData.registrationValidity?.slice(0, 10) || ''}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-[#303F58] font-[14px] mb-2">Insurance Validity</label>
                                <input
                                    type="date"
                                    name="insuranceValidity"
                                    value={vehicleData.insuranceValidity?.slice(0, 10) || ''}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-[#303F58] font-[14px] mb-2">Starting Kilometer</label>
                                <input
                                    type="text"
                                    name="startingKilometer"
                                    value={vehicleData.startingKilometer || ''}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="0"
                                />
                            </div>
                            <div>
                                <label className="block text-[#303F58] font-[14px] mb-2">Insurance Amount</label>
                                <input
                                    type="text"
                                    name="insuranceAmount"
                                    value={vehicleData.insuranceAmount || ''}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="10000"
                                />
                            </div>
                            <div>
                                <label className="block text-[#303F58] font-[14px] mb-2">Expense</label>
                                <input
                                    type="text"
                                    name="expenses"
                                    value={vehicleData.expenses || ''}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="0"
                                />
                            </div>
                            <div>
                                <label className="block text-[#303F58] font-[14px] mb-2">License Amount</label>
                                <input
                                    type="text"
                                    name="licenseAmount"
                                    value={vehicleData.licenseAmount || ''}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="10000"
                                />
                            </div>
                            <div>
                                <label className="block text-[#303F58] font-[14px] mb-2">License Validity</label>
                                <input
                                    type="date"
                                    name="licenseValidity"
                                    value={vehicleData.licenseValidity?.slice(0, 10) || ''}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end mt-6">
                            <Link to={'/vehicle'}>
                                <button
                                    className="px-3 py-1 bg-[#FEFDFA] text-[#565148] font-[14px] rounded-md mr-2 border-2 border-[#565148] w-[74px] h-[38px]"
                                    type="button"
                                >
                                    Cancel
                                </button>
                            </Link>
                            <button
                                className="px-3 py-1 bg-[#820000] text-[#FEFDF9] font-[14px] rounded-md w-[142px] h-[38px]"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Update
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default EditVehicles;
