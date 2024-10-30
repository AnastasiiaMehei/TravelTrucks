// src/redux/filters/slice.js

import { createSlice } from '@reduxjs/toolkit';
// import { setFilterLocation } from './operations';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
  },
  reducers: {
    setFilterLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export const { setFilterLocation } = filtersSlice.actions;
export default filtersSlice.reducer;