import React from 'react';

const SidePanelSkeleton = () => (
  <div className=" p-6 rounded-xl animate-pulse space-y-8">
    <div className="space-y-4">
      <div className="h-6 bg-gray-700 rounded w-1/2"></div>
      <div className="h-16 bg-gray-700 rounded"></div>
    </div>
    <div className="space-y-4">
      <div className="h-6 bg-gray-700 rounded w-1/2"></div>
      <div className="h-32 bg-gray-700 rounded"></div>
    </div>
  </div>
);

export default SidePanelSkeleton;