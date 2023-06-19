import React, { useEffect, useState } from 'react';
import { getLocationKey, getHourlyForecast } from '@/utils/weather';
import Loader from '@/components/Loader';

const WeatherForecast = ({ forecastData }) => {
  const forecastItems = forecastData.map((data) => {
    const time = data.DateTime.slice(11, 16);
    const icon = data.WeatherIcon;
    const temperature = data.Temperature.Value;

    return (
      <div
        key={data.DateTime}
        className="flex flex-col items-center justify-center bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2
      hover:transform hover:scale-105 transition-transform"
      >
        <div className="text-sm text-gray-500 px-3 py-1">{time}</div>
        <div>
          <img
            src={`https://developer.accuweather.com/sites/default/files/${
              icon < 10 ? '0' : ''
            }${icon}-s.png`}
            alt={data.IconPhrase}
          />
        </div>
        <div className="text-sm text-gray-600 px-3 py-1">
          {temperature}&deg;
        </div>
      </div>
    );
  });
  return <div className="flex gap-4">{forecastItems}</div>;
};

const SideWeather = () => {
  return <div>Sidebar</div>;
};

const Highlights = () => {
  return <div>Highligts goes here</div>;
};

const weather = () => {
  const lat = '26.8603';
  const lon = '89.3938';
  const [locationKey, setLocationKey] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        // get the locationKey
        const locationData = await getLocationKey(lat, lon);
        setLocationKey(locationKey);

        // get the hourly weather forecast: 12 hours
        const data = await getHourlyForecast(locationData.Key);
        setForecastData(data);
      } catch (e) {
        console.log('Error fetching weather data:', e);
      }
    }
    fetchWeatherData();
  }, []);

  return (
    <div className="pt-14 md:pt-2">
      <div className="m-4 md:mx-16 lg:mx-18">
        <h2 className="font-semibold text-[#222328] text-[32px]">Weather</h2>

        <div
          className="inline-block w-full lg:grid lg:grid-cols-2 gap-4"
          style={{ gridTemplateColumns: '1fr 3fr' }}
        >
          <div>
            <div>
              <SideWeather />
            </div>
          </div>

          <div>
            {forecastData ? (
              <WeatherForecast forecastData={forecastData} />
            ) : (
              <Loader />
            )}
            <div>
              <Highlights />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default weather;
