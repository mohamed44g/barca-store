import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../config/axois.config";

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (url: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const token = JSON.parse(`${localStorage.getItem("jwt")}`);
    try {
      const { data } = await axiosInstance.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data?.newToken) {
        localStorage.setItem("jwt", JSON.stringify(data?.newToken));
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
