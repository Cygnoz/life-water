import { BASEURL } from "./Baseurl";
import { commonAPI } from "./CommonApi";

interface ApiResponse {
  message?: string;
  data?: any;
}

export const addStaffAPI = async (staffData: FormData): Promise<ApiResponse> => {
  try {
    const response = await commonAPI('POST', `${BASEURL}/api/addstaff`, staffData, {
      // No need to specify Content-Type for FormData
    });

    return response; // Ensure response matches the expected ApiResponse structure
  } catch (error: any) {
    console.error("Error adding staff:", error); // Log the full error for debugging
    return { message: error.message || "An unexpected error occurred." }; // Fallback error message
  }
};


export const getAllStaffsAPI = async (): Promise<ApiResponse> => {
  try {
    const response = await commonAPI('GET', `${BASEURL}/api/getallstaffs`, null, {
      // No need to specify any headers for GET requests
    });

    return response; // Ensure the response matches the expected ApiResponse structure
  } catch (error: any) {
    console.error("Error fetching staff data:", error); // Log the full error for debugging
    return { message: error.message || "An unexpected error occurred." }; // Fallback error message
  }
};

export const getStaffByIdAPI = async (id: string): Promise<ApiResponse> => {
  try {
    // Use `id` instead of `_id`
    const response = await commonAPI('GET', `${BASEURL}/api/staff/${id}`, null, {
      // No need to specify any headers for GET requests
    });

    return response; // Ensure the response matches the expected ApiResponse structure
  } catch (error: any) {
    console.error("Error fetching staff data:", error); // Log the full error for debugging
    return { message: error.message || "An unexpected error occurred." }; // Fallback error message
  }
}


