import React from 'react';
import { WifiOff } from 'lucide-react';

const ErrorDisplay = ({ message }) => (
  <div className="text-center p-8 bg-dark-secondary rounded-lg">
    <WifiOff className="mx-auto h-12 w-12 text-red-400" />
    <h3 className="mt-4 text-xl font-semibold text-white">Something went wrong</h3>
    <p className="mt-2 text-sm text-gray-400">
      {message || "Could not fetch data. Please check your connection or try searching for a different city."}
    </p>
  </div>
);

export default ErrorDisplay;