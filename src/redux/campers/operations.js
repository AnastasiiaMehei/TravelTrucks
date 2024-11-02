import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters, thunkAPI) => {
    try {
      const { location, form, transmission, features } = filters;

      // Створення об'єкта параметрів запиту
      const params = {};

      if (location) {
        params.location = location;
      }
      if (form) {
        params.form = form;
      }
      if (transmission) {
        params.transmission = transmission;
      }
      if (features) {
        // Додаємо кожну функцію як окремий параметр, якщо вона встановлена в true
        Object.keys(features).forEach((feature) => {
          if (features[feature]) {
            params[feature] = true;
          }
        });
      }

      const response = await axios.get("/campers", { params });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${camperId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
