export const fetchWeather = (lat, long) => dispatch => {
  dispatch(fetchWeatherPending(lat, long));
  fetch(
    'http://samples.openweathermap.org/data/2.5/forecast?id=3433955&appid=1727553c69e9fc41f87f3f823f1963ba',
  )
    .then(response => {
      const responseBody = response.json();
      dispatch(fetchWeatherSuccess(responseBody));
    })
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
