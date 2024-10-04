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

export const getVehicleAPI = async (): Promise<ApiResponse> => {
    try {
        const response = await commonAPI('GET', `${BASEURL}/api/viewVehicles`, null);
        return response; // Ensure the response matches the expected ApiResponse structure
    } catch (error: any) {
        console.error("Error fetching vehicle data:", error);
        return { message: error.message || "An unexpected error occurred." }; // Fallback error message
    }
};


export const deleteVehicleByIdAPI = async (id: string) => {
    try {
      const response = await fetch(`${BASEURL}/api/deletevehicle/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete staff');
      }
  
      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error('Error deleting staff:', error);
      throw new Error(error.message || 'An unexpected error occurred.');
    }
  };