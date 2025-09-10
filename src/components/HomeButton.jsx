import React from 'react';
import { Cloud } from 'lucide-react';

// 'onClick' prop add karein
const HomeButton = ({ isActive, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`p-3 rounded-lg transition-colors duration-200 ${isActive ? 'bg-green-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
    >
      <Cloud size={24} />
    </button>
  );
};

export default HomeButton;