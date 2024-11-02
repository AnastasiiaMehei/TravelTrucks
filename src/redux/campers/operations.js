import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";
export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters, thunkAPI) => {
    try {
      const { location, form, features } = filters;

      // Створення об'єкта параметрів запиту
      const params = {};

      if (location) {
        params.location = location;
      }
      if (form) {
        params.form = form;
      }
      if (features && features.length > 0) {
        // Передача параметрів у вигляді рядка, розділеного комами
        params.features = features.join(',');
      }

      const response = await axios.get("/campers", { params });
      return response.data.items;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
  export const fetchCamperById = createAsyncThunk(
    'campers/fetchById',
    async (camperId, thunkAPI) => {
      try {
        const response = await axios.get(`/campers/${camperId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );