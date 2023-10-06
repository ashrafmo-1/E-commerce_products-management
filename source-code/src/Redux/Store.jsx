import { configureStore } from "@reduxjs/toolkit";
import cartProductSlice from "./slices/cart-slice";

export const RTLstore = configureStore({
  reducer: {
    cart: cartProductSlice,
  },
});
