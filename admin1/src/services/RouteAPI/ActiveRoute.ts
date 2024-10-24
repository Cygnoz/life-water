import axios from "axios";
import { BASEURL } from "../Baseurl";


export const getActiveRouteAPI = async () => {
    try {
      const response = await axios.get(`${BASEURL}/api/getActiveRoutes`, {
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