import axios from 'axios';
import { BASEURL } from '../Baseurl';

// Function to add a route
export const addRouteAPI = async (formData: any) => {
  try {
    const response = await axios.post(`${BASEURL}/api/addRoute`, formData, {
      headers: {
        'Content-Type': 'application/json'  // Ensure correct content type
      }
    });
    return response.data;
  } catch (error:any) {
    console.error('Error adding route:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Error adding route');
  }
};

// Function to get all routes
export const getRoutesAPI = async () => {
  try {
    const response = await axios.get(`${BASEURL}/api/getAllRoutes`, {
      headers: {
        'Content-Type': 'application/json'  // Ensure correct content type
      }
    });
    return response.data;
  } catch (error:any) {
    console.error('Error fetching routes:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Error fetching routes');
  }
};

// Function to delete a route
export const deleteRouteAPI = async (id: string) => {
  try {
    const response = await fetch(`${BASEURL}/api/delRoute/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete Route');
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('Error deleting Route:', error);
    throw new Error(error.message || 'An unexpected error occurred.');
  }
};

// Function to update a route
export const updateRouteAPI = async (id: string, updateData: any) => {
  try {
    const response = await axios.put(`${BASEURL}/api/updateRoute/${id}`, updateData, {
      headers: {
        'Content-Type': 'application/json',  // Ensure correct content type
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('Error updating route:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Error updating route');
  }
};

// Function to get a route by ID

export const getRouteByIdAPI = async (id: string) => {
  try {
    const response = await axios.get(`${BASEURL}/api/getroute/${id}`);
    return response.data; // Assuming your server returns data in this format
  } catch (error) {
    console.error('Error fetching route by ID:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Error fetching route');
  }
};
