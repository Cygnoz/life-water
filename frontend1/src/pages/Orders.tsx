import orders from "../assets/images/ordersimg.svg";
import { Link } from "react-router-dom";
import search from "../assets/images/search (2).svg";
import plus from "../assets/images/pluscircle.svg";

const Orders: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-6 pt-6">
        {/* Search bar and Add button */}
        <div className="w-full max-w-md flex items-center justify-between px-4 mb-8">
          <div className="relative w-full flex items-center">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 text-sm w-full rounded-3xl text-[#8F99A9] h-10 border-0 bg-[#FFFFFF] focus:ring-1 focus:ring-gray-100 focus:outline-none focus:shadow-none"
            />
            {/* Search Icon */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <img
                src={search}
                alt="Search Icon"
                className="w-4 h-4 text-gray-500"
              />
            </div>
          </div>
          <Link to="/">
            <img className="m-2" src={plus} alt="" />
          </Link>
        </div>

        {/* Main illustration and text */}
        <div className="flex flex-col items-center">
          {/* Illustration Image */}
          <img
            src={orders}
            alt="Illustration"
            className=" w-auto object-cover mb-4"
          />

          {/* No Return Customers Text */}
          <span className="text-gray-500 text-[14px] font-[700]">
            No Orders
          </span>
        </div>

        {/* Orders */}
    <div className="">
    <div className="bg-gradient-to-r w-80  my-5 p-5 justify-between from-[#E3E6D5] to-[#F7E7CE] rounded-lg">
          <div className="grid grid-cols-2 justify-between">
            <div>
              <h1 className="text-[14px] font-[400] text-[#303F58]">Customer</h1>
              <h1 className="text-[16px] font-[700] text-[#303F58]">Hameed</h1>
            </div>
            <div className="text-end">
                <Link to={"/vieworders"}>
              <button className="bg-[#FEFDFA] px-3 py-0.5 rounded-lg border border-[#565148]">View</button>
              </Link>
            </div>
          </div>
          <div className="mt-1">
            <h1 className="text-[14px] font-[400] text-[#303F58]">Item</h1>
            <h1 className="text-[14px] font-[500] text-[#303F58]">Item 1</h1>
            <h1></h1>
          </div>
          <div className="bg-[#FFFFFF] py-1.5 mt-2 px-2 rounded-md">
        
                <h1 className="text-[14px] font-[400] text-[#303F58]">Payment Mode | <span className="text-[14px] font-[600] text-[#303F58]">Cash</span></h1>
            
          </div>
        </div>
    </div>
        
      </div>
    </div>
  );
};

export default Orders;
