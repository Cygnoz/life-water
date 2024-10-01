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
    navigate('/')
  }

  const handleView = (): void => {
    navigate('/')
  }
  const handleEdit = (): void => {
    navigate('/editstaff')
  }
  return (
<div className="flex min-h-screen w-full">
      {/* Sidebar */}
      
      <div>
        <div className="p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Create Staff</h1>
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
              <div className="w-[587px] font-bold leading-normal text-[20px] mt-2">Total Staff</div>             
              <div className="w-[587px] text-[#820000] font-bold leading-normal text-[25px] mt-3">120</div>
              
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={salesmen} alt="" />
              <div className="w-[587px] font-bold leading-normal text-[20px] mt-2">Sales Men</div>
              <div className="w-[587px] text-[#820000] font-bold leading-normal text-[25px] mt-3">100</div>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={packing} alt="" />
              <div className="w-[587px] font-bold leading-normal text-[20px] mt-2">Helpers</div>
              
              <div className="w-[587px] text-[#820000] font-bold leading-normal text-[25px] mt-3">10</div>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={seatbelt} alt="" />
              <div className="w-[587px] font-bold leading-normal text-[20px] mt-2">Drivers</div>
              
              <div className="w-[587px] text-[#820000] font-bold leading-normal text-[25px] mt-3">12</div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                className="p-2 border rounded-md w-1/2"
                placeholder="Search Staff"
              />
              <div className='flex'>
              <button className="flex bg-gray-300 px-4 py-2 me-2 rounded-md"> <img className='mt-1 me-1' src={split} alt="" />Sort By</button>
              <button className="flex bg-gray-300 px-4 py-2 rounded-md"> <img className='mt-1 me-1' src={printer} alt="" />Print</button>
              </div>
            </div>
            <table className="w-full text-left">
              <thead className=' bg-[#fdf8f0]'>
                <tr className="border-b">
                  <th className="p-2">Sl No</th>
                  <th className="p-2">Photo</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Address</th>
                  <th className="p-2">Mobile</th>
                  <th className="p-2">Designation</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">1</td>
                  <td className="p-2"><img src={user} alt="" /></td>
                  <td className="p-2">John Doe</td>
                  <td className="p-2">Purathezhath House, Indira Gandhi, kochi</td>
                  <td className="p-2">9092333300</td>
                  <td className="p-2">Sales Men</td>
                  <td className="p-2 flex gap-1">
                    <button onClick={handleView} className="text-blue-500">
                      <img src={eye} alt="" />
                    </button>
                    <button onClick={handleEdit} className="text-red-500 ml-2"><img src={vector} alt="" /></button>
                    <button className="text-red-500 ml-2"><img src={trash} alt="" /></button>

                  </td>
                </tr>
                <tr className="border-b">
                <td className="p-2">2</td>
                <td className="p-2"><img src={user} alt="" /></td>
                <td className="p-2">John Doe</td>
                  <td className="p-2">Purathezhath House, Indira Gandhi, kochi</td>
                  <td className="p-2">9092333300</td>
                  <td className="p-2">Sales Men</td>
                  <td className="p-2 flex gap-1">
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