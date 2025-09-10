import React from 'react';
import { Heart } from 'lucide-react';

const LocationHeader = ({ location, onFavoriteToggle, isFavorite }) => {
  const date = new Date(location.localtime);
  const localDay = date.toLocaleDateString('en-US', { weekday: 'long' });
  const localTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  const cityName = `${location.name}, ${location.country}`;

  return (
    <div className="text-center sm:text-left">
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <h1 className=" text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white">{cityName}</h1>
        <button
          onClick={() => onFavoriteToggle(cityName)}
          aria-label="Toggle favorite"
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            size={24}
            className={`transition-colors ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400 hover:text-white'}`}
          />
        </button>
      </div>
      <p className="text-gray-400">{localDay}, {localTime}</p>
    </div>
  );
};

export default LocationHeader;