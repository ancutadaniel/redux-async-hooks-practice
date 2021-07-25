import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchField from '../app/features/searchField';
import fetchRobotsSlice from '../app/features/fetchRobots';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  searchField,
  fetchRobotsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});
