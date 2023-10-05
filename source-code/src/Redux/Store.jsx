import { configureStore } from "@reduxjs/toolkit";
import cartProductSlice from "./slices/Cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartProductSlice,
  },
});
