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