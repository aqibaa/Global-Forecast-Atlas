import React from 'react';

// Yeh Hourly aur Weekly, dono ke liye istemal hoga
const ForecastSkeleton = ({ cards = 8 }) => (
  <div className="bg-dark-secondary p-6 rounded-xl animate-pulse">
    <div className="h-6 bg-gray-700 rounded w-1/3 mb-4"></div>
    <div className="flex gap-4">
      {Array.from({ length: cards }).map((_, i) => (
        <div key={i} className="bg-gray-700 p-4 rounded-lg flex-shrink-0 min-w-[96px] h-28"></div>
      ))}
    </div>
  </div>
);

export default ForecastSkeleton;