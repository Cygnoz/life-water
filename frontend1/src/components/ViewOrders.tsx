
    import search from "../assets/images/search (2).svg";

    const ViewOrder: React.FC = () => {
      return (
    <div className="bg-[#F5F6FA] pb-72">
        {/* Search bar and Add button */}
        <div className="w-full max-w-md pt-5 flex items-center justify-between px-4 mb-8">
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
          
        </div>
    <div className="">
    <div className="bg-gradient-to-r w-80   my-5 p-5 mx-5 justify-between from-[#E3E6D5] to-[#F7E7CE] rounded-lg">
          <div className="grid grid-cols-2 justify-between">
            <div>
              <h1 className="text-[14px] font-[400] text-[#303F58]">Customer</h1>
              <h1 className="text-[16px] font-[700] text-[#303F58]">Hameed</h1>
            </div>
            <div className="text-end">
                <h1 className="text-[14px] font-[400] text-[#303F58]">Date : 09/07/15</h1>
            </div>
          </div>
          <div className="grid grid-cols-2">
          <div className="mt-1">
            <h1 className="text-[14px] font-[400] text-[#303F58]">Order Number</h1>
            <h1 className="text-[14px] font-[540000] text-[#303F58]">Item 1 </h1>
            <h1 className="text-[14px] font-[400] text-[#303F58]">Item 2</h1>
            <h1 className="text-[14px] font-[540000] text-[#303F58]">Rate Per Item</h1>

            <h1 className="text-[14px] font-[400] text-[#303F58]">Return Empty Bottle</h1>


          </div>
            <div>
            <h1 className="text-[14px] font-[400] text-[#303F58]">: 001</h1>
            <h1 className="text-[14px] font-[400] text-[#303F58]">: 001 </h1>
            <h1 className="text-[14px] font-[400] text-[#303F58]">: 001</h1>
            <h1 className="text-[14px] font-[400] text-[#303F58]">: 001</h1>

            <h1 className="text-[14px] font-[400] text-[#303F58]">: 001</h1>


            </div>
          </div>
          
          <div className="bg-[#FFFFFF] py-1.5 mt-2 px-2 rounded-md">
        
                <h1 className="text-[14px] font-[400] text-[#303F58]">Payment Mode | <span className="text-[14px] font-[600] text-[#303F58]">Cash</span></h1>
            
          </div>
        </div>
    </div>
    </div>
      );
    };
     
    export default ViewOrder;