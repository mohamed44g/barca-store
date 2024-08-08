import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../../apis/getProducts";
const initialState = {
    loading: true,
    Products: [],
    error: null,
};
export const CartSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.Products = action.payload;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});
export default CartSlice.reducer;
