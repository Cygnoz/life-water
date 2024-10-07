import axios from 'axios';
import { BASEURL } from '../Baseurl';

export const addRouteAPI = async (formData: any) => {
  try {
    const response = await axios.post(`${BASEURL}/api/addRoute`, formData, {
      headers: {
        'Content-Type': 'application/json'  // Ensure correct content type
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error adding route:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Error adding route');
  }
};
