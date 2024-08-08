import { createSlice } from "@reduxjs/toolkit";
import { addToCart, getProductsCart } from "../../../apis/getProductCart";
import { deleteProduct } from "../../../apis/deleteProductCart";

const initialState = {
  loading: true,
  cartItems: [],
  error: null,
  loggedIn: false,
};
export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedIn = true;
      state.cartItems = action.payload.data;
    });

    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as null;
    });

    //get products cart
    builder.addCase(getProductsCart.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProductsCart.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedIn = true;
      state.cartItems = action.payload;
    });

    builder.addCase(getProductsCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as null;
    });

    //delete products deleteProduct
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedIn = true;
      state.cartItems = action.payload;
    });

    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as null;
    });
  },
});

export default CartSlice.reducer;
