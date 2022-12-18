import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const listProducts = createAsyncThunk(
  "products/listProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await Axios.get(`${BASE_URL}/api/products`);
      return data;
    } catch (error) {
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue(err);
    }
  }
);

export const productDetails = createAsyncThunk(
  "products/productDetails",
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await Axios.get(`${BASE_URL}/api/products/${productId}`);
      return data;
    } catch (error) {
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue(err);
    }
  }
);

const initialState = {
  loading: false,
  error: false,
  products: [],
  product: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [listProducts.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [listProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action?.payload;
    },
    [listProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    },
    [productDetails.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [productDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action?.payload;
    },
    [productDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reducer, actions } = productSlice;

export default reducer;
