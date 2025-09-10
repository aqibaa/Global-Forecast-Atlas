// src/components/SportsButton.jsx
import React from 'react';
import { Trophy } from 'lucide-react';

const SportsButton = ({ isActive, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`p-3 rounded-lg transition-colors duration-200 ${isActive ? 'bg-green-500 text-white' : 'text-gray-400 hover:bg-gray-700'}`}
    >
      <Trophy size={24}  />
    </button>
  );
};

export default SportsButton;