import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';


const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        onSearch(`${latitude},${longitude}`);
      }, (error) => {
        console.error("Error getting user location:", error);
        alert("Could not get your location. Please ensure you have given location permissions to your browser.");
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
  

      <form onSubmit={handleSubmit} className="relative mt-4 sm:mt-0 lg:w-full ">
        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 " />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city"
          className="bg-gray-700  text-white  placeholder-gray-400 rounded-full py-2 pl-10 pr-4 w-full sm:w-64
          focus:outline-none focus:ring-2 focus:ring-yellow-400"    />
      <button 
       type="button"
        onClick={handleLocationClick}
        className="absolute sm:ml-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500 transition-colors"
        aria-label="Use current location"
        title="Use current location"
        >
        <MapPin size={25} /> 
      </button> 
      </form>
  
  );
};

export default SearchBar;