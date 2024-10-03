import shopping from '../assets//images/shopping-bag_staff.svg'
import salesmen from '../assets/images/salesman.svg'
import packing from '../assets/images/packing_.svg'
import seatbelt from '../assets/images/seatbelt.svg'
import printer from '../assets/images/printer.svg'
import vector from '../assets/images/Vector.svg'
import trash from '../assets/images/trash.svg'
import split from '../assets/images/list-filter.svg'
import plus from '../assets/circle-plus.svg'
import eye from '../assets/images/eye.svg'
import dot from '../assets/ellipsis-vertical.svg'
import user from '../assets/images/circle-user.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllStaffsAPI } from '../services/AllApi'


const CreateStaff: React.FC = () => {
  const navigate = useNavigate()
  const [staffList, setStaffList] = useState([]);

  
  

  const handleCreate = (): void => {

    navigate('/addstaff')

  }

  const handleView = (): void => {
    navigate('/viewstaff/:id')
  }
  const handleEdit = (): void => {
    navigate('/editstaff')
  }


   // Fetch staff data on component mount
   useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await getAllStaffsAPI();
        console.log(response.data); // Ensure data is logged here
        // console.log(staffList); // Ensure data is logged here
        setStaffList(response); // Ensure the correct path to the data
      } catch (error) {
        console.error('Error fetching staff data:', error);
      }
    };
  
    fetchStaff();
  }, []);
  




  return (


    <div className="flex min-h-screen w-full">
      <div>
        <div className="p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center">
          <div>
              <h3 className="text-[#303F58] text-[20px] font-bold">Create Staff</h3>
              <p className='text-[#4B5C79]' >Lorem ipsum dolor sit amet consectetur </p>           
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleCreate}
                className=" justify-between items-center gap-2 bg-[#820000] text-white flex px-5 py-2 rounded-md"
              >
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
              <p className='text-[#4B5C79] w-[400] text-[12]' >Lorem ipsum dolor sit amet consectetur </p>           
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">120</div>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={salesmen} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">Sales man</div>  
              <p className='text-[#4B5C79] w-[400] text-[12]' >Lorem ipsum dolor sit amet consectetur </p>           
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">10</div>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={packing} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">Helpers</div>  
              <p className='text-[#4B5C79] w-[400] text-[12]' >Lorem ipsum dolor sit amet consectetur </p>           
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">20</div>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={seatbelt} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">Drivers</div>  
              <p className='text-[#4B5C79] w-[400] text-[12]' >Lorem ipsum dolor sit amet consectetur </p>           
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">12</div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
              
              <input
                  type="text"
                  className="p-2 border  bg-[#fdf8f0] rounded-lg w-3/4"
                  placeholder="Search Staff"
                />  
                
                <div className='flex'>
                <button className="flex border text-[14] w-[500]  text-[#565148] border-[#565148] px-4 py-2 me-2 rounded-lg"> <img className='mt-1 me-1' src={split} alt="" />Sort By</button>
                <button className="flex border text-[14] w-[500]  text-[#565148] border-[#565148]  px-4 py-2 rounded-lg"> <img className='mt-1 me-1' src={printer} alt="" />Print</button>
                </div>
              </div>
              
  <table className="w-full text-left ">
    <thead className=' bg-[#fdf8f0]'>
      <tr className="border-b">
        <th className="p-2 text-[12px] text-center text-[#303F58]">Sl No</th>
        <th className="p-2 text-[12px] text-center text-[#303F58]">Photo</th>
        <th className="p-2 text-[12px] text-center text-[#303F58]">Name</th>
        <th className="p-2 text-[12px] text-center text-[#303F58]">Address</th>
        <th className="p-2 text-[12px] text-center text-[#303F58]">Mobile</th>
        <th className="p-2 text-[12px] text-center text-[#303F58]">Designation</th>
        <th className="p-2 text-[12px] text-center text-[#303F58]">Action</th>
      </tr>
    </thead>
    <tbody>
      {staffList && staffList.length > 0 ? (
        staffList.map((staff, index) => (
          <tr key={staff._id} className="border-b overflow-scroll">
            <td className="p-2 text-[14] text-center text-[#4B5C79]">{index + 1}</td>
            <td className="p-2 text-[14] text-center text-[#4B5C79]">
              <img className='ms-5' src={user} alt={`${staff.firstname} ${staff.lastname}`} />
            </td>
            <td className="p-2 text-[14] text-center text-[#4B5C79]">{`${staff.firstname} ${staff.lastname}`}</td>
            <td className="p-2 text-[14] text-center text-[#4B5C79]">{staff.address}</td>
            <td className="p-2 text-[14] text-center text-[#4B5C79]">{staff.mobileNumber}</td>
            <td className="p-2 text-[14] text-center text-[#4B5C79]">{staff.designation}</td>
            <td className="p-2 text-[14] text-center text-[#4B5C79] ">
              <button onClick={() => handleView(staff._id)} className="text-blue-500">
                <img src={eye} alt="View" />
              </button>
              <button onClick={() => handleEdit(staff._id)} className="text-red-500 ml-2">
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
          <td colSpan={7} className="p-2 text-center text-[#4B5C79]">No staff data available</td>
        </tr>
      )}
    </tbody>
  </table>
</div>


           
          </div>
        </div>
      </div>
   
  );
};
 
export default CreateStaff;


// import printer from '../assets/images/printer.svg';
// import vector from '../assets/images/Vector.svg';
// import trash from '../assets/images/trash.svg';
// import split from '../assets/images/list-filter.svg';
// import plus from '../assets/circle-plus.svg';
// import eye from '../assets/images/eye.svg';
// import dot from '../assets/ellipsis-vertical.svg';
// import userIcon from '../assets/images/circle-user.svg'; // Renamed to avoid conflict with 'user' object
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { getAllStaffsAPI } from '../services/AllApi';

// interface Staff {
//   id: string;
//   address: string;
//   dateofBirth: string;
//   designation: string;
//   emiratesId: string;
//   firstname: string;
//   lastname: string;
//   mobileNumber: string;
//   nationality: string;
//   profile: string;
//   visaNumber: string;
//   visaStatus: string;
//   visaValidity: string;
//   whatsAppNumber: string;
// }

// const CreateStaff: React.FC = () => {
//   const navigate = useNavigate();
//   const [staffList, setStaffList] = useState<Staff[]>([]);

//   const handleCreate = (): void => {
//     navigate('/addstaff');
//   };

//   const handleView = (staffId: string): void => {
//     navigate(`/viewstaff/${staffId}`);
//   };

//   const handleEdit = (staffId: string): void => {
//     navigate(`/editstaff/${staffId}`);
//   };

//   // Fetch staff data on component mount
//   useEffect(() => {
//     const fetchStaff = async () => {
//       try {
//         const response = await getAllStaffsAPI();
//         setStaffList(response.data); // Assuming the API returns staff data in the 'data' field
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching staff data:', error);
//       }
//     };

//     fetchStaff();
//   }, []);

//   return (
//     <div className="flex min-h-screen w-full">
//       <div className="p-6 w-full">
//         {/* Header Section */}
//         <div className="flex justify-between items-center">
//           <div>
//             <h3 className="text-[#303F58] text-[20px] font-bold">Create Staff</h3>
//             <p className="text-[#4B5C79]">Lorem ipsum dolor sit amet consectetur</p>
//           </div>
//           <div className="flex">
//             <button
//               onClick={handleCreate}
//               className="flex items-center gap-2 bg-[#820000] text-white px-5 py-2 rounded-md"
//             >
//               <img src={plus} alt="Add" />
//               <p>Add New Staff</p>
//             </button>
//             <button className="ms-2 me-4">
//               <img src={dot} alt="Menu" />
//             </button>
//           </div>
//         </div>

//         {/* Cards Section */}
//         <div className="grid grid-cols-4 gap-4 my-6">
//           {/* Add your card components here */}
//         </div>

//         {/* Table Section */}
//         <div className="bg-white shadow-md rounded-lg p-4">
//           <div className="flex justify-between items-center mb-4">
//             <input
//               type="text"
//               className="p-2 border bg-[#fdf8f0] rounded-lg w-3/4"
//               placeholder="Search Staff"
//             />
//             <div className="flex">
//               <button className="flex border text-[14px] w-[500px] text-[#565148] border-[#565148] px-4 py-2 me-2 rounded-lg">
//                 <img className="mt-1 me-1" src={split} alt="Sort" />
//                 Sort By
//               </button>
//               <button className="flex border text-[14px] w-[500px] text-[#565148] border-[#565148] px-4 py-2 rounded-lg">
//                 <img className="mt-1 me-1" src={printer} alt="Print" />
//                 Print
//               </button>
//             </div>
//           </div>

//           <table className="w-full text-left">
//             <thead className="bg-[#fdf8f0]">
//               <tr className="border-b">
//                 <th className="p-2 text-[12px] text-center text-[#303F58]">Sl No</th>
//                 <th className="p-2 text-[12px] text-center text-[#303F58]">Photo</th>
//                 <th className="p-2 text-[12px] text-center text-[#303F58]">Name</th>
//                 <th className="p-2 text-[12px] text-center text-[#303F58]">Address</th>
//                 <th className="p-2 text-[12px] text-center text-[#303F58]">Mobile</th>
//                 <th className="p-2 text-[12px] text-center text-[#303F58]">Designation</th>
//                 <th className="p-2 text-[12px] text-center text-[#303F58]">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Map over the staffList to create rows */}
//               {staffList.map((staff, index) => (
//                 <tr key={staff.id} className="border-b">
//                   <td className="p-2 text-[14px] text-center text-[#4B5C79]">{index + 1}</td>
//                   <td className="p-2 text-[14px] text-center text-[#4B5C79]">
//                     {/* Display the profile picture if available */}
//                     {staff.profile ? (
//                       <img
//                         className="w-10 h-10 rounded-full mx-auto"
//                         src={staff.profile}
//                         alt={`${staff.firstname} ${staff.lastname}`}
//                       />
//                     ) : (
//                       <img className="w-10 h-10 rounded-full mx-auto" src={userIcon} alt="User" />
//                     )}
//                   </td>
//                   <td className="p-2 text-[14px] text-center text-[#4B5C79]">
//                     {`${staff.firstname} ${staff.lastname}`}
//                   </td>
//                   <td className="p-2 text-[14px] text-center text-[#4B5C79]">{staff.address}</td>
//                   <td className="p-2 text-[14px] text-center text-[#4B5C79]">{staff.mobileNumber}</td>
//                   <td className="p-2 text-[14px] text-center text-[#4B5C79]">{staff.designation}</td>
//                   <td className="p-2 text-[14px] text-center text-[#4B5C79]">
//                     <button
//                       onClick={() => handleView(staff.id)}
//                       className="text-blue-500 mx-1"
//                     >
//                       <img src={eye} alt="View" />
//                     </button>
//                     <button
//                       onClick={() => handleEdit(staff.id)}
//                       className="text-green-500 mx-1"
//                     >
//                       <img src={vector} alt="Edit" />
//                     </button>
//                     <button
//                       onClick={() => {
//                         // Add delete functionality here
//                       }}
//                       className="text-red-500 mx-1"
//                     >
//                       <img src={trash} alt="Delete" />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {/* Handle the case when there are no staff members */}
//               {staffList.length === 0 && (
//                 <tr>
//                   <td colSpan={7} className="p-2 text-center text-[#4B5C79]">
//                     No staff members found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateStaff;