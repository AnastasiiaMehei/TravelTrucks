import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    form: "",
    transmission: "",
    engine: "",
    features: [],
  },
  reducers: {
    setFilterLocation(state, action) {
      state.location = action.payload;
    },
    setFilterForm(state, action) {
      state.form = action.payload;
    },
    setTransmission(state, action) {
      state.transmission = action.payload;
    },
    setEngine(state, action) {
      state.engine = action.payload;
    },
    toggleFeature(state, action) {
      const feature = action.payload;
      if (typeof feature === "string") {
        state.features = state.features.includes(feature)
          ? state.features.filter((f) => f !== feature)
          : [...state.features, feature];
      }
    },
  },
});

export const {
  setFilterLocation,
  setFilterForm,
  toggleFeature,
  setTransmission,
  setEngine,
} = filtersSlice.actions;
export default filtersSlice.reducer;
