import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import productReducer from "./slice/productSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, products: productReducer },
});
