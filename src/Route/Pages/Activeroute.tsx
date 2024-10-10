 import printer from '../../assets/images/printer.svg'
import split from '../../assets/images/list-filter.svg'
import search from '../../assets/images/search.svg'
import back from '../../assets/images/backbutton.svg'
import { Link } from 'react-router-dom';
 
const ActiveRoute: React.FC = () => {
  return (
<div className='mt-5'>
<div className="flex gap-3 items-center w-full max-w-8xl mb-6 ms-3">
     <Link to={'/route/createroute'}>
     <div className="icon-placeholder">
         <img className='bg-gray-200 rounded-full p-2' src={back} alt="" />
        </div>
     </Link>
        <h2 className="text-2xl font-bold">Add New Sub Route</h2>
        {/* Placeholder for Icon */}
        
      </div>

    {/* Table Section */}
    <div className="bg-white shadow-md rounded-lg p-4">
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
                  <th className="p-2 text-[12px] text-center text-[#303F58]">Main Route</th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">Sub Route</th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">Sales Man</th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">Helper</th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">Vehicle Number</th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">Total Stock</th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">Sold Stock</th>
                
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">1</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Lorem ipsum dolor sit amet </td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Lorem ipsum dolor sit amet</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">John Doe</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">9092333300</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Water Dispenser</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">20</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Joey</td>
                
                </tr>
                <tr className="border-b">
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">2</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Lorem ipsum dolor sit amet</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Lorem ipsum dolor sit amet</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">John Doe</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">9092333300</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Water Dispenser</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">20</td>
                  <td className="p-2 text-[14] text-center text-[#4B5C79]">Joey</td>
                  <td className="p-2 text-[14] text-center">
                  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

</div>
  );
};
 
export default ActiveRoute;