import axios from 'axios';
import { STOCK_BASEURL } from "../Baseurl";
// import { Item } from '../StockAPI/StockAPI';

interface ApiResponse {
  success: boolean;
    message?: string;
    data?: any;
}

// interface Order {
//   orderNumber?: string;
//   customer: string;
//   salesman: string;
//   warehouse: string;
//   date?: Date;
//   paymentMode: 'Cash' | 'Credit' | 'FOC';
//   items: Item[];
//   notes?: string;
//   termsAndCondition?: string;
//   totalAmount: number;
// }
// export const addOrderAPI = async (formData: FormData): Promise<ApiResponse> => {
//     try {
//       const response = await axios.post(
//         `${STOCK_BASEURL}/api/orders`,
//         formData,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
   
//       return response.data;
//     } catch (error: any) {
//       if (axios.isAxiosError(error) && error.response) {
//         console.error('Error adding order:', error.response.data);
//         return { message: error.response.data.message || 'An unexpected error occurred.' };
//       } else {
//         console.error('Unexpected error:', error);
//         return { message: 'An unexpected error occurred.' };
//       }
//     }
//   };


export const addOrderAPI = async (formData: FormData): Promise<ApiResponse> => {
  try {
      const response = await axios.post(`${STOCK_BASEURL}/api/orders`, formData, {
          headers: {
              'Accept': 'application/json',
              // 'Content-Type' should not be set; Axios handles that for FormData
          },
      });

      // Logging the response for debugging
      console.log("Response Status:", response.status); // Check the response status
      console.log("Response Data:", response.data); // Check the response data

      return response.data; // Return the data for further processing
  } catch (error: any) {
      console.error("Error adding order:", error.response?.data || error.message);
      throw error; // Rethrow the error to be caught in the component
  }
};
  

// export const addOrderAPI = async (orderData: Order): Promise<ApiResponse> => {
//   try {
//     const response = await axios.post(`${STOCK_BASEURL}/api/orders`, orderData);
    
//     console.log("Response Status:", response.status); // Log response status
//     console.log("Response Data:", response.data); // Log response data
    
//     return response.data;
//   } catch (error: any) {
//     console.error("Error adding order:", error.response?.data || error.message);
//     throw error; // Rethrow error for component handling
//   }
// };