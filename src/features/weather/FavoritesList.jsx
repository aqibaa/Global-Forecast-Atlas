import React from 'react';
import { Star,} from 'lucide-react';

const FavoritesList = ({ favorites, onSelect, onRemove, activeCity }) => {
  if (!favorites || favorites.length === 0) {
 return (
      <div className="mb-8 text-center text-sm text-gray-400 p-4 bg-dark-secondary/50 rounded-lg">
        <p>No favorite cities yet.</p>
        <p>Click the <span className="text-red-400 mx-1">❤</span> icon next to a city name to add it here.</p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
        <Star size={16} />
        <span>Favorites</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {favorites.map(city => (
          <div key={city} className="flex items-center rounded-full">
            <button
              onClick={() => onSelect(city)}
              className="px-4 py-1 text-sm text-white hover:text-green-500 transition-colors"
            >
              {city}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;