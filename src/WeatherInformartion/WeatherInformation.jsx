import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class WeatherInformation extends PureComponent {
  static propTypes = {
    fetchWeather: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
  };

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(({ coords }) =>
      this.props.fetchWeather(coords.latitude, coords.longitude),
    );
  }

  render() {
    return <p>My Weather Information {this.props.isLoading ? 'alal' : 'pepe'} </p>;
  }
}
