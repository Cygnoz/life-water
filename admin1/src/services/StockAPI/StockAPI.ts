import axios from 'axios';
import { STOCK_BASEURL } from '../Baseurl';

// Function to add an item
export const addItemAPI = async (formData: FormData) => {
  try {
    const response = await axios.post(`${STOCK_BASEURL}/api/item`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'  // Ensure correct content type
      }
    });
    return response.data;
  } catch (error: any) {
    console.error('Error adding item:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Error adding item');
  }
};

// Function to get all items
export const getItemsAPI = async () => {
    try {
      const response = await axios.get(`${STOCK_BASEURL}/api/item`); // Corrected endpoint
      return response.data;
    } catch (error: any) {
      console.error('Error fetching items:', error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || 'Error fetching items');
    }
  };

// Function to update an item by ID
export const updateItemAPI = async (id: string, formData: any) => {
  try {
    const response = await axios.put(`${STOCK_BASEURL}/api/item/${id}`, formData, {
      headers: {
        'Content-Type': 'application/json'  // Ensure correct content type
      }
    });
    return response.data;
  } catch (error: any) {
    console.error('Error updating item:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Error updating item');
  }
};

// Function to delete an item by ID
export const deleteItemAPI = async (id: string) => {
  try {
    const response = await axios.delete(`${STOCK_BASEURL}/api/item/${id}`);
    return response.data;
  } catch (error: any) {
    console.error('Error deleting item:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Error deleting item');
  }
};