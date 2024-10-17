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


  // Function to get all sub routes
export const getSubRoutesAPI = async () => {
  try {
    const response = await axios.get(`${BASEURL}/api/viewSRoute`, {
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



// delete sub route

export const deleteSubRouteAPI = async (id: string) => {
  try {
    const response = await fetch(`${BASEURL}/api/delSRoute/${id}`, {
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


// update an existing subRoute 
export const editSubRouteAPI= async(id:string)=>{
  try{
    const response = await axios.put(`${BASEURL}/api/updateSRoute/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  }
  catch(error:any){
    console.error('Error updating route',error.response?.data?.message || error.message)
    throw new Error(error.response?.data?.message || 'An unexpected error occured')
  }
}