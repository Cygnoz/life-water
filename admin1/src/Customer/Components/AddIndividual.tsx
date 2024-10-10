import { useState } from "react";
import back from '../../assets/images/backbutton.svg'
import { Link } from "react-router-dom";



const AddIndividual: React.FC = () => {


    // const [customerType, setCustomerType] = useState('indivi');
    const [customerType, setCustomerType] = useState('Individual');
    const [paymentMode, setPaymentMode] = useState('Cash');
    const [workPhone, setWorkPhone] = useState('');
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [whatsappSameAsMobile, setWhatsappSameAsMobile] = useState(false);
  
    const handleWhatsappCheckbox = () => {
      setWhatsappSameAsMobile(!whatsappSameAsMobile);
      if (!whatsappSameAsMobile) {
        setWhatsappNumber(workPhone); // Set WhatsApp number to work phone if checkbox is checked
      } else {
        setWhatsappNumber(''); // Clear WhatsApp number if checkbox is unchecked
      }
    };  
  
    // const [profile, setProfile] = useState(null) // Local state for profile image
  
  
    // const handleProfileChange = (e:any) => {
    //   const file = e.target.files[0] // Get the selected file
    //   if (file) {
    //     setProfile(file) // Update local state with the selected file
    //   }
    // }

    return (
  <div>
        <div className="flex gap-3 items-center w-full max-w-8xl mb-4 ms-3 p-3">
     <div className="icon-placeholder">
         <img className='bg-gray-200 rounded-full p-2' src={back} alt="" />
        </div>
        <h2 className="text-[20px] text-[#303F58] font-bold">Create New Customer</h2>
      </div>

      

      <div className="w-full mx-auto p-10 bg-white rounded-lg shadow-md">
      <h2 className="text-[20px] text-[#303F58] font-semibold mb-6">New Customer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Customer type */}
        <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Customer Type</label>
      <div className="flex space-x-4">
        <label className="flex items-center">

        <Link to={'/customer/addcustomer'}>
        <input
            type="radio"
            value="Business"
            checked={customerType === 'Business'}
            onChange={() => setCustomerType('Business')}
            className="mr-2"
          />
        </Link>
          Business
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            value="Individual"
            checked={customerType === 'Individual'}
            onChange={() => setCustomerType('Individual')}
            className="mr-2"
          />
          Individual
        </label>
      </div>
    </div>
        {/* Uploaded Image */}
        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">Company Name</label>
          <input
            type="text"
            // value={insuranceStatus}
            // onChange={(e) => setInsuranceStatus(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Company Name"
            required
          />
        </div>


      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
        {/* company name */}

        {/* customer website */}
        {/* primary contact */}
        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">Primary Contact</label>
          <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[315px] px-3 py-2 border me-5 rounded-md focus:outline-none focus:ring-2 gap-[126px] focus:ring-blue-500"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[315px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Last Name"
          />

        </div>
        {/* Tax preference */}
        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">Tax Preference</label>
          <input
            type="text"
            // value={vehicleNumber}
            // onChange={(e) => setVehicleNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Select Tax Preference"
            required
          />
        </div>
        {/* mobile number, work phone */}
        <div className="flex">
            <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Mobile Number</label>
          <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[315px] px-3 py-2 border me-5 rounded-md focus:outline-none focus:ring-2 gap-[126px] focus:ring-blue-500"
            placeholder="Enter mobile"
            maxLength={10}
            pattern="\d{10}"
            required
          />
        </div>
        <div>
        <label className="block text-[#303F58] font-[14px] mb-2">Work Phone</label>
        <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[315px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter work phone 1"
             maxLength={10}
            pattern="\d{10}"
            required
          />

        </div>
        </div>

        {/* workphone, whatsapp number */}
        <div className="flex">
      <div>
        <label className="block text-[#303F58] font-[14px] mb-2">Work Phone</label>
        <input
          type="text"
          value={workPhone}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
            if (value.length <= 10) {
              setWorkPhone(value); // Set only if it's 10 digits or less
            }
          }}
          className="w-[308px] px-3 py-2 border me-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter work phone"
          maxLength={10}
          pattern="\d{10}" // Regex pattern to enforce exactly 10 digits
          required
        />
      </div>
      <div>
        <label className="block text-[#303F58] font-[14px] mb-2">
          WhatsApp Number
          <input 
            type="checkbox" 
            checked={whatsappSameAsMobile} 
            onChange={handleWhatsappCheckbox} 
            className="mr-1 ms-2"
          />
          Same as Work Phone
        </label>
        <input
          type="text"
          value={whatsappNumber}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
            if (value.length <= 10 && !whatsappSameAsMobile) {
              setWhatsappNumber(value); // Set only if it's 10 digits or less and checkbox is unchecked
            }
          }}
          className="w-[336px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter WhatsApp number"
          maxLength={10}
          pattern="\d{10}" // Regex pattern to enforce exactly 10 digits
          required
          disabled={whatsappSameAsMobile} // Disable input if checkbox is checked
        />
      </div>
        </div>
    {/* currency */}
        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">Currency</label>
          <input
            type="text"
            // value={vehicleNumber}
            // onChange={(e) => setVehicleNumber(e.target.value)}
            className="w-[600px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Price"
            required
          />
          <input
            type="text"
            // value={vehicleNumber}
            // onChange={(e) => setVehicleNumber(e.target.value)}
            className="w-[50px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="INR"
            required
          />
        </div>
        {/* Place of supply */}
        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">Place of Supply</label>
          <input
            type="text"
            // value={licenseValidity}
            // onChange={(e) => setLicenseValidity(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="place of supply"
            required
          />
        </div>

        {/* State, City */}
        <div className="flex">
            <div>
            <label className="block text-[#303F58] font-[14px] mb-2">State</label>
          <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[315px] px-3 py-2 border me-5 rounded-md focus:outline-none focus:ring-2 gap-[126px] focus:ring-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
        <label className="block text-[#303F58] font-[14px] mb-2">City</label>
        <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[315px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=""
            required
          />

        </div>
        </div>

        {/* Area, postalcode */}
        <div className="flex">
            <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Area</label>
          <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[307px] px-3 py-2 border me-5 rounded-md focus:outline-none focus:ring-2 gap-[126px] focus:ring-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
        <label className="block text-[#303F58] font-[14px] mb-2">Zip Postal Code</label>
        <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[336px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter zip code"
             maxLength={6}
            pattern="\d{6}"
            required
          />

        </div>
        </div>

        <div>
          <label className="block text-[#303F58] font-[14px] mb-2">Building Address</label>
          <textarea className="w-full border border-gray-300 p-2 rounded-md h-[130px]" ></textarea>
        </div>
        {/* email, landmark */}
        <div className="flex">
            <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Email</label>
          <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[307px] px-3 py-2 border me-5 rounded-md focus:outline-none focus:ring-2 gap-[126px] focus:ring-blue-500"
            placeholder="Enter Email id"
            required
          />
        </div>
        <div>
        <label className="block text-[#303F58] font-[14px] mb-2">Landmark</label>
        <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[337px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Landmark"
            required
          />

        </div>


        {/* building number, street */}
        <div className="flex mt-[90px] ms-[-665px]">
            <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Building Number</label>
          <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[307px] px-3 py-2 border me-5 rounded-md focus:outline-none focus:ring-2 gap-[126px] focus:ring-blue-500"
            placeholder=""
          />
        </div>
        <div>
        <label className="block text-[#303F58] font-[14px] mb-2">Street</label>
        <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[337px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Landmark"
          />

        </div>
        </div>
        </div>
            
        {/* SalesMan, Nationality */}
        <div className="flex">
            <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Sales Man</label>
          <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[315px] px-3 py-2 border me-5 rounded-md focus:outline-none focus:ring-2 gap-[126px] focus:ring-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
        <label className="block text-[#303F58] font-[14px] mb-2">Nationality</label>
        <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[315px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=""
            required
          />

        </div>
        </div>

        {/* main route, subroute */}
        <div className="flex">
            <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Main route</label>
          <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[307px] px-3 py-2 border me-5 rounded-md focus:outline-none focus:ring-2 gap-[126px] focus:ring-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
        <label className="block text-[#303F58] font-[14px] mb-2">Sub Route</label>
        <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[337px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=""
            required
          />

        </div>
        </div>

        {/* number of bottles, reate per bottle, deposit amount */}
        <div className="flex">
            <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Number of bottles</label>
          <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[325px] px-3 py-2 border me-5 rounded-md focus:outline-none focus:ring-2 gap-[126px] focus:ring-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
            <label className="block text-[#303F58] font-[14px] mb-2">Rate per bottle</label>
          <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[455px] px-3 py-2 border me-5 rounded-md focus:outline-none focus:ring-2 gap-[126px] focus:ring-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
        <label className="block text-[#303F58] font-[14px] mb-2">Deposit Amount</label>
        <input
            type="text"
            // value={insuranceValidity}
            // onChange={(e) => setInsuranceValidity(e.target.value)}
            className="w-[525px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=""
            required
          />

        </div>
        </div>
        
      </div>

      {/* payment mode */}
      <div className="mt-3">
      <label className="block text-[#303F58] font-[14px] my-2">Payment Mode</label>
      <div className="flex space-x-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                value="Cash" 
                checked={paymentMode === 'Cash'} 
                onChange={() => setPaymentMode('Cash')}
                className="mr-2" 
                required
              />
              Cash
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                value="Credit" 
                checked={paymentMode === 'Credit'} 
                onChange={() => setPaymentMode('Credit')}
                className="mr-2" 
                required
              />
              Credit
            </label>
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
          Save
        </button>
      </div>
    </div>


  </div>
    );
  };
   
  export default AddIndividual;