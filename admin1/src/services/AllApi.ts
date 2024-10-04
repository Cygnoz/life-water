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

export const deleteStaffByIdAPI = async (id: string) => {
  try {
    const response = await fetch(`${BASEURL}/api/staff/${id}`, {
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

import axios from 'axios';

// Update staff by ID
export const updateStaffAPI = async (id: string, updatedStaffData: any) => {
  try {
    const response = await axios.put(`${BASEURL}/api/staff/${id}`, updatedStaffData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update staff');
  }
};




