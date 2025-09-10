import React from 'react';
import HomeButton from './HomeButton';
import CalendarButton from './CalendarButton';
import SportsButton from './SportsButton'; 
import { ThermometerSun, X } from 'lucide-react';

const Sidebar = ({ isSidebarOpen, setSidebarOpen, activeView, setActiveView }) => {
  const baseClasses = "flex flex-col items-center py-6 px-4  transition-transform duration-300 ease-in-out z-50";
  const mobileClasses = `fixed inset-y-0 left-0 w-20 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`;
  const desktopClasses = "sm:relative sm:translate-x-0";

  return (
    <>
      <aside className={`${baseClasses} ${mobileClasses} ${desktopClasses} bg-gray-800`}>
        <div className="flex-shrink-0 mb-12 hidden sm:block">
          <ThermometerSun size={32} className="text-white" />
        </div>

        <div className="sm:hidden flex justify-between items-center w-full mb-8">
          <ThermometerSun size={32} className="text-white" />
          <button onClick={() => setSidebarOpen(false)} className="text-white p-2">
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 ">
          <HomeButton 
          isActive={activeView === 'weather'}
          onClick={()=>setActiveView('weather')} 
          />
          <CalendarButton
            isActive={activeView === 'calendar'}
            onClick={() => setActiveView('calendar')}
          />
            <SportsButton 
            isActive={activeView === 'sports'} 
            onClick={() => setActiveView('sports')}
          />
        </nav>
      </aside>

      {isSidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-40 sm:hidden" aria-hidden="true"></div>
      )}
    </>
  );
};

export default Sidebar;