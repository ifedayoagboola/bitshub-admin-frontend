import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { productSlice } from "./slices/productSlice";
import { uploadSlice } from "./slices/uploadSlice";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productSlice.reducer,
    singleProduct: productSlice.reducer,
    productUpdate: productSlice.reducer,
    createProduct: productSlice.reducer,
    deleteProduct: productSlice.reducer,
    userSignin: userSlice.reducer,
    uploadProductImages: uploadSlice.reducer,
  },
});
