
import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import trash from '../assets/images/trash.svg'
import circleplus from '../assets/images/Icon.svg'
import pen from '../assets/images/pen.svg'
import printer from '../assets/images/printer.svg'
import back from '../assets/images/backbutton.svg'
import { Link } from 'react-router-dom';
import cimage from '../assets/images/Ellipse 43.svg'
import icondown from '../assets/images/Icon down.svg'
import search from '../assets/images/search.svg'
import { getAllCustomersAPI } from '../services/CustomerAPI/Customer';
import { BASEURL } from '../services/Baseurl';
import { getAllStaffsAPI } from '../services/AllApi';
import { getItemsAPI } from '../services/StockAPI/StockAPI';



interface Item {
  product: string;
  quantity: number;
  rate: number;
  amount: number;
}

interface OrderDetails {
  customer: string;
  salesman: string;
  date: string;
  orderNumber: string;
  paymentMode: string;
  items: Item[];
  notes: string;
  terms: string;
}

const NewOrder: React.FC = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    customer: '',
    salesman: '',
    date: '',
    orderNumber: 'IN-3748',
    paymentMode: '',
    items: [{ product: '', quantity: 0, rate: 0, amount: 0 }],
    notes: '',
    terms: '',
  });


  // Update order details
  const updateOrder = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  // Add a new item row
  const addItem = () => {
    setOrderDetails({
      ...orderDetails,
      items: [...orderDetails.items, { product: '', quantity: 0, rate: 0, amount: 0 }],
    });
  };

  const [openDropdownIndex, setOpenDropdownIndex] = useState<string | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);
 
  const toggleDropdown = (key: string | null) => {
    setOpenDropdownIndex(key === openDropdownIndex ? null : key);
  };
 
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenDropdownIndex(null);
    }
  };
 
  useEffect(() => {
    if (openDropdownIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
 
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdownIndex]);


  interface Customer{
    companyName:string
    firstName: string
    lastName:string
    logo:string
    mobileNo:string
  }
   
// get customer
const [customers, setCustomers] = useState<any[]>([]);  // State for customer data
// const [searchTerm, setSearchTerm] = useState('');  // State for search functionality
const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

const defaultImage = "https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png"


// Fetch customer data on component mount
useEffect(() => {
  const fetchCustomers = async () => {
    try {
      const response = await getAllCustomersAPI();
      setCustomers(response.data); // Store customers in state
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  fetchCustomers();
}, []);

const handleCustomerSelection = (customer: Customer) => { setSelectedCustomer(customer); toggleDropdown(""); // Close dropdown after selection
  };

  // adding row in tables
  const [rows, setRows] = useState([
    { product: <img src={icondown} alt="" />, quantity: 0, rate: 0.0, amount: 0.0 },
  ]);
 
    // Function to add a new row
    const addNewRow = () => {
      const newRow = { product: <img src={icondown} alt="" />, quantity: 0, rate: 0.0, amount: 0.0 };
      setRows([...rows, newRow]);
    };
 
    // delete a row
    const deleteRow = (index: number) => {
      setRows(rows.filter((_, rowIndex) => rowIndex !== index));
    };

    interface Staff {
      firstname: string
      lastname: string
      designation: string 
      profile :string// Add other fields as per your staff object structure
    }
    const [staffList, setStaffList] = useState<Staff[]>([])
    const [selectedSalesman, setSelectedSalesman] = useState<Staff | null>(null);
  const [filteredStaffList, setFilteredStaffList] = useState<Staff[]>([]) // Fix here

    
  // Fetch staff data on component mount
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await getAllStaffsAPI()
        console.log("Full API Response:", response) // Check the response
        setStaffList(response as any) // Store full staff list
        setFilteredStaffList(response as any) // Initially, display all staff
      } catch (error) {
        console.error("Error fetching staff data:", error)
      }
    }

    fetchStaff()
  }, [])

  
const handleSalesmanSelection = (salesman: Staff) => {
  setSelectedSalesman(salesman);
  toggleDropdown(""); // Close dropdown after selection
};



const [items, setItems] = useState<any[]>([]); // State to store fetched items
const [loading, setLoading] = useState(true); // State to manage loading state

useEffect(() => {
  // Fetch items when the component mounts
  const fetchItems = async () => {
    try {
      const data = await getItemsAPI();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', (error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  console.log(items);
  

  fetchItems();
}, []);


// const defaultImage = "https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png"
  return (
    <>
      <div className='flex bg-gray-50'>

      <div className="max-h-screen w-[70%]">
       

       {/* Main content */}
       <div className="flex-1 min-h-screen">
       <div className="flex gap-3 items-center w-full max-w-8xl ms-1 mt-1">
        <Link to="/orders">
          <img className="bg-gray-200 rounded-full p-2" src={back} alt="Back" />
        </Link>
        <h3 className="text-[20px] text-[#303F58] font-bold ms-1">New order</h3>
      </div>
         <div className="container mx-auto p-4">
           <div className="bg-white p-4 -mt-2 -ms-2 rounded-lg shadow-md">
             {/* Customer and Salesman Selection */}
             <div className="grid grid-cols-2 gap-4 mb-4">
             <div className='mb-2'>
      <label className="block mb-2 font-normal text-[#303F58] text-[14px]">Select Customer</label>
      <div className="relative w-full" onClick={() => toggleDropdown("customer")}>
        <div className="items-center flex appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <span className='font-normal'>
          {selectedCustomer
            ? `${selectedCustomer.firstName} ${selectedCustomer.lastName}`
            : "Select Customer"}
          </span>
        </div>

        <img className='ms-[435px] -mt-6 w-[11px] h-[11px] text-[#495160]' src={icondown} alt="" />
      </div>

      {openDropdownIndex === "customer" && (
        <div
          ref={dropdownRef}
          className="absolute z-10 bg-white rounded-md mt-1 p-2 w-[326px] space-y-1"
        >
          {/* Search input */}
          <div className="grid grid-col-12 h-12 items-center cursor-pointer border border-slate-400 rounded-lg">
            <input
              className="pl-9 text-sm w-[100%] rounded-md text-start text-[#818894] h-10 p-2 border-0 focus:ring-1 focus:ring-gray-400"
              placeholder="Search Customer"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
            />
            <img className='ms-3 -mt-12 w-[15px] h-[15px]' src={search} alt="" />
          </div>

          {/* Filtered customer list */}
          {customers.map(customer => (
            <div key={customer._id}
            onClick={()=>handleCustomerSelection(customer)}
            className="grid grid-cols-12 gap-1 p-2 bg-[#FDF8F0] cursor-pointer border border-slate-400 rounded-lg bg-lightPink">
              <div className="col-span-2 flex items-center justify-center">
                <img src={customer.logo ? `${BASEURL}/uploads/${customer.logo}` : defaultImage} alt={`${customer.firstName} ${customer.lastName}`} />
              </div>
              <div className="col-span-10 flex">
                <div>
                  <p className="font-semibold text-[14px] text-[#0B1320]">{customer.companyName}</p>
                  <p className="text-[12px] font-normal text-[#495160]">
                    Phone: {customer.mobileNo}
                  </p>
                </div>
                <div className="ms-auto text-2xl cursor-pointer relative -mt-2 pe-2">
                  &times;
                </div>
              </div>
            </div>
          ))}

          {/* Add new customer option */}
         <Link to='/addcustomer'>
         <div className="bg-[#FFFFFF] grid grid-col-12 h-12 items-center cursor-pointer border border-slate-400 rounded-lg">
            <img className='mt-2 ms-3' src={circleplus} alt="" />
            <span className='text-[#820000] ms-8 -mt-10'>Add New Customer</span>
          </div>
         </Link>
        </div>
      )}
    </div>
               <div>
    <label className="block mb-2 font-normal text-[#303F58] text-[14px]">
      Select Salesman
    </label>
    <div className="relative w-full" onClick={() => toggleDropdown("salesman")}>
      <div className="items-center flex appearance-none w-full h-9 text-zinc-400 bg-white border border-inputBorder text-sm pl-2 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <span className="font-normal">
          {selectedSalesman
            ? `${selectedSalesman.firstname} ${selectedSalesman.lastname}`
            : "Select Salesman"}
        </span>
      </div>
      <img className="ms-[435px] -mt-6 w-[11px] h-[11px] text-[#495160]" src={icondown} alt="" />
    </div>

    {openDropdownIndex === "salesman" && (
      <div ref={dropdownRef} className="absolute z-10 bg-white rounded-md mt-1 p-2 w-[326px] h-auto space-y-1">
        {/* Search Bar */}
        <div className="grid grid-col-12 h-12 items-center cursor-pointer border border-slate-400 rounded-lg">
          <input
            className="pl-9 text-sm w-[100%] rounded-md text-start text-[#818894] h-10 p-2 border-0 focus:ring-1 focus:ring-gray-400"
            style={{
              backgroundColor: "rgba(#818894)",
              outline: "none",
              boxShadow: "none",
            }}
            placeholder="Search Salesman"
          />
          <img className="ms-3 -mt-12 w-[15px] h-[15px]" src={search} alt="" />
        </div>

        {/* Map through the salesman list */}
        {filteredStaffList.map((staff, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-1 p-2 bg-[#FDF8F0] cursor-pointer border border-slate-400 rounded-lg bg-lightPink"
            onClick={() => handleSalesmanSelection(staff)}
          >
            <div className="col-span-2 flex items-center justify-center">
              {/* Add a placeholder image or staff image */}
              <img src={staff.profile ? `${BASEURL}/uploads/${staff.profile}` : defaultImage} alt={`${staff.firstname} ${staff.lastname}`} />
            </div>
            <div className="col-span-10 flex">
              <div>
                <p className="font-semibold text-[14px] text-[#0B1320]">
                  {staff.firstname} {staff.lastname}
                </p>
                <p className="text-[12px] font-normal text-[#495160]">
                  Designation: {staff.designation}
                </p>
              </div>
              <div className="ms-auto text-2xl cursor-pointer relative -mt-2 pe-2">
                &times;
              </div>
            </div>
          </div>
        ))}

        {/* Add New Salesman Link */}
        <Link to="/addstaff">
          <div className="bg-[#FFFFFF] grid grid-col-12 h-12 items-center cursor-pointer border border-slate-400 rounded-lg">
            <img className="mt-2 ms-3" src={circleplus} alt="" />
            <span className="text-[#820000] ms-8 -mt-10">Add New Salesman</span>
          </div>
        </Link>
      </div>
    )}
  </div>
             </div>

             {/* Date and Order Number */}
             <div className="grid grid-cols-2 gap-4 mb-4">
               <div>
                 <label className="block mb-2 font-normal text-[#303F58] text-[14px]">Date</label>
                 <input
                   type="date"
                   name="date"
                   value={orderDetails.date}
                   onChange={updateOrder}
                   className="w-full p-2 border rounded-md  text-[#8F99A9] text-[14px] font-normal"
                 />
               </div>
               <div>
                 <label className="block mb-2 font-normal text-[#303F58] text-[14px]">Order Number</label>
                 <input
                   type="text"
                   name="orderNumber"
                   value={orderDetails.orderNumber}
                   className="w-full p-2 border rounded-md  text-[#8F99A9] text-[14px] font-normal"
                 />
               </div>
             </div>

             
      {/* Payment Mode Dropdown */}
      <div className="mb-4">
        <label className="block mb-2 font-normal text-[#303F58] text-[14px]">Payment Mode</label>
        <select
          name="paymentMode"
          value={orderDetails.paymentMode}
          onChange={updateOrder}
          className="w-full p-2 border rounded-md text-[#8F99A9] text-[14px] font-normal"
        >
          <option value="" className='text-blue-200 font-normal'>Select payment mode</option>
          <option value="cash" className='text-gray-800 font-normal'>Cash</option>
          <option value="credit" className='text-gray-800 font-normal'>Credit</option>
          <option value="foc" className='text-gray-800 font-normal'>FOC</option>
          {/* Add more payment options as needed */}
        </select>
      </div>


             {/* Add Item Section */}
             <div className="mb-4">
               <h2 className="font-semibold mb-2 text-[#202224] text-[16px]">Add Item</h2>
               {/* {orderDetails.items.map((item, index) => (
                 <div key={index} className="grid grid-cols-5 gap-2 mb-2">
                   <input
                     type="text"
                     placeholder="Product"
                     value={item.product}
                     onChange={(e) => {
                       const updatedItems = [...orderDetails.items];
                       updatedItems[index].product = e.target.value;
                       setOrderDetails({ ...orderDetails, items: updatedItems });
                     }}
                     className="col-span-2 p-2 border rounded-md"
                   />
                   <input
                     type="number"
                     placeholder="Quantity"
                     value={item.quantity}
                     onChange={(e) => {
                       const updatedItems = [...orderDetails.items];
                       updatedItems[index].quantity = parseInt(e.target.value) || 0;
                       setOrderDetails({ ...orderDetails, items: updatedItems });
                     }}
                     className="p-2 border rounded-md"
                   />
                   <input
                     type="number"
                     placeholder="Rate"
                     value={item.rate}
                     onChange={(e) => {
                       const updatedItems = [...orderDetails.items];
                       updatedItems[index].rate = parseFloat(e.target.value) || 0;
                       setOrderDetails({ ...orderDetails, items: updatedItems });
                     }}
                     className="p-2 border rounded-md"
                   />
                   <input
                     type="number"
                     placeholder="Amount"
                     value={item.quantity * item.rate}
                     readOnly
                     className="p-2 border rounded-md bg-gray-100"
                   />
                 </div>
               ))} */}

<table className="w-full text-left">
              <thead className=' bg-[#fdf8f0]'>
                <tr className="border-b">
                  <th className="p-2 text-[#495160] text-[12px] text-center font-medium">Product</th>
                  <th className="p-2 text-[#495160] text-[12px] text-center font-medium">Quantity</th>
                  <th className="p-2 text-[#495160] text-[12px] text-center font-medium">Rate</th>
                  <th className="p-2 text-[#495160] text-[12px] text-center font-medium">Amount</th>
                  <th className="p-2 text-[#495160] text-[12px] text-center font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
  {loading ? ( // Check if loading
    <tr>
      <td colSpan={5} className="text-center p-4">Loading items...</td>
    </tr>
  ) : (
    items.map((item, index) => ( // Map over the fetched items
      <tr className="border-b" key={index}>
        <td className="p-2 text-center font-normal">
          <label className='text-[#8F99A9] text-[14px]' onClick={() => toggleDropdown("product")}>
            {item.productName || "Select Product"} {/* Display the product name */}
            <img className='w-[11px] h-[11px] text-[#495160] -mt-4' onClick={() => toggleDropdown("product")} src={icondown} alt="" />
          </label>

          {openDropdownIndex === "product" && (
  <div
    ref={dropdownRef}
    className="absolute z-10 bg-white rounded-md mt-1 p-2 w-[326px] h-auto space-y-1"
  >
    {/* Render the search bar outside of the loop */}
    <div className="bg-[#F9F7F5] grid grid-col-12 h-12 items-center cursor-pointer border border-slate-400 rounded-lg">
      <input
        className="pl-9 text-sm w-[100%] rounded-md text-start text-[#818894] h-10 p-2 border-0 focus:ring-1 focus:ring-gray-400"
        style={{
          backgroundColor: "rgba(#818894)",
          outline: "none",
          boxShadow: "none",
        }}
        placeholder="Search Order"
      />
      <img className='ms-3 -mt-12 w-[15px] h-[15px]' src={search} alt="" />
    </div>

    {/* Map through items to display in the dropdown */}
    {items.map((item, index) => (
      <div key={item.id} className="grid grid-cols-12 gap-1 p-2 bg-[#FDF8F0] cursor-pointer border border-slate-400 rounded-lg bg-lightPink">
        <div className="col-span-2 flex items-center justify-center">
          <img src={item.image || cimage} alt={item.productName} className="w-10 h-10 rounded-full" />
        </div>
        <div className="col-span-10 flex">
          <div>
            <p className="font-semibold text-[14px] text-[#0B1320] -ms-1">{item.itemName}</p>
            <p className="text-[12px] font-normal text-[#495160] ms-2">
              Retailprice: {item.retailPrice || "N/A"}
            </p>
          </div>
          <div className="ms-auto text-2xl cursor-pointer relative -mt-2 pe-2">
            &times;
          </div>
        </div>
      </div>
    ))}

    <div className="bg-[#FFFFFF] grid grid-col-12 h-12 items-center cursor-pointer border border-slate-400 rounded-lg">
      <img className='mt-2 ms-4' src={circleplus} alt="" />
      <span className='text-[#820000] -mt-10 -ms-32'>Add New Item</span>
    </div>
  </div>
)}

        </td>
        <td className="p-2 text-[#8F99A9] text-[14px] text-center font-normal">{item.quantity}</td>
        <td className="p-2 text-[#8F99A9] text-[14px] text-center font-normal">{item.rate}</td>
        <td className="p-2 text-[#8F99A9] text-[14px] text-center font-normal">{item.amount}</td>
        <td className="p-2 text-center font-normal">
          <button className="text-blue-500 mx-2 items-center">
            <img src={pen} alt="" />
          </button>
          <button className="text-red-500 ml-2" onClick={() => deleteRow(index)}>
            <img src={trash} alt="" />
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>

            </table>
 
 
               <button
                 onClick={addNewRow}
                 className="mt-3 flex text-red-700"
                 type="button"
               >
                 <img className='my-1 mx-1' src={circleplus} alt="" />
                  Add Item
               </button>
 
             </div>

             {/* Notes and Terms */}
             <div className="mb-4">
               <label className="block mb-2 font-normal">Add Notes</label>
               <textarea
                 name="notes"
                 value={orderDetails.notes}
                 onChange={updateOrder}
                 className="w-full p-2 border rounded-md text-[#8F99A9] text-[14px] font-normal"
                 placeholder='Add a Note'
               ></textarea>
             </div>

             <div className="mb-4">
               <label className="block mb-2 font-normal">Terms & Conditions</label>
               <textarea
                 name="terms"
                 value={orderDetails.terms}
                 onChange={updateOrder}
                 className="w-full p-2 border rounded-md text-[#8F99A9] text-[14px] font-normal"
                 placeholder='Add Terms and Condition of Your Business'
               ></textarea>
               
             </div>

             {/* Total and Actions */}

           </div>
         </div>
       </div>
     </div>


     
     <div className="flex w-[30%] h-[250px] p-6 rounded-lg shadow-md mt-12 bg-white">

    <div className='justify-center'>
        <div className='flex my-2'>
          <h3 className='text-[#4B5C79] text-[14px] font-normal'>Untaxed Amount</h3>
          <h1 className='text-[#303F58] text-[18px] font-bold ms-40'>Rs 0.00</h1>
        </div>
        <div className='flex my-1'>
        <h3 className='text-[#4B5C79] text-[14px] font-normal'>SGST</h3>
          <h1 className='text-[#4B5C79] text-[14px] font-normal ms-64'>Rs 0.00</h1>
        </div>
        <div className='flex my-1'>
        <h3 className='text-[#4B5C79] text-[14px] font-normal'>CGST</h3>
          <h1 className='text-[#4B5C79] text-[14px] font-normal ms-64'>Rs 0.00</h1>
        </div>
        <div className='flex my-1'>
        <h3 className='text-[#0B1320] text-[16px] font-bold'>Total</h3>
          <h1 className='text-[#303F58] text-[18px] font-bold ms-60'>Rs 0.00</h1>
        </div>

      <div className='flex ms-24 mt-5'>
      <div>
        <button className="bg-[#FEFDFA] rounded-lg text-[#565148] text-[14px] py-2 px-4 mx-1 mt-2 w-[74px] h-[38px] border border-[#565148]">
          Cancel
        </button>

      </div>
      <div>
        <button className="bg-[#FEFDFA] rounded-lg text-[#565148] text-[14px] py-2 px-4 mx-1 mt-2 flex items-center w-[74px] h-[38px] border border-[#565148]">
        <img src={printer} className='me-1 mt-1 -ms-2'  alt="" />
        Print
        </button>
      </div>
      <div>
        <button className="bg-[#820000] rounded-lg text-[#FEFDF9] text-[14px] py-2 px-5 mx-1 mt-2 w-[108px] h-[38px]">
          Save
       </button>
    </div>

      </div>



    </div>


               
               

             
     </div>
      </div>
    </>
  );
}

export default NewOrder;