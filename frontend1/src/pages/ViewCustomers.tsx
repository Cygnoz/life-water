import React from 'react';
import { Link } from 'react-router-dom';
import phone from '../assets/images/phone.png'
import search from '../assets/images/search (2).svg';
import plus from '../assets/images/pluscircle.svg';
import customer from '../assets/images/customerss.png'
interface Contact {
  id: number;
  name: string;
  message: string;
  dueAmount: string;
  imageUrl: string;
}

const contacts: Contact[] = [
  {
    id: 1,
    name: 'Sanskrit',
    message: 'Lorem ipsum dolor sit amet Due',
    dueAmount: 'AED0',
    imageUrl: `${phone}`,
  },
  {
    id: 2,
    name: 'Sanskrit',
    message: 'Lorem ipsum dolor sit amet Due',
    dueAmount: 'AED0',
    imageUrl: `${phone}`,
  },
  {
    id: 3,
    name: 'Sanskrit',
    message: 'Lorem ipsum dolor sit amet Due',
    dueAmount: 'AED0',
    imageUrl: `${phone}`,
  },
];

const ViewCustomers: React.FC = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
       <div className="w-full max-w-md flex items-center justify-between px-4 mb-8">
      <div className="relative w-full flex items-center">
        
  {/* Search Input */}
<input
    type="text"
    placeholder="Search"
    className="pl-10 pr-4 text-sm w-full rounded-xl text-[#8F99A9] h-10 border-0 bg-[#FFFFFF] focus:ring-1 focus:ring-gray-100 focus:outline-none focus:shadow-none"
  />
  {/* Search Icon */}
<div className="absolute left-3 top-1/2 transform -translate-y-1/2">
<img src={search} alt="Search Icon" className="w-4 h-4 text-gray-500" />
</div>
</div>
        <Link to="/addcustomers">
            <img className='m-2' src={plus} alt="" width={30}/>
        </Link>
      </div>
      
      <div>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center p-4 mb-2 bg-white rounded-xl shadow hover:bg-gray-300"
          >
            
            <div className=" flex-1">
              <div className="flex gap-4">
              <img src={customer} alt="ddd" width={60}  />
              <div>
              <div className="font-bold">{contact.name}</div>
              <div className="text-sm text-gray-600">{contact.message}</div>
              <div className="text-sm">
              </div>
                Due Amount - <span className='text-red-700'>{contact.dueAmount}</span>
              </div>
              </div>
            </div>
            <button className="ml-4 p-3 bg-green-200 text-white rounded-full">
            <img
              src={contact.imageUrl}
              alt=""
              className="w-5 h-5 rounded-full"
            />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCustomers;
