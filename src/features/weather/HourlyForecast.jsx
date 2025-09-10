



import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HourCard = ({ time, iconUrl, temp }) => (
  <div className="flex flex-col items-center  bg-gray-800 p-4 rounded-lg flex-shrink-0 min-w-[96px]">
    <p className="text-sm text-gray-400">{time}</p>
     <img src={`https:${iconUrl}`} alt="weather icon" className="w-10 h-10 my-1" />
    <p className="font-semibold text-white">{temp}°</p>
  </div>
);

const HourlyForecast = ({ hourly }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 2; // Screen ka aadha hissa scroll karein
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-4">Hourly Forecast</h2>
      <div className="relative">
        {/* ... arrow buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 border-1 border-white rounded-full p-0.5"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} className="text-green-500" />
        </button>
        <div ref={scrollContainerRef} className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
          {hourly.map((hour) => { 
            const date = new Date(hour.dt * 1000);
            const time = new Date(hour.time).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }); return (
              <HourCard
                key={hour.time_epoch}
                time={time}
                iconUrl={hour.condition.icon}
                temp={Math.round(hour.temp_c)}
              />
            );
          })}
        </div>
        {/* ... arrow buttons */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 border-1 border-white rounded-full p-0.5"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} className="text-green-500" />
        </button>
      </div>
    </div>
  );
};

export default HourlyForecast;