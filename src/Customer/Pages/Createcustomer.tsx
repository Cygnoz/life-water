import total from "../../assets/images/Group 2501.png"
import foc from "../../assets/images/Group 2500.png"
import cash from "../../assets/images/Group 2499.png"
import credit from "../../assets/images/Group 2498.png"
import plus from "../../assets/circle-plus.svg"
import eye from "../../assets/images/eye.svg"
import dot from "../../assets/ellipsis-vertical.svg"
import printer from "../../assets/images/printer.svg"
import vector from "../../assets/images/Vector.svg"
import trash from "../../assets/images/trash.svg"
import split from "../../assets/images/list-filter.svg"
import user from "../../assets/images/circle-user.svg"
import { Link, useNavigate } from "react-router-dom"



const CreateCustomer: React.FC = () => {
  const navigate =useNavigate()

  const handleView =()=>{
    navigate('/viewcustomer')
  }
  const handleEdit =()=>{
    navigate('/editcustomer')
  }
  
    return (
  <div>
<div className="flex min-h-screen w-full">
      <div>
        <div className="p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-[#303F58] text-[20px] font-bold">
                Create Customer
              </h3>
              <p className="text-[#4B5C79]">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p>
            </div>
            <div className="flex justify-between">
              <Link to={'/addcustomer'}>
              <button
                
                className="flex justify-between items-center gap-2 bg-[#820000] text-white  px-5 py-2 rounded-md"
              >
                <img src={plus} alt="" />
                <p>Add New Customer</p>
              </button>
              
              </Link>
              

              <button className="ms-2 me-4">
                <img src={dot} alt="" />
              </button>
            </div>
          </div>
          {/* Cards Section */}
          <div className="grid grid-cols-4 gap-4 my-6">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img className="w-[40px] h-[35px] " src={total} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">
                Total Customer
              </div>
              <p className="text-[#4B5C79] w-[400] text-[12]">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p>
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">
                120
              </div>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img className="w-[40px] h-[35px] " src={foc} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">
                FOC Customer
              </div>
              <p className="text-[#4B5C79] w-[400] text-[12]">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p>
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">
                10
              </div>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img className="w-[40px] h-[35px] " src={cash} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">
                Cash Customer
              </div>
              <p className="text-[#4B5C79] w-[400] text-[12]">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p>
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">
                20
              </div>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img className="w-[40px] h-[35px] " src={credit} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">
                Credit Customer
              </div>
              <p className="text-[#4B5C79] w-[400] text-[12]">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p>
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">
                12
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                className="p-2 border  bg-[#fdf8f0] rounded-lg w-3/4"
                placeholder="Search Customer"
              />

              <div className="flex">
                <button className="flex border text-[14] w-[500]  text-[#565148] border-[#565148] px-4 py-2 me-2 rounded-lg">
                  {" "}
                  <img className="mt-1 me-1" src={split} alt="" />
                  Sort By
                </button>
                <button className="flex border text-[14] w-[500]  text-[#565148] border-[#565148]  px-4 py-2 rounded-lg">
                  {" "}
                  <img className="mt-1 me-1" src={printer} alt="" />
                  Print
                </button>
              </div>
            </div>
            <table className="w-full text-left">
              <thead className="bg-[#fdf8f0]">
                <tr className="border-b">
                  <th className="p-2 text-[12px] text-center text-[#303F58]">
                    Sl No
                  </th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">
                    Photo
                  </th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">
                  Name
                  </th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">
                  Mobile
                  </th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">
                    Main Route
                  </th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">
                    Sub Route
                  </th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">
                    Coupon
                  </th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                
                 <tr className="border-b" >
                    <td className="p-2 text-[14px] text-center text-[#4B5C79]">
                      1
                    </td>
                    <td className="p-2 text-[14px] text-center text-[#4B5C79]">
                      <img className="mx-auto object-cover w-11 h-11 rounded-full" src={user} alt="" />
                    </td>
                    <td className="p-2 text-[14px] text-center text-[#4B5C79]">
                      jhon
                    </td>
                    <td className="p-2 text-[14px] text-center text-[#4B5C79]">
                      99898989
                    </td>
                    <td className="p-2 text-[14px] text-center text-[#4B5C79]">
                      AN-990
                    </td>
                    <td className="p-2 text-[14px] text-center text-[#4B5C79]">
                     Lorem
                    </td>
                    <td className="p-2 text-[14px] text-center text-[#4B5C79]">
                      No
                    </td>
                    
                    <td className="p-2 text-[14px] text-center text-[#4B5C79]">
                      <button
                      onClick={handleView}
                        
                        className="text-blue-500"
                      >
                        <img src={eye} alt="View" />
                      </button>
                      <button className="text-red-500 ml-2"    onClick={handleEdit}>
                   
                        <img src={vector} alt="Edit" />
                      </button>
                      <button className="text-red-500 ml-2">
            
                        <img src={trash} alt="Delete" />
                      </button>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>  </div>
    );
  };
   
  export default CreateCustomer;