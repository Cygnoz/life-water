
import customer from '../assets/images/OBJECT.png';
import { Link } from 'react-router-dom';

const Returncustomer: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-6 pt-6">
        {/* Search bar and Add button */}
        <div className="w-full max-w-md flex items-center justify-between px-4 mb-8">
          <div className="flex items-center w-full bg-white rounded-full shadow-md px-4 py-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent outline-none text-sm text-gray-600"
              // You can optionally add typing for event handlers if needed
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
            />
            <i className="fas fa-search text-gray-500"></i>
          </div>
          <Link to="/addreturncustomer">
            <button className="ml-3 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
              <i className="fas fa-plus"></i>
            </button>
          </Link>
        </div>

        {/* Main illustration and text */}
        <div className="flex flex-col items-center">
          {/* Illustration Image */}
          <img src={customer} alt="Illustration" className="w-64 h-64 object-cover mb-4" />

          {/* No Return Customers Text */}
          <span className="text-gray-500 text-sm">No Return Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Returncustomer;
