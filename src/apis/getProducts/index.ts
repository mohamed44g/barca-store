import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../config/axois.config";

export const getProducts = createAsyncThunk(
  "Cart/getProducts",
  // Declare the type your function argument here:
  async ({ url }: { url: string }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axiosInstance.get(`${url}`);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
