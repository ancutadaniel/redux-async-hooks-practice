import { configureStore } from '@reduxjs/toolkit';
import searchField from '../app/features/searchField';
import fetchRobotsSlice from '../app/features/fetchRobots';

export const store = configureStore({
  reducer: {
    searchField,
    fetchRobotsSlice,
  },
});
