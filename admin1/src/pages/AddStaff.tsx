import { useState } from "react"
import { addStaffAPI } from "../services/AllApi"
import back from "../assets/images/backbutton.svg"
import { Link } from "react-router-dom"
type Props = {}

function AddStaff({}: Props) {
  const [mobileNumber, setMobileNumber] = useState("")
  const [whatsAppNumber, setWhatsAppNumber] = useState("")
  const [isSameAsPhone, setIsSameAsPhone] = useState(false)
  const [visaStatus, setVisaStatus] = useState("")
  const [visaNumber, setVisaNumber] = useState("")
  const [emiratesId, setEmiratesId] = useState("")
  const [fullname, setFullname] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [address, setAddress] = useState("")
  const [designation, setDesignation] = useState("")
  const [visaValidity, setVisaValidity] = useState("")
  const [profile, setProfile] = useState<File | null>(null)
  const [nationality, setNationality] = useState("")
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  console.log(profile)

  const handleWhatsAppCheckbox = () => {
    setIsSameAsPhone(!isSameAsPhone)
    if (!isSameAsPhone) {
      setWhatsAppNumber(mobileNumber)
    } else {
      setWhatsAppNumber("")
    }
  }

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setProfile(file) // Set the selected file to state
      console.log(file) // Log the file for inspection
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const staffData = new FormData()
    staffData.append("firstname", fullname.split(" ")[0])
    staffData.append("lastname", fullname.split(" ")[1] || "")
    if (profile) {
      staffData.append("profile", profile)
    }
    staffData.append("address", address)
    staffData.append("visaStatus", visaStatus as "Valid" | "Expired" | "In Process")
    staffData.append("visaValidity", visaValidity)
    staffData.append("mobileNumber", mobileNumber)
    staffData.append("whatsAppNumber", whatsAppNumber)
    staffData.append("visaNumber", visaNumber)
    staffData.append("dateofBirth", dateOfBirth)
    staffData.append("nationality", nationality)
    staffData.append("designation", designation as "Sales" | "Driver" | "Helper")
    staffData.append("emiratesId", emiratesId)

    try {
      const response = await addStaffAPI(staffData)
      if (response.message) {
        setError(response.message)
      } else {
        clearForm()
        setSuccessMessage("Staff added successfully!")
      }
    } catch (error) {
      setError("An error occurred while adding the staff member.")
    }
  }

  const clearForm = () => {
    setFullname("")
    setDateOfBirth("")
    setMobileNumber("")
    setWhatsAppNumber("")
    setVisaStatus("")
    setVisaNumber("")
    setVisaValidity("")
    setNationality("")
    setAddress("")
    setEmiratesId("")
    setDesignation("")
    setError("")
    setSuccessMessage("")
    setProfile(null)
    setIsSameAsPhone(false)
  }

  return (
    <div>
      <div className="min-h-screen bg-gray-100 items-center justify-center ">
        <div className="flex gap-3 items-center w-full max-w-8xl mt-5 mb-6 ms-3">
          <Link to={"/staff"}>
            <div className="icon-placeholder">
              <img className="bg-gray-200 rounded-full p-2" src={back} alt="" />
            </div>
          </Link>
          <h2 className="text-2xl font-bold">Create New Staff</h2>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-8xl w-full mx-4">
          <h2 className="text-2xl font-bold mb-4">Add Staff</h2>

          {error && <p className="text-red-600">{error}</p>}
          {successMessage && <p className="text-green-600">{successMessage}</p>}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Profile Picture */}
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex items-center space-x-4">
                    <img src={profile ? URL.createObjectURL(profile) : "https://via.placeholder.com/100"} alt={profile ? profile.name : "Profile"} className="w-24 h-24 rounded-full object-cover" />
                    <label className="ml-4 p-2 border border-gray-300 rounded-lg cursor-pointer text-gray-700">
                      Upload New Photo
                      <input type="file" onChange={handleProfileChange} accept="image/*" className="hidden" />
                    </label>
                  </div>
                    <p className="mt-1 text-sm text-gray-600 text-center ml-1 mx-20">At least 800 x 800 px Recommended. JPG or PNG is Allowed</p>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input type="number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-lg w-full" placeholder="Enter Mobile" />
                </div>

                {/* WhatsApp Number with Checkbox */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                  <div className="mt-2 flex items-center">
                    <input type="checkbox" checked={isSameAsPhone} onChange={handleWhatsAppCheckbox} className="form-checkbox h-4 w-4 text-red-600" />
                    <span className="ml-2 text-sm text-gray-700">Same as phone number</span>
                  </div>
                  <input type="number" value={whatsAppNumber} onChange={(e) => setWhatsAppNumber(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-lg w-full" placeholder="Enter WhatsApp number" disabled={isSameAsPhone} />
                </div>

                {/* Visa Status (Dropdown) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Visa Status</label>
                  <select className="mt-1 p-2 border border-gray-300 rounded-lg w-full" value={visaStatus} onChange={(e) => setVisaStatus(e.target.value)}>
                    <option value="">Enter Visa Status</option>
                    <option value="Valid">Valid</option>
                    <option value="Expired">Expired</option>
                    <option value="In Process">In Process</option>
                  </select>
                </div>

                {/* Visa Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Visa Number</label>
                  <input type="text" value={visaNumber} onChange={(e) => setVisaNumber(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-lg w-full" placeholder="Enter Visa Number" />
                </div>

                {/* Emirates ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Emirates ID</label>
                  <input type="text" value={emiratesId} onChange={(e) => setEmiratesId(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-lg w-full" placeholder="Enter Emirates ID" />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-lg w-full" placeholder="Enter Name" />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-lg w-full" />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-lg w-full" placeholder="Enter Address" />
                </div>

                {/* designation */}

                <div>
                  <label className="block text-sm font-medium text-gray-700">Designation</label>
                  <div className="flex flex-col space-y-2 mt-2">
                    <label className="inline-flex items-center">
                      <input type="radio" name="designation" value="Sales" checked={designation === "Sales"} onChange={(e) => setDesignation(e.target.value)} className="form-radio" />
                      <span className="ml-2">Salesman</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="designation" value="Driver" checked={designation === "Driver"} onChange={(e) => setDesignation(e.target.value)} className="form-radio" />
                      <span className="ml-2">Driver</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="designation" value="Helper" checked={designation === "Helper"} onChange={(e) => setDesignation(e.target.value)} className="form-radio" />
                      <span className="ml-2">Helper</span>
                    </label>
                  </div>
                </div>

                {/* Visa Validity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Visa Validity</label>
                  <input type="date" value={visaValidity} onChange={(e) => setVisaValidity(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-lg w-full" />
                </div>

                {/* Nationality */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nationality</label>
                  <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-lg w-full" placeholder="Enter Nationality" />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button type="submit" className="px-4 py-2 bg-[#820000] rounded-lg text-white">
                Submit
              </button>
              <Link to={"/staff"}>
                <button type="button" className="ml-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600" onClick={clearForm}>
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddStaff
