import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-svg-spinner';
import styled from 'styled-components';
import ErrorMessage from 'Components/ErrorMessage';
import WeatherCard from './WeatherCard';

const WeatherCardContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => props.minWidth + 'px'}, 1fr)
  );
  grid-auto-rows: 250px;
  margin: 50px;
  justify-self: stretch;
`;

export default class WeatherInformation extends PureComponent {
  static propTypes = {
    fetchWeather: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    isBroken: PropTypes.bool,
    forecast: PropTypes.array,
  };

  componentWillMount() {
    // navigator.geolocation.getCurrentPosition(({ coords }) =>
    //   this.props.fetchWeather(coords.latitude, coords.longitude),
    // );
    this.props.fetchWeather();
  }

  render() {
    const { isLoading, isBroken, forecast } = this.props;
    if (isLoading) return <Spinner size="128px" color="coral" />;
    if (isBroken) return <ErrorMessage />;
    return (
      <WeatherCardContainer minWidth="200">
        {forecast.map(weather => (
          <WeatherCard key={weather.date} {...weather} />
        ))}
      </WeatherCardContainer>
    );
  }
}
