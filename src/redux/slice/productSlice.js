import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: false,
    products: [],
  },
  reducers: {
    productRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    productSuccess: (state, action) => {
      state.loading = false;
      state.products = action?.payload;
    },
    productError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    loading: false,
    error: false,
    productDetails: {},
  },
  reducers: {
    productDetailsRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    productDetailsSuccess: (state, action) => {
      state.loading = false;
      state.products = action?.payload;
    },
    productDetailsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { productRequest, productSuccess, productError } =
  productSlice.actions;
export const {
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsError,
} = productDetailsSlice.actions;

export default productSlice.reducer;
