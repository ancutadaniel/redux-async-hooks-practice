import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRobotsAPI } from '../API/robotsAPI';

const url = 'https://jsonplaceholder.typicode.com/users';

const initialState = {
  robots: [],
  status: 'idle',
  error: null,
};

export const fetchRobotsAsync = createAsyncThunk('API/robotsAPI', async () => {
  const response = await fetchRobotsAPI(url);
  console.log(response);
  return response;
});

export const fetchRobotsSlice = createSlice({
  name: 'Robots',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchRobotsAsync.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchRobotsAsync.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.robots = action.payload;
      })
      .addCase(fetchRobotsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});

export default fetchRobotsSlice.reducer;
