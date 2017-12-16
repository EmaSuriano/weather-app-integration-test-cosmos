const apiKey = '382ff7b58e12402a8f0175403171512';
const baseUrl = 'http://api.apixu.com';

const parseResponseToJson = response => {
  debugger;
  return response.json();
};

const parseResponseToForecast = response => {
  debugger;
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
export const fetchWeather = (lat, long) => dispatch => {
  dispatch(fetchWeatherPending(lat, long));
  const urlParams = `/v1/forecast.json?key=${apiKey}&q=${lat},${long}&days=6`;
  fetch(baseUrl + urlParams)
    .then(parseResponseToJson)
    .then(parseResponseToForecast)
    .then(parsedResponse => dispatch(fetchWeatherSuccess(parsedResponse)))
    .catch(error => dispatch(fetchWeatherError(error)));
};

export const fetchWeatherPending = (lat, long) => ({
  type: WEATHER_FETCH_PENDING,
  lat,
  long,
});

export const fetchWeatherSuccess = payload => ({
  type: WEATHER_FETCH_SUCCESS,
  payload,
});

export const fetchWeatherError = error => ({
  type: WEATHER_FETCH_ERROR,
  error,
});

export const WEATHER_FETCH_PENDING = 'WEATHER_FETCH_PENDING';
export const WEATHER_FETCH_SUCCESS = 'WEATHER_FETCH_SUCCESS';
export const WEATHER_FETCH_ERROR = 'WEATHER_FETCH_ERROR';
