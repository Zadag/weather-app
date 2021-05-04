// api-key: 6c16dfc542501b66b2321dded2954117

const getWeather = async (city) => {
  // First API call used to get city coordinates
  const coordsResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c16dfc542501b66b2321dded2954117`,
    { mode: 'cors' },
  );
  const coords = await coordsResponse.json();

  // Second call gets current, daily weather forecast
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.coord.lat}&lon=${coords.coord.lon}&exclude=minutly,alerts&appid=6c16dfc542501b66b2321dded2954117`,
  );
  const weather = await weatherResponse.json();

  return weather;
};

export default getWeather;
