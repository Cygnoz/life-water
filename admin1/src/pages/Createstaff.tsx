// import shopping from "../assets//images/shopping-bag_staff.svg"
// import salesmen from "../assets/images/salesman.svg"
// import packing from "../assets/images/packing_.svg"
// import seatbelt from "../assets/images/seatbelt.svg"
// import printer from "../assets/images/printer.svg"
// import vector from "../assets/images/Vector.svg"
// import trash from "../assets/images/trash.svg"
// import split from "../assets/images/list-filter.svg"
// import plus from "../assets/circle-plus.svg"
// import eye from "../assets/images/eye.svg"
// import dot from "../assets/ellipsis-vertical.svg"
// import { useNavigate } from "react-router-dom"
// import { useEffect, useState } from "react"
// import { getAllStaffsAPI } from "../services/AllApi"
// import { BASEURL } from "../services/Baseurl"

// const CreateStaff: React.FC = () => {
//   const navigate = useNavigate()
//   const [staffList, setStaffList] = useState([])

//   const defaultImage = "https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png"

//   const handleCreate = (): void => {
//     navigate("/addstaff")
//   }

//   const handleView = (id:any) => {
//     navigate(`/viewstaff/${id}`) // Pass the staff ID to the view page
//   }

//   const handleEdit = (): void => {
//     navigate("/editstaff")
//   }

//   // Fetch staff data on component mount
//   useEffect(() => {
//     const fetchStaff = async () => {
//       try {
//         const response = await getAllStaffsAPI()
//         console.log("Full API Response:", response) // Check the response
//         setStaffList(response) // Since the response is an array of staff objects
//       } catch (error) {
//         console.error("Error fetching staff data:", error)
//       }
//     }

//     fetchStaff()
//   }, [])

//   useEffect(() => {
//     console.log("Updated staff list:", staffList)
//   }, [staffList])

//   return (
//     <div className="flex min-h-screen w-full">
//       <div>
//         <div className="p-6">
//           {/* Header Section */}
//           <div className="flex justify-between items-center">
//             <div>
//               <h3 className="text-[#303F58] text-[20px] font-bold">Create Staff</h3>
//               <p className="text-[#4B5C79]">Lorem ipsum dolor sit amet consectetur </p>
//             </div>
//             <div className="flex justify-between">
//               <button onClick={handleCreate} className=" justify-between items-center gap-2 bg-[#820000] text-white flex px-5 py-2 rounded-md">
//                 <img src={plus} alt="" />
//                 <p>Add New Staff</p>
//               </button>

//               <button className="ms-2 me-4">
//                 <img src={dot} alt="" />
//               </button>
//             </div>
//           </div>
//           {/* Cards Section */}
//           <div className="grid grid-cols-4 gap-4 my-6">
//             <div className="p-4 bg-white shadow-md rounded-lg">
//               <img src={shopping} alt="" />
//               <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">Total Staff</div>
//               <p className="text-[#4B5C79] w-[400] text-[12]">Lorem ipsum dolor sit amet consectetur </p>
//               <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">120</div>
//             </div>

//             <div className="p-4 bg-white shadow-md rounded-lg">
//               <img src={salesmen} alt="" />
//               <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">Sales man</div>
//               <p className="text-[#4B5C79] w-[400] text-[12]">Lorem ipsum dolor sit amet consectetur </p>
//               <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">10</div>
//             </div>

//             <div className="p-4 bg-white shadow-md rounded-lg">
//               <img src={packing} alt="" />
//               <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">Helpers</div>
//               <p className="text-[#4B5C79] w-[400] text-[12]">Lorem ipsum dolor sit amet consectetur </p>
//               <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">20</div>
//             </div>

//             <div className="p-4 bg-white shadow-md rounded-lg">
//               <img src={seatbelt} alt="" />
//               <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">Drivers</div>
//               <p className="text-[#4B5C79] w-[400] text-[12]">Lorem ipsum dolor sit amet consectetur </p>
//               <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">12</div>
//             </div>
//           </div>

//           {/* Table Section */}
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <div className="flex justify-between items-center mb-4">
//               <input type="text" className="p-2 border  bg-[#fdf8f0] rounded-lg w-3/4" placeholder="Search Staff" />

//               <div className="flex">
//                 <button className="flex border text-[14] w-[500]  text-[#565148] border-[#565148] px-4 py-2 me-2 rounded-lg">
//                   {" "}
//                   <img className="mt-1 me-1" src={split} alt="" />
//                   Sort By
//                 </button>
//                 <button className="flex border text-[14] w-[500]  text-[#565148] border-[#565148]  px-4 py-2 rounded-lg">
//                   {" "}
//                   <img className="mt-1 me-1" src={printer} alt="" />
//                   Print
//                 </button>
//               </div>
//             </div>
//             <div className="w-full overflow-x-auto">
//   <div className="min-w-full">
//     <table className="min-w-full table-fixed"> {/* Added table-fixed to ensure proper column widths */}
//       <thead className="bg-[#fdf8f0] sticky top-0">
//         <tr className="border-b">
//           <th className="p-2 text-[12px] text-center text-[#303F58] w-16">Sl No</th> {/* Defined widths */}
//           <th className="p-2 text-[12px] text-center text-[#303F58] w-24">Photo</th>
//           <th className="p-2 text-[12px] text-center text-[#303F58] w-36">Name</th>
//           <th className="p-2 text-[12px] text-center text-[#303F58] w-64">Address</th>
//           <th className="p-2 text-[12px] text-center text-[#303F58] w-36">Mobile</th>
//           <th className="p-2 text-[12px] text-center text-[#303F58] w-36">Designation</th>
//           <th className="p-2 text-[12px] text-center text-[#303F58] w-24">Action</th>
//         </tr>
//       </thead>
//     </table>
//   </div>
  
//   <div className="min-w-full h-[400px] overflow-y-auto">
//     <table className="min-w-full table-fixed"> {/* Match the table width and layout */}
//       <tbody>
//         {staffList.length > 0 ? (
//           staffList.map((staff, index) => (
//             <tr className="border-b" key={staff._id}>
//               <td className="p-2 text-[14px] text-center text-[#4B5C79] w-16">{index + 1}</td> {/* Consistent width */}
//               <td className="p-2 text-center w-24">
//                 <img
//                   className="mx-auto object-cover w-11 h-11 rounded-full"
//                   src={staff.profile ? `${BASEURL}/${staff.profile.replace(/\\/g, "/")}` : defaultImage}
//                   alt={`${staff.firstname} ${staff.lastname}`}
//                 />
//               </td>
//               <td className="p-2 text-[14px] text-center text-[#4B5C79] w-36">
//                 {staff.firstname} {staff.lastname}
//               </td>
//               <td className="p-2 text-[14px] text-center text-[#4B5C79] w-64">{staff.address}</td>
//               <td className="p-2 text-[14px] text-center text-[#4B5C79] w-36">{staff.mobileNumber}</td>
//               <td className="p-2 text-[14px] text-center text-[#4B5C79] w-36">{staff.designation}</td>
//               <td className="p-2 text-center w-24">
//                 <button onClick={() => handleView(staff._id)} className="text-blue-500">
//                   <img src={eye} alt="View" />
//                 </button>
//                 <button onClick={handleEdit} className="text-red-500 ml-2">
//                   <img src={vector} alt="Edit" />
//                 </button>
//                 <button className="text-red-500 ml-2">
//                   <img src={trash} alt="Delete" />
//                 </button>
//               </td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="7" className="text-center text-[#4B5C79]">
//               No staff data available.
//             </td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   </div>
// </div>


//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CreateStaff





import shopping from "../assets//images/shopping-bag_staff.svg"
import salesmen from "../assets/images/salesman.svg"
import packing from "../assets/images/packing_.svg"
import seatbelt from "../assets/images/seatbelt.svg"
import printer from "../assets/images/printer.svg"
import vector from "../assets/images/Vector.svg"
import trash from "../assets/images/trash.svg"
import split from "../assets/images/list-filter.svg"
import plus from "../assets/circle-plus.svg"
import eye from "../assets/images/eye.svg"
import dot from "../assets/ellipsis-vertical.svg"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getAllStaffsAPI } from "../services/AllApi"
import { BASEURL } from "../services/Baseurl"

const CreateStaff: React.FC = () => {
  const navigate = useNavigate()
  const [staffList, setStaffList] = useState([])  // Full staff list
  const [filteredStaffList, setFilteredStaffList] = useState([])  // Filtered staff list
  const [searchQuery, setSearchQuery] = useState("")  // Search query state

  const defaultImage = "https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png"

  const handleCreate = (): void => {
    navigate("/addstaff")
  }

  const handleView = (id: any) => {
    navigate(`/viewstaff/${id}`) // Pass the staff ID to the view page
  }

  const handleEdit = (): void => {
    navigate("/editstaff")
  }

  // Fetch staff data on component mount
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await getAllStaffsAPI()
        console.log("Full API Response:", response) // Check the response
        setStaffList(response) // Store full staff list
        setFilteredStaffList(response) // Initially, display all staff
      } catch (error) {
        console.error("Error fetching staff data:", error)
      }
    }

    fetchStaff()
  }, [])

  useEffect(() => {
    console.log("Updated staff list:", staffList)
  }, [staffList])

  // Handle search input change and filter staff list
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    // Filter staff list based on search query
    const filteredList = staffList.filter((staff: any) => {
      return (
        staff.firstname.toLowerCase().includes(query) || 
        staff.lastname.toLowerCase().includes(query) || 
        staff.address.toLowerCase().includes(query) || 
        staff.mobileNumber.toLowerCase().includes(query) || 
        staff.designation.toLowerCase().includes(query)
      )
    })

    setFilteredStaffList(filteredList) // Update the filtered staff list
  }

  return (
    <div className="flex min-h-screen w-full">
      <div>
        <div className="p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-[#303F58] text-[20px] font-bold">Create Staff</h3>
              <p className="text-[#4B5C79]">Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className="flex justify-between">
              <button onClick={handleCreate} className=" justify-between items-center gap-2 bg-[#820000] text-white flex px-5 py-2 rounded-md">
                <img src={plus} alt="" />
                <p>Add New Staff</p>
              </button>

              <button className="ms-2 me-4">
                <img src={dot} alt="" />
              </button>
            </div>
          </div>
          {/* Cards Section */}
          <div className="grid grid-cols-4 gap-4 my-6">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={shopping} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">Total Staff</div>
              <p className="text-[#4B5C79] w-[400] text-[12]">Lorem ipsum dolor sit amet consectetur </p>
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">120</div>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={salesmen} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">Sales man</div>
              <p className="text-[#4B5C79] w-[400] text-[12]">Lorem ipsum dolor sit amet consectetur </p>
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">10</div>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={packing} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">Helpers</div>
              <p className="text-[#4B5C79] w-[400] text-[12]">Lorem ipsum dolor sit amet consectetur </p>
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">20</div>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={seatbelt} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">Drivers</div>
              <p className="text-[#4B5C79] w-[400] text-[12]">Lorem ipsum dolor sit amet consectetur </p>
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">12</div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <input 
                type="text" 
                className="p-2 border bg-[#fdf8f0] rounded-lg w-3/4" 
                placeholder="Search Staff" 
                value={searchQuery} 
                onChange={handleSearch} 
              />

              <div className="flex">
                <button className="flex border text-[14] w-[500] text-[#565148] border-[#565148] px-4 py-2 me-2 rounded-lg">
                  <img className="mt-1 me-1" src={split} alt="" />
                  Sort By
                </button>
                <button className="flex border text-[14] w-[500] text-[#565148] border-[#565148] px-4 py-2 rounded-lg">
                  <img className="mt-1 me-1" src={printer} alt="" />
                  Print
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-full">
                <table className="min-w-full table-fixed">
                  <thead className="bg-[#fdf8f0] sticky top-0">
                    <tr className="border-b">
                      <th className="p-2 text-[12px] text-center text-[#303F58] w-16">Sl No</th>
                      <th className="p-2 text-[12px] text-center text-[#303F58] w-24">Photo</th>
                      <th className="p-2 text-[12px] text-center text-[#303F58] w-36">Name</th>
                      <th className="p-2 text-[12px] text-center text-[#303F58] w-64">Address</th>
                      <th className="p-2 text-[12px] text-center text-[#303F58] w-36">Mobile</th>
                      <th className="p-2 text-[12px] text-center text-[#303F58] w-36">Designation</th>
                      <th className="p-2 text-[12px] text-center text-[#303F58] w-24">Action</th>
                    </tr>
                  </thead>
                </table>
              </div>

              <div className="min-w-full h-[400px] overflow-y-auto">
                <table className="min-w-full table-fixed">
                  <tbody>
                    {filteredStaffList.length > 0 ? (
                      filteredStaffList.map((staff: any, index: number) => (
                        <tr className="border-b" key={staff._id}>
                          <td className="p-2 text-[14px] text-center text-[#4B5C79] w-16">{index + 1}</td>
                          <td className="p-2 text-center w-24">
                            <img
                              className="mx-auto object-cover w-11 h-11 rounded-full"
                              src={staff.profile ? `${BASEURL}/${staff.profile.replace(/\\/g, "/")}` : defaultImage}
                              alt={`${staff.firstname} ${staff.lastname}`}
                            />
                          </td>
                          <td className="p-2 text-[14px] text-center text-[#4B5C79] w-36">
                            {staff.firstname} {staff.lastname}
                          </td>
                          <td className="p-2 text-[14px] text-center text-[#4B5C79] w-64">{staff.address}</td>
                          <td className="p-2 text-[14px] text-center text-[#4B5C79] w-36">{staff.mobileNumber}</td>
                          <td className="p-2 text-[14px] text-center text-[#4B5C79] w-36">{staff.designation}</td>
                          <td className="p-2 text-center w-24">
                            <button onClick={() => handleView(staff._id)} className="text-blue-500">
                              <img src={eye} alt="View" />
                            </button>
                            <button onClick={handleEdit} className="text-red-500 ml-2">
                              <img src={vector} alt="Edit" />
                            </button>
                            <button className="text-red-500 ml-2">
                              <img src={trash} alt="Delete" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="text-center text-[#4B5C79]">
                          No staff data available.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateStaff

