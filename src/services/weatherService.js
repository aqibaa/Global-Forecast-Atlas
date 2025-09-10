const API_KEY = import.meta.env.VITE_WEATHERAPI_KEY;
const FORECAST_API_URL = 'https://api.weatherapi.com/v1/forecast.json';
const SPORTS_API_URL = 'https://api.weatherapi.com/v1/sports.json';

export const getWeatherData = async (city) => {
  try {
    const response = await fetch(`${FORECAST_API_URL}?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=yes`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error.message || 'Could not fetch weather data.');
    }
    
    return await response.json();

  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error);
    throw error;
  }
};
export const getSportsData = async (city) => {
  try {
    const response = await fetch(`${SPORTS_API_URL}?key=${API_KEY}&q=${city}`);
    
    if (!response.ok) {
      console.warn(`Could not fetch sports data for ${city}. It might not be available.`);
      return null; 
    }
    
    return await response.json();

  } catch (error) {
    console.error(`Error fetching sports data for ${city}:`, error);
    throw error;
  }
};