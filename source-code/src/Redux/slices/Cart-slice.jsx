import { createSlice } from "@reduxjs/toolkit";

const cartProductSlice = createSlice({
  name: "cart",
  initialState: [],
  reduces: {
    addProduct: (state, action) => {
      state.push(action.paylod);
    },
    deleteProduct: (state, action) => {

    },
    deleteAll: () => {
      return [];
    },
    increment: (state, action) => {

    },
    decrement: (state, action) => {
      
    },
  },
});
export default cartProductSlice;
