import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const latitude = '26.8603';
        const longitude = '89.3938';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        setWeather({
          temperature: data.main.temp,
          humidity: data.main.humidity,
          icon: data.weather[0].icon,
        });

        console.log(data.weather[0].icon);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const renderWeatherIcon = () => {
    if (weather && weather.icon) {
      return (
        <Image
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          width="90"
          height="90"
        />
      );
    }
    return null;
  };

  return (
    <div className="justify-start bg-gradient-to-b from-sky-300 to-blue-400 p-4 rounded-lg">
      <div className="flex justify-evenly">
        {renderWeatherIcon()}
        {renderWeatherIcon()}
        {renderWeatherIcon()}
      </div>
      <div className="border-b-1 border-gray-300 my-2" />
      {isLoading ? (
        <p>Loading weather data...</p>
      ) : (
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-black font-bold">Temperature</p>
            <p className="text-black">{weather.temperature}°C</p>
          </div>
          <div>
            <p className="text-sm text-black font-bold">Humidity</p>
            <p className="text-black">{weather.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
