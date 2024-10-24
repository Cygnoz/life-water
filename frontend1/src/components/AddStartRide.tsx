import React, { useEffect, useState } from 'react';
import profile from '../assets/images/profile1.png';
import { useNavigate } from 'react-router-dom';
import { addActiveRouteAPI, getAllStaffsAPI, getSubRoutesAPI, getVehicleAPI } from '../services/StartRide/StartRide';

interface Route {
  _id: string;
  subRoute: string; // Assuming sub-routes have a 'subRoute' property
  mainRoute: string;
}

interface Staff {
  designation: string;
  _id: string;
  firstname: string;
  lastname: string;
}

interface Vehicle {
  _id: string;
  vehicleNo: string; // Assuming vehicle objects have a 'vehicleNo' property
}

const AddStartRide: React.FC = () => {
  const [routesList, setRouteList] = useState<Route[]>([]);
  const [selectedSubRoute, setSelectedSubRoute] = useState<string>('');
  const [displayedMainRoute, setDisplayedMainRoute] = useState<string>('');
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const [vehicleList, setVehicleList] = useState<Vehicle[]>([]);
  const [openingStock, setOpeningStock] = useState<number | ''>('');
  const [loadedStock, setLoadedStock] = useState<number | ''>('');
  const [totalStock, setTotalStock] = useState<number | ''>('');
  const [startingKm, setStartingKm] = useState<number | ''>('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubRoutes = async () => {
      try {
        const response = await getSubRoutesAPI();
        setRouteList(response);
      } catch (error) {
        console.error('Error fetching sub-route data:', error);
      }
    };

    fetchSubRoutes();
  }, []);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await getAllStaffsAPI();
        setStaffList(response as any);
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };

    fetchStaff();
  }, []);

  const handleSubRouteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    setSelectedSubRoute(selectedId);
    const selectedRoute = routesList.find(route => route.subRoute === selectedId);
    if (selectedRoute) {
      setDisplayedMainRoute(selectedRoute?.mainRoute);
    } else {
      setDisplayedMainRoute('');
    }
  };

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const apiResponse = await getVehicleAPI();
        setVehicleList(apiResponse);
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
        setVehicleList([]);
      }
    };

    fetchVehicle();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
  
    const newActiveRoute = {
      mainRoute: displayedMainRoute,
      subRoute: selectedSubRoute,
      helper: document.getElementById('helper')?.value,
      driver: document.getElementById('driver')?.value,
      vehicleNo: document.getElementById('vehicle')?.value,
      openingStock,
      loadedStock,
      totalStock,
      startingKm,
    };
  
    try {
      const data = await addActiveRouteAPI(newActiveRoute);
      console.log('ActiveRoute created successfully:', data);
      navigate('/home'); // Navigate on success
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the ActiveRoute.');
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg mt-3">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-md p-6">
        <header className="flex justify-end items-center mb-6">
          <div className="flex items-center space-x-2">
            <div>
              <h2 className="text-lg font-semibold">Hello, User</h2>
              <p className="text-sm text-gray-500">Welcome</p>
              <p className="text-xs text-green-500">Last login in: 0 min</p>
            </div>
            <img src={profile} alt="User Avatar" className="w-10 h-10 rounded-full" />
          </div>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="sub-route" className="text-sm font-medium text-gray-700">
              Sub Route
            </label>
            <select
              id="sub-route"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={selectedSubRoute}
              onChange={handleSubRouteChange}
            >
              <option value="">Select Sub Route</option>
              {routesList.map((route) => (
                <option key={route._id} value={route.subRoute}>
                  {route?.subRoute}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="main-route" className="text-sm font-medium text-gray-700">
              Main Route
            </label>
            <input
              type="text"
              id="mainRoute"
              value={displayedMainRoute}
              readOnly // Prevent user from editing this field
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="helper" className="text-sm font-medium text-gray-700">
              Helper
            </label>
            <select id="helper" className="w-full p-2 border border-gray-300 rounded-lg">
              <option value="">Select Helper</option>
              {staffList
                .filter((staff) => staff.designation === 'Helper')
                .map((staff) => (
                  <option key={staff._id} value={staff.firstname}>
                    {staff.firstname} {staff.lastname}
                  </option>
                ))}
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="driver" className="text-sm font-medium text-gray-700">
              Driver
            </label>
            <select id="driver" className="w-full p-2 border border-gray-300 rounded-lg">
              <option value="">Select Driver</option>
              {staffList
                .filter((staff) => staff.designation === 'Driver')
                .map((staff) => (
                  <option key={staff._id} value={staff.firstname}>
                    {staff.firstname} {staff.lastname}
                  </option>
                ))}
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="vehicle" className="text-sm font-medium text-gray-700">
              Select Vehicle Number
            </label>
            <select id="vehicle" className="w-full p-2 border border-gray-300 rounded-lg">
              <option value="">Select Vehicle No</option>
              {vehicleList.map((vehicle) => (
                <option key={vehicle._id} value={vehicle.vehicleNo}>
                  {vehicle.vehicleNo}
                </option>
              ))}
            </select>
          </div>

          {/* Stock Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="opening-stock" className="text-sm font-medium text-gray-700">
                Opening Stock
              </label>
              <input
                type="number"
                id="opening-stock"
                value={openingStock}
                onChange={(e) => setOpeningStock(Number(e.target.value) || '')}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="loaded-stock" className="text-sm font-medium text-gray-700">
                Loaded Stock
              </label>
              <input
                type="number"
                id="loaded-stock"
                value={loadedStock}
                onChange={(e) => setLoadedStock(Number(e.target.value) || '')}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Stock Hand and KM */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="total-stock" className="text-sm font-medium text-gray-700">
                Total stock in Hand
              </label>
              <input
                type="number"
                id="total-stock"
                value={totalStock}
                onChange={(e) => setTotalStock(Number(e.target.value) || '')}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="started-km" className="text-sm font-medium text-gray-700">
                Starting KM
              </label>
              <input
                type="number"
                id="startingKm"
                value={startingKm}
                onChange={(e) => setStartingKm(Number(e.target.value) || '')}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full max-w-xs bg-[#820000] text-white py-2 rounded-lg shadow hover:bg-red-800 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStartRide;
