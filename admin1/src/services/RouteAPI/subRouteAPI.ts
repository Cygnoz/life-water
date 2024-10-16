import axios from 'axios';
import { BASEURL } from '../Baseurl';


// add sub route

export const addSubRouteAPI = async (formData: any) => {
    try {
      const response = await axios.post(`${BASEURL}/api/addSRoute`, formData, {
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