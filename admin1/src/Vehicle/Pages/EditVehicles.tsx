import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import backbutton from "../../assets/images/backbutton.svg"; // Ensure this path is correct
import { getVehicleByIdAPI, updateVehicleAPI } from "../../services/VehicleAPI/Vehicle";

const EditVehicles: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the vehicle ID from the URL
  const navigate = useNavigate(); // Used for redirecting after saving
  const [vehicle, setVehicle] = useState<any>(null);

  const [vehicleNumber, setVehicleNumber] = useState('');
  const [insuranceStatus, setInsuranceStatus] = useState('');
  const [registrationValidity, setRegistrationValidity] = useState('');
  const [insuranceValidity, setInsuranceValidity] = useState('');
  const [startingKilometer, setStartingKilometer] = useState('');
  const [insuranceAmount, setInsuranceAmount] = useState('');
  const [expense, setExpense] = useState('');
  const [licenseAmount, setLicenseAmount] = useState('');
  const [licenseValidity, setLicenseValidity] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await getVehicleByIdAPI(id as string);
        setVehicle(response);
        setVehicleNumber(response.vehicleNo);
        setInsuranceStatus(response.insuranceStatus);
        setRegistrationValidity(response.registrationValidity);
        setInsuranceValidity(response.insuranceValidity);
        setStartingKilometer(response.startingKilometer);
        setInsuranceAmount(response.insuranceAmount);
        setExpense(response.expense);
        setLicenseAmount(response.licenseAmount);
        setLicenseValidity(response.licenseValidity);
      } catch (error: any) {
        console.error("Error fetching vehicle data:", error);
        setErrorMessage("Failed to fetch vehicle data.");
      }
    };

    fetchVehicle();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const updatedVehicle = {
        vehicleNo: vehicleNumber,
        insuranceStatus,
        registrationValidity,
        insuranceValidity,
        startingKilometer,
        insuranceAmount,
        expense,
        licenseAmount,
        licenseValidity,
      };

      const response = await updateVehicleAPI(id, updatedVehicle);
      setSuccessMessage("Vehicle updated successfully!");
      navigate(`/vehicle/${id}`);
    } catch (error: any) {
      console.error("Error updating vehicle:", error);
      setErrorMessage("Failed to update vehicle.");
    }
  };

  return (
    <div className="p-6">
      <div className="flex gap-3 items-center w-full max-w-8xl mb-6 ms-3">
        <Link to={'/vehicle'}>
          <div className="icon-placeholder">
            <img className='bg-gray-200 rounded-full p-2' src={backbutton} alt="Back" />
          </div>
        </Link>
        <h2 className="text-[20px] text-[#303F58] font-bold">Edit Vehicle</h2>
      </div>

      <div className="w-full mx-auto p-10 bg-white rounded-lg shadow-md">
        <h2 className="text-[20px] text-[#303F58] font-semibold mb-6">Edit Vehicle</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Vehicle Number</label>
            <input
              type="text"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="KL-43 8001"
            />
          </div>
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Insurance Status</label>
            <input
              type="text"
              value={insuranceStatus}
              onChange={(e) => setInsuranceStatus(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Expired"
            />
          </div>
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Registration Validity</label>
            <input
              type="date"
              value={registrationValidity}
              onChange={(e) => setRegistrationValidity(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Insurance Validity</label>
            <input
              type="date"
              value={insuranceValidity}
              onChange={(e) => setInsuranceValidity(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Starting Kilometer</label>
            <input
              type="text"
              value={startingKilometer}
              onChange={(e) => setStartingKilometer(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Insurance Amount</label>
            <input
              type="text"
              value={insuranceAmount}
              onChange={(e) => setInsuranceAmount(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="10000"
            />
          </div>
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Expense</label>
            <input
              type="text"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">License Amount</label>
            <input
              type="text"
              value={licenseAmount}
              onChange={(e) => setLicenseAmount(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="10000"
            />
          </div>
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">License Validity</label>
            <input
              type="date"
              value={licenseValidity}
              onChange={(e) => setLicenseValidity(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="px-3 py-1 bg-[#FEFDFA] text-[#565148] font-[14px] rounded-md mr-2 border-2 border-[#565148] w-[74px] h-[38px]"
            type="button"
            onClick={() => navigate('/vehicle')}
          >
            Cancel
          </button>
          <button
            className="px-3 py-1 bg-[#820000] text-[#FEFDF9] font-[14px] rounded-md w-[142px] h-[38px]"
            type="button"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditVehicles;