import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRobotsAPI } from '../API/robotsAPI';

const url = 'https://jsonplaceholder.typicode.com/users';

const initialState = {
  robots: [],
  status: 'idle',
};

export const fetchRobotsAsync = createAsyncThunk(
  'features/fetchRobots',
  async () => {
    const response = await fetchRobotsAPI(url);
    return response;
  }
);

export const fetchRobotsSlice = createSlice({
  name: 'Robots',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchRobotsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRobotsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.robots = action.payload;
      });
  },
});

export default fetchRobotsSlice.reducer;
