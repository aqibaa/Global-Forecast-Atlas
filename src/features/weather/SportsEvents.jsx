import React from 'react';
import { Dribbble, Trophy, LandPlot, Building, Clock } from 'lucide-react';

const EventCard = ({ event }) => {
  const eventDate = new Date(event.start);
  const formattedDate = eventDate.toLocaleDateString('en-US', { weekday: 'short' });
  const formattedTime = eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div className="bg-gray-800 p-4 rounded-lg flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-white pr-4">{event.match}</h3>
        <span className="text-sm text-green-500 whitespace-nowrap">{event.tournament}</span>
      </div>
      <div className="flex items-center text-sm text-gray-400 gap-4">
        <div className="flex items-center gap-2">
          <Building size={16} />
          <span>{event.stadium}, {event.country}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>{formattedDate}, {formattedTime}</span>
        </div>
      </div>
    </div>
  );
};

const SportCategory = ({ title, icon, events }) => {
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-3">
        {events.map((event, index) => (
          <EventCard key={`${event.match}-${index}`} event={event} />
        ))}
      </div>
    </div>
  );
};

// Main Component
const SportsEvents = ({ sportsData }) => {
  return (
    <div>
      <SportCategory
        title="Football"
        icon={<Dribbble size={24} className="text-green-500" />}
        events={sportsData.football}
      />
      <SportCategory
        title="Cricket"
        icon={<Trophy size={24} className="text-green-500" />}
        events={sportsData.cricket}
      />
      <SportCategory
        title="Golf"
        icon={<LandPlot size={24} className="text-green-500" />}
        events={sportsData.golf}
      />
    </div>
  );
};

export default SportsEvents;