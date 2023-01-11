import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = "http://localhost:4000";

export const listOrders = createAsyncThunk(
  "orders/listOrders",
  async (_, { rejectWithValue, getState }) => {
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.get(`${BASE_URL}/api/orders`, {
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
export const orderDetails = createAsyncThunk(
  "orders/orderDetails",
  async (orderId, { rejectWithValue, getState }) => {
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.get(`${BASE_URL}/api/orders/${orderId}`, {
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
  orders: [],
  order: {},
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    [listOrders.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [listOrders.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = action?.payload;
    },
    [listOrders.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    },
    [orderDetails.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [orderDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.order = action?.payload;
    },
    [orderDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reducer, actions } = orderSlice;

export default reducer;
