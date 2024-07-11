/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
  products: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      if (state.amount > 0) {
        state.amount -= 1;
        return;
      }
    },
    addProducts: (state, actions) => {
      const { product, price, amount, total } = actions.payload;
      state.products.push({ ...state.products, product, price, amount, total });
    },
    removeProduct: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.products.length) {
        state.products.splice(index, 1);
      }
    },
  },
});

export const { increment, decrement, addProducts, removeProduct } =
  CartSlice.actions;

export default CartSlice.reducer;
