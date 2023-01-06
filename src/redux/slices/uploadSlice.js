import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = "http://localhost:4000";

export const uploadImage = createAsyncThunk(
  "product/upload",
  async (bodyFormData, { rejectWithValue, getState }) => {
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        `${BASE_URL}/api/upload`,
        bodyFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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

const initialState = {
  loading: false,
  error: false,
  uploadSuccess: false,
  imageUrl: {},
};

export const uploadSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [uploadImage.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [uploadImage.fulfilled]: (state, action) => {
      state.loading = false;
      state.uploadSuccess = true;
      state.imageUrl = action?.payload;
    },
    [uploadImage.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reducer, actions } = uploadSlice;

export default reducer;
