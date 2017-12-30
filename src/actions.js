import { getForecast } from './services';

export const fetchWeather = (lat, long) => async dispatch => {
  dispatch(fetchWeatherPending());
  try {
    const response = await getForecast(lat, long);
    dispatch(fetchWeatherSuccess(response));
  } catch (error) {
    dispatch(fetchWeatherError(error));
  }
};

export const fetchWeatherPending = () => ({
  type: WEATHER_FETCH_PENDING,
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
