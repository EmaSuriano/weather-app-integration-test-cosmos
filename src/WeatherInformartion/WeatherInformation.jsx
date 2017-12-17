import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-svg-spinner';
import ErrorMessage from './ErrorMessage';
import WeatherCard from './WeatherCard';
import LocationBar from './LocationBar';

export default class WeatherInformation extends PureComponent {
  static propTypes = {
    fetchWeather: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    isBroken: PropTypes.bool,
    location: PropTypes.object,
    forecast: PropTypes.array,
  };

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(({ coords }) =>
      this.props.fetchWeather(coords.latitude, coords.longitude),
    );
  }

  render() {
    const { isLoading, isBroken, location, forecast = [] } = this.props;
    if (isLoading) return <Spinner size="64px" color="orange" />;
    if (isBroken) return <ErrorMessage />;
    return (
      <div>
        <LocationBar location={location} />
        {forecast.map(weather => <WeatherCard key={weather.date} {...weather} />)}
      </div>
    );
  }
}
