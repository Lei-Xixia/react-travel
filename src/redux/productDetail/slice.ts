import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { touristRoutes } from "./touristRoutes";

interface ProductDetailState {
  loading: boolean;
  error: null | string;
  data: any;
}

const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: touristRoutes,
};

// 获取详情数据
export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
  async (touristRouteId: string, thunkAPI) => {
    // const { data } = await axios.get(
    //   `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`
    // );
    const { data } = await axios.get(`/api/touristRoutes/${touristRouteId}`);
    return touristRoutes;
  }
);

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
  },
  extraReducers: {
    [getProductDetail.pending.type]: (state) => {
      state.loading = true;
    },
    [getProductDetail.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getProductDetail.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
