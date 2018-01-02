import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import WeatherIcon from './WeatherIcon';
import { DATE_FORMAT } from 'constants';

const CardContainer = styled.div`
  background: #fff;
  border-radius: 2px;
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 3px
    ${props =>
      props.current
        ? 'coral, 0 1px 2px coral'
        : 'rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  &:hover {
    box-shadow: 0 14px 28px
      ${props =>
        props.current
          ? 'coral, 0 10px 10px rgba(0, 0, 0, 0.22)'
          : 'rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'};
  }
`;

const Temp = styled.span`
  font-weight: ${props => props.bold && 'bold'};
`;

const TempContainer = styled.div`
  margin: 20px;
`;

export default class WeatherCard extends Component {
  static propTypes = {
    date: PropTypes.string,
    condition: PropTypes.number,
    maxTemp: PropTypes.number,
    minTemp: PropTypes.number,
  };

  render() {
    const { date, condition, maxTemp, minTemp } = this.props;
    const momentDate = moment(date, DATE_FORMAT);
    const isCurrentDay = momentDate.isSame(moment(), 'day');
    return (
      <CardContainer current={isCurrentDay}>
        <h3>{momentDate.format('dddd')}</h3>
        <WeatherIcon code={condition} />
        <TempContainer>
          <Temp bold>{maxTemp} °</Temp>
          <Temp>- {minTemp} °</Temp>
        </TempContainer>
      </CardContainer>
    );
  }
}
