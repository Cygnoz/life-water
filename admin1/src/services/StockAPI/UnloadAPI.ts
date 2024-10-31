import { STOCK_BASEURL } from '../Baseurl';
import axios from 'axios';

// Define the types for the Unload data
interface Item {
  quantity: number;
  rate: number;
  product: string;
  amount: number;
}

interface UnloadData {
  mainRoute: string;
  warehouseName: string;
  date: string;
  transferNumber: string;
  items: Item[];
  autoNotes?: string;
  termsAndConditions?: string;
}



// Define the type for the expected API response
interface ApiResponse {
  message: string;
  data?: any;
  error?: string;
}

// API function to add an unload entry
export const addUnloadAPI = async (unloadData: UnloadData): Promise<ApiResponse> => {
    try {
      const response = await axios.post<ApiResponse>(`${STOCK_BASEURL}/api/addunload`, unloadData);
      return response.data; // Return the data from the response
    } catch (error: any) {
      console.error('Error adding unload:', error);
      return { message: error.response?.data?.message || 'An unexpected error occurred.', error: error.message };
    }
  };
  
