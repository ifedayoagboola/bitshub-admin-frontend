import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = "http://localhost:4000";

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

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product, { rejectWithValue, getState }) => {
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.put(
        `${BASE_URL}/api/products/${product.id}/update`,
        product,
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
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

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product, { rejectWithValue, getState }) => {
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(`${BASE_URL}/api/products`, product, {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      });
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
  updateSuccess: false,
  postSuccess: false,
  products: [],
  product: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productUpdateReset: (state) => {
      state.product = {};
    },
  },
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
    [updateProduct.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [updateProduct.fulfilled]: (state) => {
      state.loading = false;
      state.updateSuccess = true;
    },
    [updateProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    },
    [createProduct.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [createProduct.fulfilled]: (state) => {
      state.loading = false;
      state.postSuccess = true;
    },
    [createProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reducer, actions } = productSlice;
export const { productUpdateReset } = actions;

export default reducer;
