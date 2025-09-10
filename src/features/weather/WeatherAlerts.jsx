import React from 'react';
import { AlertTriangle, Rose } from 'lucide-react';

// Chota, reusable card (Message Type, Headline, etc. ke liye)
const InfoCard = ({ title, content }) => (
  <div className="bg-gray-800 p-4 text-xs sm:text-lg  rounded-lg h-full">
    <h4 className="text-lg sm:text-xl font-bold text-yellow-400 mb-1">{title}</h4>
    <p className="text-gray-300 ">{content}</p>
  </div>
);

const InfoSection = ({ title, content }) => (
  <div className="whitespace-pre-line p-4 text-xs sm:text-lg rounded-lg bg-gray-800">
    <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2">{title}</h3>
    <p className="text-gray-300 ">{content}</p>
  </div>
);

const WeatherAlerts = ({ alerts, location }) => {
  if (!alerts || alerts.length === 0 || !location) {
    return (
      <>
        <div className="bg-gray-800 border-green-400 border-2  rounded-xl p-6 flex items-center justify-center gap-3">

          <Rose className="text-red-800 h-5 w-5 flex-shrink-0" />

          <p className="text-green-500 text-xl">
            <strong className="font-bold mr-2">There is no Weather Related Alerts In This City</strong>

          </p>

        </div>

      </>
    )
  }


  const uniqueAlerts = [];
  const seenHeadlines = new Set();

  alerts.forEach(alert => {
    if (!seenHeadlines.has(alert.headline)) {
      uniqueAlerts.push(alert);
      seenHeadlines.add(alert.headline);
    }
  });


  const lastUpdatedTime = new Date(location.localtime).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return (

    <div className="mt-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white">Weather Alerts</h2>
        <p className="text-sm text-gray-400 mt-1">
          Last updated at {lastUpdatedTime} ({location.tz_id})
        </p>
      </div>
      <div className="space-y-8 mt-8 bg-yellow-900/30 border border-yellow-500 rounded-2xl p-6">
        {uniqueAlerts.map((alert, index) => (
          <div key={index} className="bg-dark-secondary">

            <div className="flex items-center gap-3 border-b border-yellow-500/30 pb-4 mb-6">
              <AlertTriangle size={25} className="text-yellow-400" />
              <h2 className= "text-lg sm:text-2xl font-bold text-yellow-400">{alert.event}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <InfoCard title="Message Type" content={alert.msgtype} />
              <InfoCard title="Headline" content={alert.headline} />
              <InfoCard title="Severity" content={alert.severity} />
              <div className="md:col-span-2">
                <InfoCard title="Areas Affected" content={alert.areas} />
              </div>
              <InfoCard title="Event" content={alert.event} />
            </div>

            <div className="space-y-6">
              <InfoSection title="Description" content={alert.desc} />
              <InfoSection title="Instruction" content={alert.instruction} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherAlerts;