import connect from 'redux-object-connect';
import WeatherInformation from './WeatherInformation';
import { fetchWeather } from '../actions';
import { isLoading } from '../reducer';

const mapStateToProps = {
  isLoading,
};

const mapDispatchToProps = {
  fetchWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInformation);
