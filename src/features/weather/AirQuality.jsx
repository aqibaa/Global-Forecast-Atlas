import React from 'react';
import { Wind } from 'lucide-react';

const getAqiStatus = (index) => {
  switch (index) {
    case 1: return 'Good';
    case 2: return 'Moderate';
    case 3: return 'Unhealthy for sensitive groups';
    case 4: return 'Unhealthy';
    case 5: return 'Very Unhealthy';
    case 6: return 'Hazardous';
    default: return 'Unknown';
  }
};

const AirQuality = ({ airQuality }) => {
  if (!airQuality) return null;

  const aqiIndex = airQuality['us-epa-index'];
  const aqiStatus = getAqiStatus(aqiIndex);

  const progressPercentage = (aqiIndex / 6) * 100;

  return (
    <div className=" bg-gray-800 p-6 rounded-xl">
      <h2 className="text-lg font-semibold text-white mb-4">Air Quality</h2>
      
      <div className="flex justify-between items-center">
        <div>
          <p className="text-5xl font-bold text-white">{Math.round(airQuality.pm2_5)}</p>
          <p className="text-lg text-gray-300">{aqiStatus}</p>
        </div>
        <Wind size={48} className="text-green-500" />
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-400">Main pollutant: PM2.5</p>
        <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
          <div 
            className="bg-green-400 h-1.5 rounded-full" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;