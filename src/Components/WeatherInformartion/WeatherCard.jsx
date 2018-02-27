import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import { DATE_FORMAT } from 'constants';
import weatherByCode from './weatherByCode';

const CardContainer = styled.div`
  background: ${({ current }) => (current ? 'aliceblue' : 'white')};
  border-radius: 2px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
    // const theme = {
    //   backgroundColor: isCurrentDay ? INDIGO_LIGHT : WHITE,
    //   color: 'blue',
    // };

    const weather = weatherByCode[condition];

    return (
      <CardContainer current={isCurrentDay}>
        <h4>{momentDate.format('dddd')}</h4>
        {weather}
        <TempContainer>
          <Temp bold>{maxTemp} °</Temp>
          <Temp>- {minTemp} °</Temp>
        </TempContainer>
      </CardContainer>
    );
  }
}
