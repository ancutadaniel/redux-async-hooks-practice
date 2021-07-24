import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  click: '',
};

export const searchField = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchField: (state, action) => {
      state.search = action.payload;
    },
    click: (state, action) => {
      console.log(action);
      state.click = 'updated';
    },
  },
});

export const { setSearchField, click } = searchField.actions;
export default searchField.reducer;
