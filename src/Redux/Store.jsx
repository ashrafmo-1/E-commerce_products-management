import { configureStore } from "@reduxjs/toolkit";
import cartProductSlice from "./slices/Cart-slice";

export const RTLstore = configureStore({
  reducer: {
    cart: cartProductSlice,
  },
});
