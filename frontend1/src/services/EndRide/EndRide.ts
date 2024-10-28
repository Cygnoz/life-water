import axios from 'axios';
import { BASEURL } from '../BaseURL';
BASEURL
export const endRideAPI = async (payload: {
  activeRouteId: string;
  endingKM: number;
  travelledKM: number;
  expenses: { remarks: string; amount: string }[];
}) => {
  const response = await axios.post(`${BASEURL}/api/end-ride`, payload);
  return response.data;
};
