import React from 'react';
import printer from "../../../assets/images/printer.svg";
import vector from "../../../assets/images/Vector.svg";
import trash from "../../../assets/images/trash.svg";
import split from "../../../assets/images/list-filter.svg";
import plus from "../../../assets/circle-plus.svg";
import search from "../../../assets/images/search.svg";
import { Link, useNavigate } from 'react-router-dom';

const CreateItem: React.FC = () => {
     const defaultImage = "https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png"
     const navigate =useNavigate()

    
     const handleEdit =()=>{
       navigate('/edititem')
     }

  return (
    <div className="flex min-h-screen w-full">
      <div className="p-2 w-full">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-[#303F58] text-[20px] font-bold">Item</h3>
            <p className="text-[#4B5C79]">Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="flex items-center">
          <Link to={'/additem'}>
            <button className="flex items-center gap-2 bg-[#820000] text-white px-3 py-2 rounded-md">
              <img src={plus} alt="Add New Item" />
              <p>Add New Item</p>
            </button>
            </Link>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-full max-w-[1100px]">
              <img src={search} alt="Search" className="absolute left-3 top-3 w-4 h-4" />
              <input
                className="pl-9 text-sm w-[100%] rounded-md text-start text-gray-800 h-10 p-2 border-0 focus:ring-1 focus:ring-gray-400"
                style={{
                  backgroundColor: "rgba(28, 28, 28, 0.04)",
                  outline: "none",
                  boxShadow: "none",
                }}
                placeholder="Search item"
              />
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center border text-sm text-[#565148] font-medium border-[#565148] px-4 py-2 rounded-lg">
                <img className="mr-1" src={split} alt="Sort" />
                Sort By
              </button>
              <button className="flex items-center border text-sm text-[#565148] font-medium  border-[#565148] px-4 py-2 rounded-lg">
                <img className="mr-1" src={printer} alt="Print" />
                Print
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#fdf8f0]">
                <tr className="border-b">
                  <th className="px-4 py-3 text-center">
                    <input type="checkbox" />
                  </th>
                  <th className="px-4 py-3 text-center font-medium text-[#303F58]">Photo</th>
                  <th className="px-4 py-3 text-center font-medium text-[#303F58]">Name</th>
                  <th className="px-4 py-3 text-center font-medium text-[#303F58]">Purchase Price</th>
                  <th className="px-4 py-3 text-center font-medium text-[#303F58]">Price</th>
                  <th className="px-4 py-3 text-center font-medium text-[#303F58]">Purchase Stock</th>
                  <th className="px-4 py-3 text-center font-medium text-[#303F58]">Status</th>
                  <th className="px-4 py-3 text-center font-medium text-[#303F58]">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-3 text-center">
                  <img className="mx-auto object-cover w-11 h-11 rounded-full" src={defaultImage} alt="item" />
                  </td>
                  <td className="px-4 py-3 text-center text-[#4B5C79]">John</td>
                  <td className="px-4 py-3 text-center text-[#4B5C79]">100</td>
                  <td className="px-4 py-3 text-center text-[#4B5C79]">234</td>
                  <td className="px-4 py-3 text-center text-[#4B5C79]">1223</td>
                  <td className="px-4 py-3 text-center">
                    <span className="bg-[#F9DEDC] text-[#FA4545] px-2 py-1 rounded-lg">Out of stock</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button className="text-green-500 mr-2">
                      <img  onClick={handleEdit} src={vector} alt="Edit" />
                    </button>
                    <button className="text-red-500">
                      <img src={trash} alt="Delete" />
                    </button>
                  </td>
                </tr>
                {/* Repeat for other rows */}
                <tr className="border-b">
                  <td className="px-4 py-3 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-3 text-center">
                  <img className="mx-auto object-cover w-11 h-11 rounded-full" src={defaultImage} alt="item" />
                  </td>
                  <td className="px-4 py-3 text-center text-[#4B5C79]">Doe</td>
                  <td className="px-4 py-3 text-center text-[#4B5C79]">100</td>
                  <td className="px-4 py-3 text-center text-[#4B5C79]">657</td>
                  <td className="px-4 py-3 text-center text-[#4B5C79]">7873</td>
                  <td className="px-4 py-3 text-center">
                    <span className="bg-[#F9DEDC] text-[#FA4545] px-2 py-1 rounded-lg">Out of stock</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button  onClick={handleEdit} className="text-green-500 mr-2">
                      <img src={vector} alt="Edit" />
                    </button>
                    <button  className="text-red-500">
                      <img src={trash} alt="Delete" />
                    </button>
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

export default CreateItem;
