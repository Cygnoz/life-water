// import { BASEURL } from "../Baseurl";
// import { commonAPI } from "../CommonApi";


// interface ApiResponse {
//   message?: string;
//   data?: any;
//   status?:number;
// }

// export const addBusinessCustomerAPI = async (customerData: FormData): Promise<ApiResponse> => {
//   try {
//     const response = await commonAPI('POST', `${BASEURL}/api/business-customer`, customerData, {
//       // No need to specify Content-Type for FormData
//     });

//     return response; // Ensure response matches the expected ApiResponse structure
//   } catch (error: any) {
//     console.error("Error adding business customer:", error); // Log the full error for debugging
//     return { message: error.message || "An unexpected error occurred while adding the business customer." }; // Fallback error message
//   }
// };

// export const addIndividualCustomerAPI = async (individualData:FormData): Promise<ApiResponse> => {
//   try {
//     const response = await commonAPI('POST', `${BASEURL}/api/customer`,individualData,{
      
//     });
//     return response;
// }catch(error:any) {
//   console.error("Error adding individual customer:", error); // Log the full error for debugging
//   return { message: error.message || "An unexpected error occurred while adding the individual customer." };
// }
// };


import { BASEURL } from "../Baseurl";
import { commonAPI } from "../CommonApi";

interface ApiResponse {
  message?: string;
  data?: any;
  status?: number;
}


// // Combined API function for adding both business and individual customers
// export const addCustomerAPI = async (customerData: FormData): Promise<ApiResponse> => {
//   try {
//     // POST to a single endpoint
//     const response = await commonAPI('POST', `${BASEURL}/api/addcustomer`, customerData, {
//       // No need to specify Content-Type for FormData
//     });
//     console.log(response);
//     return response; // Ensure response matches the expected ApiResponse structure
    
//   } catch (error: any) {
//     console.error(`Error adding customer of type `, error); // Log the full error for debugging
//     throw error; // Rethrow the error so it can be caught in the component
//   }
// };


export const addCustomerAPI = async (customerData: FormData): Promise<ApiResponse> => {
  try {
    const response = await commonAPI('POST', `${BASEURL}/api/addcustomer`, customerData);

    console.log("Response Status:", response.status); // Check the response status
    console.log("Response Data:", response.data); // Check the response data

    return response;
  } catch (error: any) {
    console.error(`Error adding customer:`, error);
    throw error; // Rethrow the error to be caught in the component
  }
};



