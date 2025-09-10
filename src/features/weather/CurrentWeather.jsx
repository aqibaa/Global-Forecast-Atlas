
const CurrentWeather = ({ current, daily }) => {
    return (
        <div className=" bg-gray-800 p-6 rounded-xl">
            <h2 className="text-lg font-semibold text-white mb-4">Current Weather</h2>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                    <p className="text-7xl font-bold text-white">{Math.round(current.temp_c)}°C</p>
                    <p className="text-gray-400">{current.condition.text}</p>
                </div>
                <div className="flex items-center justify-center p-4">
                    <img src={`https:${current.condition.icon}`} alt={current.condition.text} className="w-24 h-24" />
                </div>
                <div className="text-center sm:text-right text-gray-300 space-y-1">
                    <p>High: <span className="text-white">{Math.round(daily.day.maxtemp_c)}°C</span></p>
                    <p>Low: <span className="text-white">{Math.round(daily.day.mintemp_c)}°C</span></p>
                    <p>Cloud cover: <span className="text-white">{current.cloud}%</span></p>
                    <p>UV Index: <span className="text-white">{current.uv}</span></p>
                </div>
            </div>
        </div>
    );
};
export default CurrentWeather;