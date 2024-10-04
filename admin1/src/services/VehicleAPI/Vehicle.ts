import { BASEURL } from "../Baseurl";
import { commonAPI } from "../CommonApi";


interface ApiResponse {
    message?: string;
    data?: any;
  }
  
export const addVehicleAPI = async (vehicleData: FormData): Promise<ApiResponse> => {
    try {
      const response = await commonAPI('POST', `${BASEURL}/api/addVehicle`, vehicleData, {
        // No need to specify Content-Type for FormData
      });
  
      return response; // Ensure response matches the expected ApiResponse structure
    } catch (error: any) {
      console.error("Error adding vehicle:", error); // Log the full error for debugging
      return { message: error.message || "An unexpected error occurred." }; // Fallback error message
    }
  };
  