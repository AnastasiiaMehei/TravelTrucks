import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";
export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};


// GET @ /campers
export const fetchCampers = createAsyncThunk(
    "campers/fetchAll",
    async (_, thunkAPI) => {
      try {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        console.log("Token in fetchCampers:", token);
        if (token) {
          setAuthHeader(token);
        }
        const res = await axios.get("/campers");
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
// GET// /campers /{camperId}
export const getCamper = createAsyncThunk(
    "campers/getCamper",
    async ({ camperId, getCamper }, thunkAPI) => {
      try {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        if (token) {
          setAuthHeader(token);
        }
        const response = await axios.patch(`/campers/${camperId}`, getCamper);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  