import printer from '../../assets/images/printer.svg'
import split from '../../assets/images/list-filter.svg'
import search from '../../assets/images/search.svg'
import pen from '../../assets/images/pen.svg'
import trash from '../../assets/images/trash.svg'
import { useNavigate } from 'react-router-dom'
import dot from '../../assets/ellipsis-vertical.svg'
import plus from '../../assets/circle-plus.svg'



type Props = {}

function SubRoute({}: Props) {


    const navigate = useNavigate()

    const handleCreate = (): void => {
      navigate('/route/newsubroute')
    }
    const handleEdit = (): void => {
      navigate('/route/editsubroute')
    }
  
  
  return (
    <div>

<div className="flex justify-between items-center my-3">
            <div>
              <h1 className="text-xl font-bold">Create New Route</h1>
              <p className='text-gray-500 ms-2 my-2'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleCreate}
                className="flex justify-between items-center gap-2 bg-[#820000] text-white px-5 py-2 rounded-md"
              >
                <img src={plus} alt="" />
                <p>Add New SubRoute</p>
              </button>

              
              <button className="ms-2 me-4">
                <img src={dot} alt="" />
              </button>
            </div>
          </div>



    {/* Table Section */}
    <div className="bg-white shadow-md rounded-lg p-4 mt-5">
            <div className="flex justify-between items-center mb-4">
              
            <div className="relative w-full flex items-center">
  <div className="absolute left-2">
    <img src={search} alt="search" className="h-5 w-5" />
  </div>
  <input
    className="pl-9 text-sm w-[100%] rounded-md text-start text-gray-800 h-10 p-2 border-0 focus:ring-1 focus:ring-gray-400"
    style={{
      backgroundColor: "rgba(28, 28, 28, 0.04)",
      outline: "none",
      boxShadow: "none",
    }}
    placeholder="Search Route"
  />
</div>
    
  <div className='flex w-[60%] justify-end'>
              <button className="flex border text-[14] w-[500]  text-[#565148] border-[#565148] px-4 py-2 me-2 rounded-lg"> <img src={split} className='mt-1 me-1' alt="" />Sort By</button>
              <button className="flex border text-[14] w-[500]  text-[#565148] border-[#565148]  px-4 py-2 rounded-lg"> <img src={printer} className='mt-1 me-1'  alt="" />Print</button>
              </div>
            </div>
            <table className="w-full text-left">
              <thead className=' bg-[#fdf8f0]'>
                <tr className="border-b">
                <th scope="col" className="px-6 py-3">
                <input type="checkbox" />
              </th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">Sl No</th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">Sub Route</th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">Sub Route Code</th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">Main Route</th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">Description</th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">Actions</th>
                
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">1</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Lorem ipsum dolor sit amet</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">RC-9090</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Lorem ipsum dolor sit amet</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Lorem ipsum dolor sit amet</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">
                  <button onClick={handleEdit} className="text-blue-500 mx-2 items-center">
                      <img src={pen} alt="" />
                    </button>
                    <button className="text-red-500 ml-2"><img src={trash} alt="" /></button>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>

    </div>

    

  )
}

export default SubRoute