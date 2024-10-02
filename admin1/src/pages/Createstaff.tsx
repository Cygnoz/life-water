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
const CreateStaff: React.FC = () => {
  const navigate = useNavigate()

  const handleCreate = (): void => {

    navigate('/addstaff')

  }

  const handleView = (): void => {
    navigate('/')
  }
  const handleEdit = (): void => {
    navigate('/')
  }
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
                className="flex justify-between items-center gap-2 bg-[#820000] text-white flex px-5 py-2 rounded-md"
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
            <table className="w-full text-left">
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
                <tr className="border-b">
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">1</td>
                  <td className="p-2 text-[14] text-center  text-[#4B5C79]"><img className='ms-5' src={user} alt="" /></td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">John Doe</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Purathezhath House, Indira Gandhi, kochi</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">9092333300</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Sales Men</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79] ">
                    <button onClick={handleView} className="text-blue-500">
                      <img src={eye} alt="" />
                    </button>
                    <button onClick={handleEdit} className="text-red-500 ml-2"><img src={vector} alt="" /></button>
                    <button className="text-red-500 ml-2"><img src={trash} alt="" /></button>

                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">1</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]"><img className='ms-5' src={user} alt="" /></td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">John Doe</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Purathezhath House, Indira Gandhi, kochi</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">9092333300</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Sales Men</td>
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
 
export default CreateStaff;