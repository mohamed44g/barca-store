import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../config/axois.config";

export const addToCart = createAsyncThunk(
  "Cart/addToCart",
  // Declare the type your function argument here:
  async (productData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const token = JSON.parse(`${localStorage.getItem("jwt")}`);
      const { data } = await axiosInstance.post("/users/cart", productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProductsCart = createAsyncThunk(
  "Cart/getProductsCart",
  // Declare the type your function argument here:
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const token = JSON.parse(`${localStorage.getItem("jwt")}`);
    try {
      const { data } = await axiosInstance.get("/users/cart", {
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
