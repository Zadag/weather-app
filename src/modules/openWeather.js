// api-key: 6c16dfc542501b66b2321dded2954117

async function getDailyWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c16dfc542501b66b2321dded2954117`,
    { mode: 'cors' },
  );
  const weather = await response.json();
  console.log(weather);
}

export default getDailyWeather;
