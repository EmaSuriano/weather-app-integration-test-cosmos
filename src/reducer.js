
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { WEATHER_FETCH_ERROR, WEATHER_FETCH_PENDING, WEATHER_FETCH_SUCCESS } from './actions';

const initialState = {
  loading: false,
  error: false,
  data: [],
};

function myReducer(state = initialState, action) {
  switch (action.type) {
    case WEATHER_FETCH_PENDING:
      return {
        ...initialState,
        loading: true,
      };
    case WEATHER_FETCH_ERROR:
      return {
        ...initialState,
        error: action.error,
      };
    case WEATHER_FETCH_SUCCESS:
      return {
        ...initialState,
        data: action.payload,
      };
    default:
      return state;
  }
}

const getMyReducer = state => state.myReducer;

export const isLoading = createSelector(getMyReducer, reducer => reducer.loading);

export const hasError = createSelector(getMyReducer, reducer => !!reducer.error);

const myApp = combineReducers({
  myReducer,
});

export default myApp;
