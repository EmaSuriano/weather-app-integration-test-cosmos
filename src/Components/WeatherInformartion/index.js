import connect from 'redux-object-connect';
import WeatherInformation from './WeatherInformation';
import { fetchWeather } from 'actions';
import { getForecast, getLocation, isBroken, isLoading } from 'reducer';

const mapStateToProps = {
  isLoading,
  isBroken,
  location: getLocation,
  forecast: getForecast,
};

const mapDispatchToProps = {
  fetchWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInformation);
