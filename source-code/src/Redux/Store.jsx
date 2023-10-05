import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/Cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
