// const apiKey = 'IIaQTq7Ihdmtdm1Wjk5wUOEwpkGqGAi2';
// const latitude = '26.8603'; // example latitude coordinate for New York City
// const longitude = '89.3938'; // example longitude coordinate for New York City

// async function getLocationKey(latitude, longitude) {
//   const response = await fetch(
//     `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude},${longitude}`
//   );
//   const data = await response.json();
//   return data.Key;
// }

// getLocationKey(latitude, longitude)
//   .then((locationKey) => {
//     console.log(locationKey); // prints the location key for the specified coordinates
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const apiKey = 'tv6kg6h0t233ADpcZenuK7lcltDpPhj6';
const locationKey = '201633';
const url = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${apiKey}&language=en-us&details=true&metric=true`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // Process the hourly forecast data here
  })
  .catch((error) => {
    console.error(`Error fetching forecast: ${error}`);
  });
