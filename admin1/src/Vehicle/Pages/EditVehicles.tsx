import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { getVehicleByIdAPI, updateVehicleAPI, Vehicle } from "../../services/VehicleAPI/Vehicle"
import uploadedVehicle from "../../assets/images/uploadedvehicle.svg"
import back from "../../assets/images/backbutton.svg"
import { BASEURL } from "../../services/Baseurl"

interface EditVehiclesProps {}

const EditVehicles: React.FC<EditVehiclesProps> = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [vehicleData, setVehicleData] = useState<Vehicle>({
    _id: "",
    vehicleNo: "",
    image: "",
    insuranceValidity: "",
    insuranceStatus: "",
    registrationValidity: "",
    startingKilometer: 0,
    insuranceAmount: 0,
    expenses: 0,
    licenseAmount: 0,
    licenseValidity: "",
    createdAt: "",
    updatedAt: "",
  })

  const [imageFile, setImageFile] = useState<File | null>(null)

  useEffect(() => {
    const fetchVehicle = async () => {
      if (!id) return
      try {
        const response = await getVehicleByIdAPI(id)
        if (response.vehicle) {
          setVehicleData(response.vehicle)
          console.log(vehicleData)
        } else {
          toast.error("Vehicle data not found")
        }
      } catch (error) {
        console.error("Error fetching vehicle data:", error)
        toast.error("Failed to fetch vehicle data.")
      }
    }

    fetchVehicle()
  }, [id])

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setVehicleData((prev) => ({ ...prev, [name]: value }));
};

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0]; // Ensure the file exists
  if (file) {
    setImageFile(file); // Update local state with the selected file
    console.log("Selected file:", file); // Debugging
  } else {
    console.error("No file selected");
  }
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!id) return;

  try {
    const formData = new FormData();

    // Append vehicle data
    Object.entries(vehicleData).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });

    // Append the image file if it exists
    if (imageFile) {
      formData.append("image", imageFile);
    } else {
      console.error("No image file to append");
    }

    // Debug: Check if formData contains image and vehicle data
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    // Call the API with formData only (no need to pass imageFile separately)
    await updateVehicleAPI(id, formData);

    toast.success("Vehicle updated successfully!");
    setTimeout(() => navigate("/vehicle"), 2000);
  } catch (error) {
    console.error("Error updating vehicle:", error);
    toast.error("Failed to update vehicle.");
  }
};

  
  return (
    <div className="p-6">
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
      <div className="flex gap-3 items-center w-full max-w-8xl mb-6 ms-3">
        <Link to="/vehicle">
          <img className="bg-gray-200 rounded-full p-2" src={back} alt="Back" />
        </Link>
        <h2 className="text-2xl text-[#303F58] font-bold">Edit Vehicle</h2>
      </div>

      <form onSubmit={handleSubmit} className="w-full mx-auto p-10 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl text-[#303F58] font-semibold mb-6">Edit Vehicle Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#303F58] text-sm font-medium mb-2">Vehicle Number</label>
            <input type="text" name="vehicleNo" value={vehicleData.vehicleNo} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-[#303F58] text-sm font-medium mb-2">Vehicle Image</label>
            <div className="flex items-center space-x-4">
              <img
                className="object-cover w-11 h-11 rounded-full"
                src={
                  imageFile
                    ? URL.createObjectURL(imageFile)
                    : vehicleData.image
                    ? `${BASEURL}/uploads/${vehicleData.image}` // Assuming the images are stored in 'uploads' folder on the server
                    : uploadedVehicle
                }
                alt={`Vehicle ${vehicleData.vehicleNo}`}
              />

              <label className="p-2 border border-gray-300 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-50 transition duration-300">
                Upload New Photo
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-[#303F58] text-sm font-medium mb-2">Insurance Status</label>
            <select name="insuranceStatus" value={vehicleData.insuranceStatus} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
              <option value="">Select status</option>
              <option value="Valid">Valid</option>
              <option value="Expired">Expired</option>
            </select>
          </div>
          <div>
            <label className="block text-[#303F58] text-sm font-medium mb-2">Registration Validity</label>
            <input type="date" name="registrationValidity" value={vehicleData.registrationValidity?.slice(0, 10) || ""} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-[#303F58] text-sm font-medium mb-2">Insurance Validity</label>
            <input type="date" name="insuranceValidity" value={vehicleData.insuranceValidity?.slice(0, 10) || ""} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-[#303F58] text-sm font-medium mb-2">Starting Kilometer</label>
            <input type="number" name="startingKilometer" value={vehicleData.startingKilometer} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0" required />
          </div>
          <div>
            <label className="block text-[#303F58] text-sm font-medium mb-2">Insurance Amount</label>
            <input type="number" name="insuranceAmount" value={vehicleData.insuranceAmount} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="10000" required />
          </div>
          <div>
            <label className="block text-[#303F58] text-sm font-medium mb-2">Expense</label>
            <input type="number" name="expenses" value={vehicleData.expenses} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0" required />
          </div>
          <div>
            <label className="block text-[#303F58] text-sm font-medium mb-2">License Amount</label>
            <input type="number" name="licenseAmount" value={vehicleData.licenseAmount} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="10000" required />
          </div>
          <div>
            <label className="block text-[#303F58] text-sm font-medium mb-2">License Validity</label>
            <input type="date" name="licenseValidity" value={vehicleData.licenseValidity?.slice(0, 10) || ""} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Link to="/vehicle">
            <button className="px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded-md mr-2 hover:bg-gray-300 transition duration-300" type="button">
              Cancel
            </button>
          </Link>
          <button className="px-4 py-2 bg-[#820000] text-white font-medium rounded-md hover:bg-[#9a0000] transition duration-300" type="submit">
            Update Vehicle
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditVehicles
