import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = "http://localhost:4000";
const customId = "custom-id-yes";

export const signin = createAsyncThunk(
  "users/signin",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await Axios.post(
        `${BASE_URL}/api/users/signin`,
        credentials
      );
      localStorage?.setItem("userInfo", JSON.stringify(data));
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
  userInfo: localStorage?.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
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
