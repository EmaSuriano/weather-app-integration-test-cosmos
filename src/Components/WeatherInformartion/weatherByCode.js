import React from 'react';
import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';

const CONFIG = [
  {
    weather: <Sunny />,
    code: [1000],
  },
  {
    weather: <Cloudy />,
    code: [1003, 1006, 1009],
  },
  {
    weather: <Cloudy patchy />,
    code: [1030, 1135],
  },
  {
    weather: <Snow />,
    code: [
      1114,
      1117,
      1147,
      1198,
      1201,
      1207,
      1213,
      1219,
      1225,
      1237,
      1252,
      1255,
      1258,
      1261,
      1264,
    ],
  },
  {
    weather: <Snow patchy />,
    code: [1066, 1069, 1072, 1204, 1210, 1216, 1222, 1279],
  },
  {
    weather: <Rain />,
    code: [1153, 1168, 1171, 1183, 1186, 1189, 1243, 1249],
  },
  {
    weather: <Rain patchy />,
    code: [1063, 1150, 1240],
  },
  {
    weather: <Rain lighting />,
    code: [1087, 1192, 1195, 1246, 1276, 1282],
  },
  {
    weather: <Rain patchy lighting />,
    code: [1180, 1273],
  },
];

const buildIconsConfig = config =>
  CONFIG.reduce((obj, item) => {
    const parsedCodes = item.code.reduce(
      (newCodes, code) => ({ ...newCodes, [code]: item.weather }),
      {},
    );
    return {
      ...obj,
      ...parsedCodes,
    };
  }, {});

export default buildIconsConfig();
