import { createSlice } from "@reduxjs/toolkit";

export const cartProductSlice = createSlice({
  name: "cart",
  initialState: [],
  reduces: {
    addProduct: (state, action) => {
      state.push(action.paylod);
    },
    deleteProduct: (state, action) => {},
    deleteAll: () => {
      return [];
    },
    increment: (state, action) => {},
    decrement: (state, action) => {},
  },
});

export const { addProduct, deleteProduct, deleteAll, increment, decrement } =
  cartProductSlice.actions;

export default cartProductSlice.reducer;
