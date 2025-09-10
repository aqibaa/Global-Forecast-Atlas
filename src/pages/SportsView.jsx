import React, { useState, useEffect } from 'react';
import { getSportsData } from '../services/weatherService';
import { useSharedData } from '../context/SharedDataContext';
import SportsEvents from '../features/weather/SportsEvents'; // Naya component import karein
import { Dribbble } from 'lucide-react';

const SportsView = () => {
  const { city } = useSharedData();
  const [sportsData, setSportsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSports = async () => {
      if (!city) return;
      setLoading(true);
      setError(null);
      try {
        const data = await getSportsData(city);
        setSportsData(data);
      } catch (err) {
        setError(err.message);
        setSportsData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSports();
  }, [city]);

  // Check karein ke football, cricket, aur golf teeno arrays maujood hain aur khaali hain ya nahi
  const noEventsFound = !sportsData || (
    (!sportsData.football || sportsData.football.length === 0) &&
    (!sportsData.cricket || sportsData.cricket.length === 0) &&
    (!sportsData.golf || sportsData.golf.length === 0)
  );

  return (
    <div className="p-4 sm:p-8">
      {/* Page ka Header */}
      <div className="flex items-center gap-3 mb-10">
        <Dribbble size={32} className="text-green-500" />
        <h1 className="text-3xl font-bold text-white">
          Sports Events: <span className="text-green-500">{city}</span>
        </h1>
      </div>

      {/* Loading, Error, aur Empty States */}
      {loading && <p className="text-gray-400">Loading sports events...</p>}
      {error && <p className="text-red-400">Error: {error}</p>}
      
      {!loading && noEventsFound && (
        <p className="text-gray-400">No upcoming sports events found for {city}.</p>
      )}

      {/* Data maujood hone par SportsEvents component dikhayein */}
      {!loading && !noEventsFound && sportsData && (
        <SportsEvents sportsData={sportsData} />
      )}
    </div>
  );
};

export default SportsView;