import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import CalendarView from './pages/CalendarView';
import SportsView from './pages/SportsView'; // Sports page import karein
import { Menu } from 'lucide-react';

function App() {
  // Sidebar ko kholne/band karne ke liye state
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('weather');

  return (
    <div className="flex font-sans bg-[#111827]  min-h-screen overflow-x-hidden ">


      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      <main className="flex-1 min-w-0
        p-4 sm:p-8">
        <button
          onClick={() => setSidebarOpen(true)}
          className="sm:hidden p-2 mb-4 text-white"
          aria-label="Open sidebar"
        >
          <Menu size={28} />
        </button>

        {activeView === 'weather' && <Home />}
        {activeView === 'calendar' && <CalendarView />}
        {activeView === 'sports' && <SportsView />}
      </main>
    </div>

  );
}

export default App;