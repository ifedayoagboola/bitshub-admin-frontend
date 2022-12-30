import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const signin = createAsyncThunk(
  "users/signin",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await Axios.post(
        `${BASE_URL}/api/users/signin`,
        credentials
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
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
  userInfo: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [signin.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [signin.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action?.payload;
    },
    [signin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reducer, actions } = userSlice;

export default reducer;
