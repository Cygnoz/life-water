import printer from '../../assets/images/printer.svg';
import split from '../../assets/images/list-filter.svg';
import search from '../../assets/images/search.svg';
import { useEffect, useState } from 'react';
import { getAllEndRidesAPI } from '../../services/RouteAPI/ActiveRoute';

const Ride: React.FC = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllEndRidesAPI();
      setRides(data.data); // Ensure data structure matches the array format expected
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-2">
      <div className="flex gap-3 items-center w-full max-w-8xl mb-6 ms-3">
        <div>
          <h3 className="text-[#303F58] text-[20px] font-bold">Ride</h3>
          <p className="text-[#4B5C79]">Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-full flex items-center">
            <div className="absolute left-2">
              <img src={search} alt="search" className="h-5 w-5" />
            </div>
            <input
              className="pl-9 text-sm w-[100%] rounded-md text-start text-gray-800 h-10 p-2 border-0 focus:ring-1 focus:ring-gray-400"
              style={{
                backgroundColor: 'rgba(28, 28, 28, 0.04)',
                outline: 'none',
                boxShadow: 'none',
              }}
              placeholder="Search Ride"
            />
          </div>

          <div className="flex w-[60%] justify-end">
            <button className="flex border text-[14] w-[500] text-[#565148] border-[#565148] px-4 py-2 me-2 rounded-lg">
              <img src={split} className="mt-1 me-1" alt="" />Sort By
            </button>
            <button className="flex border text-[14] w-[500] text-[#565148] border-[#565148] px-4 py-2 rounded-lg">
              <img src={printer} className="mt-1 me-1" alt="" />Print
            </button>
          </div>
        </div>

        <table className="w-full text-left">
          <thead className="bg-[#fdf8f0]">
            <tr className="border-b">
              <th scope="col" className="px-6 py-3">
                <input type="checkbox" />
              </th>
              <th className="p-2 text-[12px] text-center text-[#303F58]">Sl No</th>
              <th className="p-2 text-[12px] text-center text-[#303F58]">Date</th>
              <th className="p-2 text-[12px] text-center text-[#303F58]">Sales Man</th>
              <th className="p-2 text-[12px] text-center text-[#303F58]">Driver</th>
              <th className="p-2 text-[12px] text-center text-[#303F58]">Vehicle</th>
              <th className="p-2 text-[12px] text-center text-[#303F58]">Route</th>
              <th className="p-2 text-[12px] text-center text-[#303F58]">Stock</th>
              <th className="p-2 text-[12px] text-center text-[#303F58]">Sold</th>
            </tr>
          </thead>
          <tbody>
            {rides.map((ride, index) => (
              <tr className="border-b" key={ride._id}>
                <td className="px-6 py-4">
                  <input type="checkbox" />
                </td>
                <td className="p-2 text-[14] text-center text-[#4B5C79]">{index + 1}</td>
                <td className="p-2 text-[14] text-center text-[#4B5C79]">{ride.date || 'N/A'}</td>
                <td className="p-2 text-[14] text-center text-[#4B5C79]">{ride.salesMan}</td>
                <td className="p-2 text-[14] text-center text-[#4B5C79]">{ride.driver}</td>
                <td className="p-2 text-[14] text-center text-[#4B5C79]">{ride.vehicleNo}</td>
                <td className="p-2 text-[14] text-center text-[#4B5C79]">{ride.mainRoute}</td>
                <td className="p-2 text-[14] text-center text-[#4B5C79]">{ride.stock}</td>
                <td className="p-2 text-[14] text-center text-[#4B5C79]">{ride.sold || '0'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ride;
