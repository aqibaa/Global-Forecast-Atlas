import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/Calendar.css'; // Hum yeh CSS file agle step mein banayenge

const CalendarView = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Calendar</h1>
      <div className="text-center p-6 rounded-xl">
        <Calendar 
          onChange={setDate}  
          value={date} 
          className="min-w-30 border-none h-auto"
        />
      </div>
    </div>
  );
};

export default CalendarView;