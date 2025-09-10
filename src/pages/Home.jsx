import React, { useState, useEffect } from 'react';
import { getWeatherData } from '../services/weatherService'; 
import LocationHeader from '../features/weather/LocationHeader';
import SearchBar from '../features/weather/SearchBar';
import CurrentWeather from '../features/weather/CurrentWeather';
import HourlyForecast from '../features/weather/HourlyForecast';
import WeeklyForecast from '../features/weather/WeeklyForecast';
import WeatherAlerts from '../features/weather/WeatherAlerts';
import WeatherDetails from '../features/weather/WeatherDetails';
import AirQuality from '../features/weather/AirQuality';
import { useSharedData } from '../context/SharedDataContext';
import { useFavorites } from '../hooks/useFavorites'; 
import FavoritesList from '../features/weather/FavoritesList'; 
import CurrentWeatherSkeleton from '../components/skeletons/CurrentWeatherSkeleton';
import ForecastSkeleton from '../components/skeletons/ForecastSkeleton';
import SidePanelSkeleton from '../components/skeletons/SidePanelSkeleton';
import ErrorDisplay from '../components/ErrorDisplay';

const Home = () => {
  const { city, setCity } = useSharedData();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoriteToggle = (cityName) => {
    if (isFavorite(cityName)) {
      removeFavorite(cityName);
    } else {
      addFavorite(cityName);
    }
  };

  useEffect(() => {
    if (!city) {
      setLoading(false);
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getWeatherData(city);
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleSearch = (searchedCity) => {
    setCity(searchedCity.trim());
  };


  if (error && !loading) {
    return (
      <div className="flex flex-col p-4 sm:p-8">
        <div className="mb-8 mx-auto w-full max-w-md">
          <SearchBar onSearch={handleSearch} />
        </div>
        <ErrorDisplay message={error} />
      </div>
    );
  }


  if (loading) {
    return(
        <div className="flex flex-col p-4 sm:p-8">
        <div className="mb-8 mx-auto w-full max-w-md">
          <div className="w-full h-[52px] rounded-lg animate-pulse"></div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8 min-w-0">

            <div className="space-y-2">
              <div className="h-8  rounded w-1/2 animate-pulse"></div>
              <div className="h-4  rounded w-1/3 animate-pulse"></div>
            </div>
            <CurrentWeatherSkeleton />
            <ForecastSkeleton cards={8} /> 
          </div>
          <div className="lg:col-span-1 space-y-8">
            <SidePanelSkeleton /> 
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col  p-4 sm:p-2">
      <div>
        <div  className="flex-col justify-center items-center  sm:flex sm:flex-row sm:justify-between sm:items-center
        md:flex md:flex-row md:items-center md:justify-between lg:flex lg:flex-row lg:justify-between lg:items-center ">
        <LocationHeader
          location={weatherData.location}
          onFavoriteToggle={handleFavoriteToggle}
          isFavorite={isFavorite(`${weatherData.location.name}, ${weatherData.location.country}`)}
        />
         <div className='mb-8 text-center sm:flex lg:mx-20 '>
          <SearchBar onSearch={handleSearch} />
        </div>
        </div>
        <FavoritesList
          favorites={favorites}
          onSelect={handleSearch} 
          onRemove={removeFavorite}
        />
      </div>


      {error && <p className="text-xl text-center text-red-400">Error: {error}</p>}

      {weatherData && (
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CurrentWeather current={weatherData.current} daily={weatherData.forecast.forecastday[0]} />
            <HourlyForecast hourly={weatherData.forecast.forecastday[0].hour} />
            <WeatherAlerts alerts={weatherData.alerts?.alert}
              location={weatherData.location} />
          </div>
          <div className="lg:col-span-1 p-6 rounded-xl">
            <AirQuality airQuality={weatherData.current.air_quality} />
            <WeatherDetails current={weatherData.current} />
            <WeeklyForecast daily={weatherData.forecast.forecastday} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;