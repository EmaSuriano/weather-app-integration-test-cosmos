// import { takeLatest, put, call } from 'redux-saga/effects';
// import { fetchWeatherError, WEATHER_FETCH_PENDING } from './actions';
//
// function* fetchWeather() {
//   console.log('fetchingWeather');
//
//   fetch(
//     'http://samples.openweathermap.org/data/2.5/forecast?id=3433955&appid=1727553c69e9fc41f87f3f823f1963ba',
//   )
//     .then(function* onSuccess(body){
//       const responseBody = response.json();
//       return yield put(fetchWeatherSuccess(responseBody.records));
//     })
//     .catch(function* onError(error) {
//       return yield put(fetchWeatherError(error));
//     });
// }
//
// export default function* onFetchRecords() {
//   yield takeLatest(WEATHER_FETCH_PENDING, fetchWeather);
// }
