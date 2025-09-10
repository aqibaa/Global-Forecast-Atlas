# 🌦️ Global Forecast Atlas - A Modern Weather Dashboard

Global Forecast Atlas is a modern, responsive weather dashboard application built with React, Vite, and Tailwind CSS. This application provides users with real-time weather updates, multi-day forecasts, air quality index, and information on upcoming sports events.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFFFFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=FFFFFF)](https://tailwindcss.com/)

---

### ✨ Features

This application includes the following features:

*   **Real-time Weather Data:**
    *   **Current Weather:** Provides current temperature, condition, high/low temperatures, wind speed, UV index, and cloud cover.
    *   **Hourly Forecast:** A detailed 24-hour forecast with an interactive slider.
    *   **Weekly Forecast:** A detailed 7-day forecast with an expand/collapse feature.
*   **Comprehensive Details:**
    *   **Air Quality Index (AQI):** Details on the PM2.5 pollutant with a dynamic progress bar.
    *   **Weather Details:** "Feels like" temperature, humidity, visibility, and atmospheric pressure.
*   **Advanced Features:**
    *   **Live Weather Alerts:** Official weather warnings and advisories issued by government agencies.
    *   **Upcoming Sports Events:** A list of upcoming football, cricket, and golf events in the searched city.
*   **Excellent User Experience (UX):**
    *   **City Search:** The ability to search for the weather in any city worldwide.
    *   **Geolocation:** Get weather for your current location with a single click.
    *   **Favorite Cities:** Save your favorite cities to `localStorage` for quick access.
    *   **Multi-View Architecture:** Separate, dedicated views for Weather, Calendar, and Sports.
    *   **Fully Responsive:** A seamless experience on mobile, tablet, and desktop devices.
    *   **Skeleton Loaders:** A professional loading experience while data is being fetched.

### 🛠️ Tech Stack & Libraries

*   **Frontend:** [React.js](https://reactjs.org/), [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **State Management:** [React Context API](https://reactjs.org/docs/context.html) (for managing the shared city state)
*   **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
*   **Calendar:** [react-calendar](https://www.npmjs.com/package/react-calendar)
*   **API:** [WeatherAPI.com](https://www.weatherapi.com/) (for Weather, Forecast, Sports, and Alerts data)

### ⚙️ Setup and Installation

To run this project on your local machine, follow the steps below:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    cd YOUR_REPOSITORY_NAME
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables:**
    *   Create a new file named `.env` in the root folder of the project.
    *   Get your free API key from [WeatherAPI.com](https://www.weatherapi.com/).
    *   Add your API key to the `.env` file as follows:
      ```
      VITE_WEATHERAPI_KEY=your_api_key_here
      ```

4.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    The application will now be running on `http://localhost:5173` (or another port).

---
