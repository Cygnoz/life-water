import printer from '../../assets/images/printer.svg'
import vector from '../../assets/images/Vector.svg'
import trash from '../../assets/images/trash.svg'
import split from '../../assets/images/list-filter.svg'
import plus from '../../assets/circle-plus.svg'
import eye from '../../assets/images/eye.svg'
import dot from '../../assets/ellipsis-vertical.svg'
import user from '../../assets/images/circle-user.svg'

import search from '../../assets/images/search.svg'
import vehicle from '../../assets/images/vehicle 1.svg'

import { useNavigate } from "react-router-dom";


 
const CreateVehicle: React.FC = () => {
    

    const navigate = useNavigate()

    
  
    const handleAdd = (): void => {
      navigate('/vehicle/addvehicle')
    }
    const handleEdit = (): void => {
      navigate('/vehicle/editvehicle')
    }
    const handleView = (): void => {
      navigate('/')
    }


  return (
<div>


<div  className="flex min-h-screen w-full">
        <div className="p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center">
          <div>
              <h3 className="text-[#303F58] text-[20px] font-bold">Create Vehicle Details</h3>
              <p className='text-[#4B5C79]' >Lorem ipsum dolor sit amet consectetur </p>           
            </div>
            <div className="flex justify-between">
              <button
              onClick={handleAdd}
              
                className="flex justify-between items-center gap-2 bg-[#820000] text-white flex px-5 py-2 rounded-md"
              >
                <img src={plus} alt="" />
                <p>Add New Vehicle</p>
              </button>

              
              <button className="ms-2 me-4">
                <img src={dot} alt="" />
              </button>
            </div>
          </div>
          {/* Cards Section */}
          <div className="grid grid-cols-4 gap-4 my-6">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={vehicle} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">Total Vehicle</div>  
              <p className='text-[#4B5C79] w-[400] text-[12]' >Lorem ipsum dolor sit amet consectetur </p>           
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">120</div>
            </div>

           
          </div>

          {/* Table Section */}
          <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
              
<div className="absolute ml-3 ">
    <img src={search} alt="search" className="h-5 w-5" />
  </div>
  <input
    className="pl-9 text-sm w-[100%] rounded-md text-start text-gray-800 h-10 p-2 border-0 focus:ring-1 focus:ring-gray-400"
    style={{
      backgroundColor: "rgba(28, 28, 28, 0.04)",
      outline: "none",
      boxShadow: "none",
    }}
    placeholder="Search Vehicle"
  />
                
                <div className='flex w-[60%] justify-end'>
                <button className="flex border text-[14] w-[500]  text-[#565148] border-[#565148] px-4 py-2 me-2 rounded-lg"> <img className='mt-1 me-1' src={split} alt="" />Sort By</button>
                <button className="flex border text-[14] w-[500]  text-[#565148] border-[#565148]  px-4 py-2 rounded-lg"> <img className='mt-1 me-1' src={printer} alt="" />Print</button>
                </div>
              </div>
            <table className="w-full text-left">
              <thead className=' bg-[#fdf8f0]'>
                <tr className="border-b">
                <th scope="col" className="px-8 py-6">
                <input type="checkbox" />
              </th>
                  <th  className="p-2 text-[14px]  font-medium text-center leading-[18px] text-[#303F58]">Sl No</th>
                  <th className="p-2 text-[14px] font-medium text-center leading-[18px] text-[#303F58]">Photo</th>
                  <th className="p-2 text-[14px] font-medium text-center leading-[18px] text-[#303F58]">Vehicle Number</th>
                  <th  className="p-2 text-[14px] font-medium text-center leading-[18px] text-[#303F58]">Insurance Validity</th>
                  <th  className="p-2 text-[14px] font-medium text-center leading-[18px] text-[#303F58]">Insurance Amount</th>
                  <th  className="p-2 text-[14px] font-medium text-center leading-[18px] text-[#303F58]">Insurance Status</th>
                  <th className="p-2 text-[14px] font-medium text-center leading-[18px] text-[#303F58]">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                <td className="px-8 py-6">
                  <input type="checkbox" />
                </td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">1</td>
                  <td className="p-2 text-[14] text-center  text-[#4B5C79]"><img className='ms-5' src={user} alt="" /></td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">1111</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">12 days left</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">300</td>
                  <td className="p-2 text-[14] text-center text-red-500"><span className='bg-red-100 p-2 rounded-lg'>Expired</span></td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79] ">
                    <button onClick={handleView} className="text-blue-500">
                      <img src={eye} alt="" />
                    </button>
                    <button onClick={handleEdit} className="text-red-500 ml-2"><img src={vector} alt="" /></button>
                    <button className="text-red-500 ml-2"><img src={trash} alt="" /></button>

                  </td>
                </tr>
                <tr className="border-b">
                <td className="px-8 py-6">
                  <input type="checkbox" />
                </td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">2</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]"><img className='ms-5' src={user} alt="" /></td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">2222</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">20 days left</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">200</td>
                  <td className="p-2 text-[14] text-center text-red-500"><span className='bg-red-100 p-2 rounded-lg'>Expired</span></td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79] ">
                    <button onClick={handleView} className="text-blue-500">
                      <img src={eye} alt="" />
                    </button>
                    <button onClick={handleEdit} className="text-red-500 ml-2"><img src={vector} alt="" /></button>
                    <button className="text-red-500 ml-2"><img src={trash} alt="" /></button>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>



</div>
  );
};
 
export default CreateVehicle;




