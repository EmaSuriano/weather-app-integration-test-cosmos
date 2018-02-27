const buildUrl = (lat, long) => {
  const apiKey = '382ff7b58e12402a8f0175403171512';
  const baseUrl = 'https://api.apixu.com';
  return `${baseUrl}/v1/forecast.json?key=${apiKey}&q=${lat},${long}&days=6`;
};

const parseJson = response => response.json();

const parseResponseToForecast = response => {
  const forecast = response.forecast.forecastday.map(({ date, day }) => ({
    date,
    condition: day.condition.code,
    maxTemp: day.maxtemp_c,
    minTemp: day.mintemp_c,
  }));
  const location = {
    country: response.location.country,
    city: response.location.name,
  };

  return {
    forecast,
    location,
  };
};

export const getForecast = (lat, long) =>
  fetch(buildUrl(lat, long))
    .then(parseJson)
    .then(parseResponseToForecast);
