import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = "http://localhost:4000";
const customId = "custom-id-yes";

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
      await Axios.put(
        `${BASE_URL}/api/products/${product.id}/update`,
        product,
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      toast.success("Product updated successfully", {
        toastId: customId,
      });
    } catch (error) {
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      toast.error(err, {
        toastId: customId,
      });
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
      toast.success("Product created successfully", {
        toastId: customId,
      });
      return data;
    } catch (error) {
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      toast.error(err, {
        toastId: customId,
      });
      return rejectWithValue(err);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId, { rejectWithValue, getState }) => {
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      await Axios.delete(`${BASE_URL}/api/products/${productId}/delete`, {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      });
      toast.success("Product successfully deleted!", {
        toastId: customId,
      });
    } catch (error) {
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      toast.error(err, {
        toastId: customId,
      });
      return rejectWithValue(err);
    }
  }
);

const initialState = {
  loading: false,
  error: false,
  updateSuccess: false,
  postSuccess: false,
  deleteSuccess: false,
  products: [],
  product: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productReset: (state) => {
      state.loading = false;
      state.deleteSuccess = false;
      state.postSuccess = false;
      state.updateSuccess = false;
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
    [deleteProduct.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [deleteProduct.fulfilled]: (state) => {
      state.loading = false;
      state.deleteSuccess = true;
    },
    [deleteProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reducer, actions } = productSlice;
export const { productReset } = actions;

export default reducer;
