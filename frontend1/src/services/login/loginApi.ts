import { BASEURL } from "../BaseURL";
import { commonAPI } from "../CommonApi";


export const loginStaffAPI = async (loginData: any): Promise<Response> => {
  try {
    const response = await commonAPI('POST', `${BASEURL}/api/staff/login`, JSON.stringify(loginData), {
      'Content-Type': 'application/json',
    });

    console.log("Response Status:", response.status);
    console.log("Response Data:", response);

    return response;
  } catch (error: any) {
    console.error(`Error logging in staff:`, error);
    throw error;
  }
};


