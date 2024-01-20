import { createSlice } from "@reduxjs/toolkit";

export const cartProductSlice = createSlice({
  name: "cart",
  initialState: [],
  cartItem: localStorage.getItem("product-information")
    ? localStorage.getItem("product-information")
    : [],
  reducers: {
    add: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const cloneProduct = { ...action.payload, quantity: 1 };
        state.push(cloneProduct);
      }
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    deleteAll: () => {
      return [];
    },
    increment: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      findProduct.quantity += 1;
    },
    decrement: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      findProduct.quantity -= 1;
      if (findProduct.quantity === 0) {
        findProduct.quantity = 1;
      }
    },
  },
});

export const { add, deleteProduct, deleteAll, increment, decrement } =
  cartProductSlice.actions;

export default cartProductSlice.reducer;
