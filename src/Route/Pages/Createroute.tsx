import active from "../../assets/images/shopping-route.svg";
import total from "../../assets/images/processing.svg";
import totsub from "../../assets/images/packing_route.svg";
import publicc from "../../assets/images/public-service route.svg";
import printer from "../../assets/images/printer.svg";
import vector from "../../assets/images/Vector.svg";
import trash from "../../assets/images/trash.svg";
import split from "../../assets/images/list-filter.svg";
import plus from "../../assets/circle-plus.svg";
import eye from "../../assets/images/eye.svg";
import dot from "../../assets/ellipsis-vertical.svg";
import { useNavigate } from "react-router-dom";
import { getRoutesAPI } from "../../services/RouteAPI/RouteAPI";
import { useEffect, useState } from "react";


interface Route {
  id: string;
  mainRoute: string;
  routeCode: string;
  subRoute: string;
  description: string;
}

const CreateRoute: React.FC = () => {

  const [routesList, setRouteList] = useState<Route[]>([]); // Full route list
  const [filteredRouteList, setFilteredRouteList] = useState<Route[]>([]); // Filtered route list

  console.log(filteredRouteList);
  

  // Fetch staff data on component mount
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await getRoutesAPI();
        console.log("Full API Response:", response); // Check the response
        setRouteList(response); // Store full staff list
        setFilteredRouteList(response) // Initially, display all route
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };

    fetchStaff();
  }, []);

  useEffect(() => {
    console.log("Updated route list:", routesList);
  }, [routesList]);

  const navigate = useNavigate();

  const handlecreate = (): void => {
    navigate("/route/createmainroute");
  };

  const handleView = (routeId: string): void => {
    navigate(`/route/viewroute/${routeId}`);
  };

  

  return (
    <div className="flex min-h-screen w-full">
      <div>
        <div className="p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-[#303F58] text-[20px] font-bold">
                Create Route
              </h3>
              <p className="text-[#4B5C79]">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handlecreate}
                className="flex justify-between items-center gap-2 bg-[#820000] text-white  px-5 py-2 rounded-md"
              >
                <img src={plus} alt="" />
                <p>Add New </p>
              </button>

              <button className="ms-2 me-4">
                <img src={dot} alt="" />
              </button>
            </div>
          </div>
          {/* Cards Section */}
          <div className="grid grid-cols-4 gap-4 my-6">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={active} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">
                Active Route
              </div>
              <p className="text-[#4B5C79] w-[400] text-[12]">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p>
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">
                120
              </div>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={total} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">
                Total Route
              </div>
              <p className="text-[#4B5C79] w-[400] text-[12]">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p>
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">
                10
              </div>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={totsub} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">
                Total Sub Route
              </div>
              <p className="text-[#4B5C79] w-[400] text-[12]">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p>
              <div className="w-[700px] text-[#820000] font-bold  leading-normal text-[18px] mt-3">
                20
              </div>
            </div>

            <div className="p-4 bg-white shadow-md rounded-lg">
              <img src={publicc} alt="" />
              <div className="w-[700px] font-bold leading-normal text-[#303F58] text-[17px] mt-2">
                Total Customer
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
                placeholder="Search Rote"
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
                    Route
                  </th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">
                    Route Code
                  </th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">
                    Sub Route
                  </th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">
                    Description
                  </th>
                  <th className="p-2 text-[12px] text-center text-[#303F58]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {routesList.map((route, index) => (
                  <tr className="border-b" key={route.id}>
                    <td className="p-2 text-[14px] text-center text-[#4B5C79]">
                      {index + 1}
                    </td>
                    <td className="p-2 text-[14px] text-center text-[#4B5C79]">
                      {route.mainRoute}
                    </td>
                    <td className="p-2 text-[14px] text-center text-[#4B5C79]">
                      {route.routeCode}
                    </td>
                    <td className="p-2 text-[14px] text-center text-[#4B5C79]">
                      {route.subRoute}
                    </td>
                    <td className="p-2 text-[14px] text-center text-[#4B5C79]">
                      {route.description}
                    </td>
                    <td className="p-2 text-[14px] text-center text-[#4B5C79]">
                      <button
                        onClick={() => handleView(route.id)}
                        className="text-blue-500"
                      >
                        <img src={eye} alt="View" />
                      </button>
                      <button className="text-red-500 ml-2">
                        <img src={vector} alt="Edit" />
                      </button>
                      <button className="text-red-500 ml-2">
                        <img src={trash} alt="Delete" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoute;
