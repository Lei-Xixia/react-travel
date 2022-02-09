import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { checkOut } from "../shoppingCart/slice";
import { orderItem } from "./placeOrder";

interface OrderState {
  loading: boolean;
  error: undefined | null;
  currentOrder: any;
}

const initialState: OrderState = {
  loading: false,
  error: null,
  currentOrder: null,
};

// 获取详情数据
export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async ({ jwt, orderId }: { jwt: string; orderId: string }) => {
    // const { data } = await axios.post(
    //   `http://123.56.149.216:8080/api/orders/${orderId}/placeOrder`,
    //   null,
    //   {
    //     headers: {
    //       Authorization: `bearer ${jwt}`,
    //     },
    //   }
    // );
    // return data;
    return orderItem;
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    [placeOrder.pending.type]: (state) => {
      state.loading = true;
    },
    [placeOrder.fulfilled.type]: (state, action) => {
      state.currentOrder = action.payload;
      state.loading = false;
      state.error = null;
    },
    [placeOrder.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [checkOut.pending.type]: (state) => {
      state.loading = true;
    },
    [checkOut.fulfilled.type]: (state, action) => {
      state.currentOrder = action.payload;
      state.loading = false;
      state.error = null;
    },
    [checkOut.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
