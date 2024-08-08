import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./reducers/CartSlice";
import ProductSlice from "./reducers/ProductSlice";
const store = configureStore({
    reducer: {
        Cart: CartSlice,
        Products: ProductSlice,
    },
});
export default store;
