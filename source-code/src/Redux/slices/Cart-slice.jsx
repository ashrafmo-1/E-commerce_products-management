import { createSlice } from "@reduxjs/toolkit";

export const cartProductSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {},
    deleteAll: () => {
      return [];
    },
    increment: (state, action) => {},
    decrement: (state, action) => {},
  },
});

export const { add, deleteProduct, deleteAll, increment, decrement } =
  cartProductSlice.actions;

export default cartProductSlice.reducer;
