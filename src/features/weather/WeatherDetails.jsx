import React from 'react';
import { Thermometer, Droplets, Eye, Wind as WindIcon, Gauge } from 'lucide-react';

// Har detail ke liye ek reusable component
const DetailItem = ({ icon, label, value }) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-3 text-gray-400">
      {icon}
      <span>{label}</span>
    </div>
    <span className="font-semibold text-white">{value}</span>
  </div>
);

const WeatherDetails = ({ current }) => {
  if (!current) return null;

  return (
    <div className=" bg-gray-800 mt-4 p-6 rounded-xl">
      <h2 className="text-lg font-semibold text-white mb-4">Weather Details</h2>

      <div className="space-y-4">
        <DetailItem
          icon={<Thermometer size={20} />}
          label="Feels Like"
          value={`${Math.round(current.feelslike_c)}°C`}
        />
        <DetailItem
          icon={<Droplets size={20} />}
          label="Humidity"
          value={`${current.humidity}%`}
        />
        <DetailItem
          icon={<Eye size={20} />}
          label="Visibility"
          value={`${current.vis_miles} mi`}
        />
        <DetailItem
          icon={<WindIcon size={20} />}
          label="Wind"
          value={`${Math.round(current.wind_mph)} mph`}
        />
        <DetailItem
          icon={<Gauge size={20} />}
          label="Pressure"
          value={`${current.pressure_in} in`}
        />
      </div>
    </div>
  );
};

export default WeatherDetails;