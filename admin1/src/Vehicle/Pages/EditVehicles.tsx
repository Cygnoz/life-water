import uploadedvehicle from '../../assets/images/uploadedvehicle.svg'
import { Link } from 'react-router-dom';
import back from '../../assets/images/backbutton.svg'

type Props = {}

function EditVehicles({}: Props) {
  return (
    <div className='p-6'>
        <div className="flex gap-3 items-center w-full max-w-8xl mb-6 ms-3">
     <Link to={''}>
     <div className="icon-placeholder">
         <img className='bg-gray-200 rounded-full p-2' src={back} alt="" />
        </div>
     </Link>
        <h2 className="text-[20px] text-[#303F58] font-bold">Edit Vehicle</h2>
      </div>



      <div className="w-full mx-auto p-10 bg-white rounded-lg shadow-md">
      <h2 className="text-[20px] text-[#303F58] font-semibold mb-6">Edit vehicle</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vehicle Number */}
        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">Vehicle Number</label>
          <input
            type="text"
            // value={vehicleNumber}
            // onChange={(e) => setVehicleNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="KL-43 8001"
          />
        </div>
        {/* Uploaded Vehicle Image */}
        <div className="flex">
          <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
            <img src={uploadedvehicle} alt="" className="object-cover w-24" />
          </div>
          <div className="mx-5">
          <h2 className="font-bold mb-1 text-[#303F58]">Uploaded Vehicle image</h2>
          <p className="text-[#8F99A9] text-base font-[14px]">Preview of Uploaded vehicle image</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Insurance Status */}
        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">Insurance Status</label>
          <input
            type="text"
            // value={insuranceStatus}
            // onChange={(e) => setInsuranceStatus(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Expired"
          />
        </div>
        {/* Registration Validity */}
        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">Registration Validity</label>
          <input
            type="date"
            // value={registrationValidity}
            // onChange={(e) => setRegistrationValidity(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Insurance Validity */}
        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">Insurance Validity</label>
          <input
            type="date"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Starting Kilometer */}
        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">Starting Kilometer</label>
          <input
            type="text"
            // value={vehicleNumber}
            // onChange={(e) => setVehicleNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
          />
        </div>
        {/* Insurance Amount */}
        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">Insurance Amount</label>
          <input
            type="text"
            // value={vehicleNumber}
            // onChange={(e) => setVehicleNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="10000"
          />
        </div>
        {/* Expenses */}
        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">Expense</label>
          <input
            type="text"
            // value={vehicleNumber}
            // onChange={(e) => setVehicleNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
          />
        </div>
        {/* License Amount */}
        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">License Amount</label>
          <input
            type="text"
            // value={vehicleNumber}
            // onChange={(e) => setVehicleNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="10000"
          />
        </div>
        {/* License Validity */}
        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">License Validity</label>
          <input
            type="date"
            // value={licenseValidity}
            // onChange={(e) => setLicenseValidity(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-6">
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
          Update
        </button>
      </div>
    </div>

    </div>
  )
}

export default EditVehicles