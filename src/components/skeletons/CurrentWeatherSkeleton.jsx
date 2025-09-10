import React from 'react';

const CurrentWeatherSkeleton = () => (
  <div className="bg-dark-secondary p-6 rounded-xl animate-pulse">
    <div className="h-6 bg-gray-700 rounded w-1/3 mb-4"></div>
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="w-full sm:w-1/3">
        <div className="h-16 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
      </div>
      <div className="h-20 w-20 bg-gray-700 rounded-full"></div>
      <div className="w-full sm:w-1/3 space-y-2">
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded"></div>
      </div>
    </div>
  </div>
);

export default CurrentWeatherSkeleton;