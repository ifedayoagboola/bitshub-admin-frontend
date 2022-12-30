import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { productSlice } from "./slices/productSlice";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productSlice.reducer,
    singleProduct: productSlice.reducer,
    productUpdate: productSlice.reducer,
    userSignin: userSlice.reducer,
  },
});
