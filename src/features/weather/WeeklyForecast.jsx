import { useState } from 'react';
import { Sun, Cloud, CloudDrizzle } from 'lucide-react';

const DayForecast = ({ day, iconUrl, temp }) => (
  <div className="flex items-center justify-between p-3 border-b border-gray-700">
    <p className="w-1/3 text-gray-300">{day}</p>
    <img src={`https:${iconUrl}`} alt="weather icon" className="w-8 h-8" />
    <p className="w-1/3 text-right font-medium text-white">{temp}</p>
  </div>
);

const WeeklyForecast = ({ daily, timezone }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  if (!daily || daily.length === 0) {
    return null;
  }

  const handleToggle = () => {
    setIsExpanded(prevState => !prevState);
  };


  const displayedForecast = isExpanded ? daily : daily.slice(0, 2);

  return (
    <div className="flex flex-col p-2 sm:p-6  bg-gray-800 mt-4 rounded-xl ">
      <h2 className="text-lg font-semibold text-white mb-4">Weekly Forecast</h2>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden 
          ${isExpanded ? 'max-h-[1000px]' : 'max-h-[180px]'}`
        }
      >
        <div className=" space-y-1 ">
          {displayedForecast.map((day, index) => {
            const date = new Date(day.date);
            const dayName = index === 0 ? 'Today' : date.toLocaleDateString('en-US', { timeZone: timezone, weekday: 'long' });
            return (
              <DayForecast
                key={day.date_epoch}
                day={dayName}
                iconUrl={day.day.condition.icon}// Icon ko dynamic banayein
                temp={`${Math.round(day.day.maxtemp_c)}° / ${Math.round(day.day.mintemp_c)}°`}
              />
            );
          })}
        </div>
      </div>

      {daily.length > 5 && (
        <button
          onClick={handleToggle}
          className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg mt-6 hover:bg-green-400 transition-colors"
        >
          {/* Button ka text state ke hisab se badlega */}
          {isExpanded ? 'Show Less' : 'View Full Report'}
        </button>
      )}
    </div>

  );
};

export default WeeklyForecast;