import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { productSlice } from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productSlice.reducer,
    singleProduct: productSlice.reducer,
  },
});
