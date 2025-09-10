import React from 'react';
import { Calendar } from 'lucide-react';

// 'onClick' prop add karein
const CalendarButton = ({ isActive, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`p-3 rounded-lg transition-colors duration-200 ${isActive ? 'bg-green-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
    >
      <Calendar size={24} />
    </button>
  );
};

export default CalendarButton;