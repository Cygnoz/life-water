import React, { useEffect, useState } from 'react';
import plus from '../assets/images/pluscircle.svg'

interface Expense {
  id: number;
  remarks: string;
  amount: string;
}

const EndRide: React.FC = () => {

  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, remarks: '', amount: '' },
  ]);

  const [storedID, setStoredID] = useState<string | null>(null);
  // Retrieve username from session storage on component load
  useEffect(() => {
    const storedID = localStorage.getItem("_id");
    if (storedID) {
      console.log(storedID);
      setStoredID(storedID);
    }
  }, []);
  console.log(storedID);
  


  const addExpense = () => {
    setExpenses([
      ...expenses,
      { id: expenses.length + 1, remarks: '', amount: '' },
    ]);
  };
  const handleEndRideSubmit = async () => {
    try {
      // Delete the active route
      await (id) // Assuming you pass the active route id if needed
      console.log('Active route deleted successfully');
    } catch (error) {
      console.error('Error deleting active route:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen items-center justify-center">
      <form onChange={handleEndRideSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Ending Kilometer</label>
          <input
            type="number"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter ending kilometer"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Travelled Kilometer</label>
          <input
            type="number"
            className="w-full mt-1 p-2 border rounded"
            defaultValue={0}
          />
        </div>
        {expenses.map((expense) => (
          <div key={expense.id} className="mb-4">
            <div className="flex mb-2">
              <label className="block text-gray-700 mr-2">Expense {expense.id}</label>
              <button type="button" onClick={addExpense} className="ml-auto text-blue-500">
              <img className='m-2' src={plus} alt="" />
              </button>
            </div>
            <div className="flex gap-2">
            <div className="mb-2">
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded"
                placeholder="Remarks"
              />
            </div>
            <div>
              <input
                type="number"
                className="w-full mt-1 p-2 border rounded"
                placeholder="Amount"
              />
            </div>

            </div>
          </div>
        ))}
       
<button type="submit" className="w-full bg-[#820000] text-white p-2 rounded mt-4">
Submit
</button>
      </form>
    </div>
  );
};

export default EndRide;
