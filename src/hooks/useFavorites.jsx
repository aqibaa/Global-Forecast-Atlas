import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'favoriteCities';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Shuru mein, saved cities ko localStorage se load karein
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem(FAVORITES_KEY);
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.error("Failed to load favorites from localStorage", error);
    }
  }, []);

  // Jab bhi 'favorites' state badle, usko localStorage mein save karein
  const saveFavorites = (newFavorites) => {
    try {
      setFavorites(newFavorites);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error("Failed to save favorites to localStorage", error);
    }
  };

  const addFavorite = (city) => {
    // Check karein ke sheher pehle se save to nahi hai (case-insensitive)
    if (!favorites.some(fav => fav.toLowerCase() === city.toLowerCase())) {
      const newFavorites = [...favorites, city];
      saveFavorites(newFavorites);
    }
  };

  const removeFavorite = (city) => {
    const newFavorites = favorites.filter(fav => fav.toLowerCase() !== city.toLowerCase());
    saveFavorites(newFavorites);
  };

  const isFavorite = (city) => {
    return favorites.some(fav => fav.toLowerCase() === city.toLowerCase());
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};