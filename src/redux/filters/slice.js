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
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
    },
    toggleFeature(state, action) {
      const feature = action.payload;
      state.features[feature] = !state.features[feature];
    },
  },
});

export const { setFilterLocation } = filtersSlice.actions;
export default filtersSlice.reducer;