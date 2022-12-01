import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
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

// Action creators are generated for each case reducer function
export const { productRequest, productSuccess, productError } =
  productSlice.actions;

export default productSlice.reducer;
