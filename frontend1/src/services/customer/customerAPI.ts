import axios from "axios";
import { BASEURL } from "../BaseURL";
// import { commonAPI } from "../CommonApi";

interface CustomerFormData {
  customerType: 'Business' | 'Individual';
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  numberOfBottles: string;
  rate: string;
  paymentMode: 'Cash' | 'Credit';
  contactNumber: string;
  whatsappNumber: string;
  depositAmount: string;
  location: {
    address: string;
    coordinates: {
      latitude: number | null;
      longitude: number | null;
    };
  };
}

interface ApiResponse {
  message?: string;
  data?: any;
  status?: number;
}

export const addCustomerAPI = async (customerData: CustomerFormData): Promise<ApiResponse> => {
  try {
    const response = await axios.post(`${BASEURL}/api/addsalesmancustomer`, customerData);

    console.log("Response Status:", response.status); // Check the response status
    console.log("Response Data:", response.data); // Check the response data

    return response;
  } catch (error: any) {
    if (error.response && error.response.status === 400 && error.response.data.message) {
      throw new Error(error.response.data.message); // Forward custom error message
    }
    throw error; // Rethrow the error to be caught in the component
  }
};