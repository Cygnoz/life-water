import React, { useEffect, useState } from 'react';
import plus from '../assets/images/pluscircle.svg';
import { endRideAPI } from '../services/EndRide/EndRide'; // Ensure the path is correct for your project
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Expense {
  id: number;
  remarks: string;
  amount: string;
}

const EndRide: React.FC = () => {
  const [endingKM, setEndingKM] = useState<string>('');
  const [travelledKM, setTravelledKM] = useState<string>('0');
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, remarks: '', amount: '' },
  ]);
  const [storedID, setStoredID] = useState<string | null>(null);

  useEffect(() => {
    const activeRouteId = localStorage.getItem("activerouteID");
    if (activeRouteId) {
      setStoredID(activeRouteId);
    }
  }, []);

  const addExpense = () => {
    setExpenses([
      ...expenses,
      { id: expenses.length + 1, remarks: '', amount: '' },
    ]);
  };

  const handleExpenseChange = (id: number, field: string, value: string) => {
    setExpenses(expenses.map(expense =>
      expense.id === id ? { ...expense, [field]: value } : expense
    ));
  };

  const handleEndRideSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!storedID) {
      toast.error("No active route ID found."); // Use Toastify for error
      return;
    }

    const payload = {
      activeRouteId: storedID,
      endingKM: parseFloat(endingKM),
      travelledKM: parseFloat(travelledKM),
      expenses: expenses.map(({ remarks, amount }) => ({
        remarks,
        amount: amount.toString(), // Convert amount to string
      })),
    };
    

    try {
      const response = await endRideAPI(payload);
      console.log('End ride response:', response);
      toast.success('Ride ended successfully'); // Use Toastify for success
      setEndingKM("")
      setTravelledKM("")
      setExpenses([ { id: 1, remarks: '', amount: '' },])
    } catch (error) {
      console.error('Error ending ride:', error);
      toast.error('Failed to end the ride'); // Use Toastify for error
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen items-center justify-center">
      <form onSubmit={handleEndRideSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Ending Kilometer</label>
          <input
            type="number"
            value={endingKM}
            onChange={(e) => setEndingKM(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter ending kilometer"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Travelled Kilometer</label>
          <input
            type="number"
            value={travelledKM}
            onChange={(e) => setTravelledKM(e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        {expenses.map((expense) => (
          <div key={expense.id} className="mb-4">
            <div className="flex mb-2">
              <label className="block text-gray-700 mr-2">Expense {expense.id}</label>
              <button type="button" onClick={addExpense} className="ml-auto text-blue-500">
                <img className="m-2" src={plus} alt="Add expense" />
              </button>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={expense.remarks}
                onChange={(e) => handleExpenseChange(expense.id, 'remarks', e.target.value)}
                className="w-full mt-1 p-2 border rounded"
                placeholder="Remarks"
              />
              <input
                type="number"
                value={expense.amount}
                onChange={(e) => handleExpenseChange(expense.id, 'amount', e.target.value)}
                className="w-full mt-1 p-2 border rounded"
                placeholder="Amount"
              />
            </div>
          </div>
        ))}
        <button type="submit" className="w-full bg-[#820000] text-white p-2 rounded mt-4">
          Submit
        </button>
      </form>
      <ToastContainer /> {/* Add ToastContainer to your JSX */}
    </div>
  );
};

export default EndRide;
