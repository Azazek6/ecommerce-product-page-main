import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/CartShop/CartSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
