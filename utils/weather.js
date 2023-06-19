// get the latitude and longitude values from database

// get the locationKey using lat & lon
export async function getLocationKey(lat, lon) {
  const response = await fetch(
    `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.NEXT_PUBLIC_ACUAWEATHER_KEY}&q=${lat},${lon}&details=true`
  );
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function getForecastWeather(key) {
  try {
    const response = await fetch(
      `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${key}?apikey=${process.env.NEXT_PUBLIC_ACCUWEATHER_KEY}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(`Forecast: ${JSON.stringify(data)}`);
    return data;
  } catch (error) {
    console.error(`Error fetching forecast: ${error}`);
  }
}

// get hourly weather forecast
export async function getHourlyForecast(locationKey) {
  const url = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${process.env.NEXT_PUBLIC_ACUAWEATHER_KEY}&language=en-us&details=true&metric=true`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(`Error fetching forecast: ${error}`);
    throw error;
  }
}

// get current weather condition
export async function getCurrentWeatherCondition(locationKey) {
  const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.NEXT_PUBLIC_ACUAWEATHER_KEY}&language=en-us&details=true&metric=true`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(`Error fetching forecast: ${error}`);
    throw error;
  }
}
