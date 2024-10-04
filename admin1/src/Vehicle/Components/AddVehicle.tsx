import React, { useState } from 'react';
import uploadvehicle from '../../assets/images/uploadvehicle.svg';
import { Link } from 'react-router-dom';
import back from '../../assets/images/backbutton.svg';
import { addVehicleAPI } from '../../services/AllApi';

type Props = {};

const AddVehicle: React.FC<Props> = () => {
  const [vehicleNo, setVehicleNo] = useState('');
  const [insuranceValidity, setInsuranceValidity] = useState('');
  const [insuranceStatus, setInsuranceStatus] = useState('');
  const [registrationValidity, setRegistrationValidity] = useState('');
  const [insuranceAmount, setInsuranceAmount] = useState('');
  const [licenseAmount, setLicenseAmount] = useState('');
  const [licenseValidity, setLicenseValidity] = useState('');
  const [startingKilometer, setStartingKilometer] = useState('');
  const [expenses, setExpenses] = useState('');
  const [vehicleImage, setVehicleImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVehicleImage(e.target.files[0]);
    }
  };

  const handleAddVehicle = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append('vehicleNo', vehicleNo);
    formData.append('insuranceValidity', insuranceValidity);
    formData.append('insuranceStatus', insuranceStatus);
    formData.append('registrationValidity', registrationValidity);
    formData.append('insuranceAmount', insuranceAmount);
    formData.append('licenseAmount', licenseAmount);
    formData.append('licenseValidity', licenseValidity);
    formData.append('startingKilometer', startingKilometer);
    formData.append('expenses', expenses);
    if (vehicleImage) {
      formData.append('vehicleImage', vehicleImage);
    }

    try {
      const response = await addVehicleAPI(formData);
      if (response.message) {
        setError(response.message);
      } else {
        setSuccess('Vehicle added successfully');
        console.log('Vehicle added successfully:', response.data);

        // Reset form fields
        setVehicleNo('');
        setInsuranceValidity('');
        setInsuranceStatus('');
        setRegistrationValidity('');
        setInsuranceAmount('');
        setLicenseAmount('');
        setLicenseValidity('');
        setStartingKilometer('');
        setExpenses('');
        setVehicleImage(null);

        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
      }
    } catch (error: any) {
      setError(error.message || 'An unexpected error occurred.');
      console.error('Error adding vehicle:', error);
    }
  };

  return (
    <div className='p-6'>
      <div className="flex gap-3 items-center w-full max-w-8xl mb-6 ms-3">
        <Link to={'/vehicle'}>
          <div className="icon-placeholder">
            <img className='bg-gray-200 rounded-full p-2' src={back} alt="Back" />
          </div>
        </Link>
        <h2 className="text-[20px] text-[#303F58] font-bold">Create New Vehicle</h2>
      </div>

      <div className="w-full mx-auto p-10 bg-white rounded-lg shadow-md">
        <h2 className="text-[20px] text-[#303F58] font-semibold mb-6">Add vehicle</h2>
        <form onSubmit={handleAddVehicle} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {error && <div style={{ color: 'red' }}>{error}</div>}
          {success && <div style={{ color: 'green' }}>{success}</div>}
          {/* Vehicle Number */}
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Vehicle Number</label>
            <input
              type="text"
              placeholder="Enter Vehicle Number"
              value={vehicleNo}
              onChange={(e) => setVehicleNo(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Uploaded Vehicle Image */}
          <div className="flex">
            <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
              <img src={uploadvehicle} alt="Upload Vehicle" className="object-cover w-24" />
            </div>
            <div className="mx-5">
              <h2 className="font-bold mb-1 text-[#303F58]">Upload Vehicle image</h2>
              <p className="text-[#8F99A9] text-base font-[14px]">Upload vehicle image</p>
              <input
                type="file"
                onChange={handleImageChange}
                className="mt-2"
                required
              />
            </div>
          </div>
          {/* Insurance Status */}
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Insurance Status</label>
            <input
              type="text"
              placeholder="Enter Insurance Status"
              value={insuranceStatus}
              onChange={(e) => setInsuranceStatus(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Registration Validity */}
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Registration Validity</label>
            <input
              type="date"
              value={registrationValidity}
              onChange={(e) => setRegistrationValidity(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Insurance Validity */}
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Insurance Validity</label>
            <input
              type="date"
              value={insuranceValidity}
              onChange={(e) => setInsuranceValidity(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Starting Kilometer */}
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Starting Kilometer</label>
            <input
              type="text"
              placeholder="Enter Starting Kilometers"
              value={startingKilometer}
              onChange={(e) => setStartingKilometer(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Insurance Amount */}
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Insurance Amount</label>
            <input
              type="text"
              placeholder="Enter Insurance Amount"
              value={insuranceAmount}
              onChange={(e) => setInsuranceAmount(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Expenses */}
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Expenses</label>
            <input
              type="text"
              placeholder="Enter Expenses"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* License Amount */}
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">License Amount</label>
            <input
              type="text"
              placeholder="Enter License Amount"
              value={licenseAmount}
              onChange={(e) => setLicenseAmount(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* License Validity */}
          <div>
            <label className="block text-[#303F58] font-[14px] mb-2">License Validity</label>
            <input
              type="date"
              value={licenseValidity}
              onChange={(e) => setLicenseValidity(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Buttons */}
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
}

export default AddVehicle;