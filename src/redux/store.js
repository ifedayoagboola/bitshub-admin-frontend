import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { orderSlice } from "./slices/orderSlice";
import { productSlice } from "./slices/productSlice";
import { uploadSlice } from "./slices/uploadSlice";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userSignin: userSlice.reducer,
    products: productSlice.reducer,
    singleProduct: productSlice.reducer,
    productUpdate: productSlice.reducer,
    createProduct: productSlice.reducer,
    deleteProduct: productSlice.reducer,
    uploadProductImages: uploadSlice.reducer,
    listOrders: orderSlice.reducer,
    singleOrder: orderSlice.reducer,
    deliverOrder: orderSlice.reducer,
  },
});
