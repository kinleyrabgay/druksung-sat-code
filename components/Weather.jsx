import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Loader from './Loader';
import { getLocationKey, getCurrentWeatherCondition } from '@/utils/weather';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchWeatherData() {
      // try {
      //   const lat = '26.8603';
      //   const lon = '89.3938';
      //   // get the locationKey
      //   const locationData = await getLocationKey(lat, lon);
      //   const weatherData = await getCurrentWeatherCondition(locationData.Key);
      //   console.log(weatherData);
      //   setWeather({
      //     place: locationData.LocalizedName,
      //     temperatureValue: weatherData[0].Temperature.Metric.Value,
      //     temperatureUnit: weatherData[0].Temperature.Metric.Unit,
      //     description: weatherData[0].WeatherText,
      //     humidity: weatherData[0].RelativeHumidity,
      //     icon: weatherData[0].WeatherIcon,
      //     windDirection: weatherData[0].Wind.Direction.English,
      //     windDirectionDegree: weatherData[0].Wind.Direction.Degrees,
      //     windSpeed: weatherData[0].Wind.Speed.Metric.Value,
      //     windSpeedValue: weatherData[0].Wind.Speed.Metric.Unit,
      //   });
      //   console.log(data.weather[0].icon);
      //   console.log(data);
      // } catch (error) {
      //   console.error('Error fetching weather data:', error);
      // } finally {
      //   setIsLoading(false);
      // }
    }

    fetchWeatherData();
  }, []);

  const renderWeatherIcon = () => {
    if (weather && weather.icon) {
      const baseUrl = 'https://developer.accuweather.com/sites/default/files/';
      const iconNumber = weather.icon < 10 ? `0${weather.icon}` : weather.icon;
      const iconUrl = `${baseUrl}${iconNumber}-s.png`;

      return <Image src={iconUrl} width="90" height="90" alt="weather-image" />;
    }
    return null;
  };

  return (
    <div className="justify-start bg-gradient-to-b from-sky-600 to-blue-800 p-4 rounded-lg">
      <div className="flex justify-center items-center">
        {isLoading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <div>
            <p className="text-white text-center text-xl">{weather.place}</p>
            <div className="py-12">
              <p className="text-white text-6xl text-center p-4">
                {weather.temperatureValue}°
                <sup
                  style={{ fontSize: '0.28em', verticalAlign: 'super' }}
                  className="text-2xl font-semibold"
                >
                  {weather.temperatureUnit}
                </sup>
              </p>
              <p className="text-white text-center">{weather.description}</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-evenly">
        {renderWeatherIcon()}
        {renderWeatherIcon()}
        {renderWeatherIcon()}
      </div>
      <div className="border-b-1 border-gray-300 my-2" />
      {isLoading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <div className="flex justify-between">
          <div>
            <p className="text-white">Wind Speed</p>
            <p className="text-gray-300">
              {weather.windSpeed} {weather.windSpeedValue}
            </p>
          </div>
          <div>
            <p className="text-white">Humidity</p>
            <p className="text-gray-300">{weather.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
