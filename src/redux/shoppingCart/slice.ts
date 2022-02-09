import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addProductList as add } from "./addShoppingCartItem";
import { clearProductList as clear } from "./clearShoppingCartItem";
import { productList as get } from "./getShoppingCart";

interface ShoppingCartState {
  loading: boolean;
  error: null | string;
  items: any[];
}

const initialState: ShoppingCartState = {
  loading: true,
  error: null,
  items: [],
};

// 获取购物车商品
export const getShoppingCart = createAsyncThunk(
  "shoppingCart/getShoppingCart",
  async (jwt: string) => {
    const { data } = await axios.get(
      // `http://123.56.149.216:8080/api/shoppingCart`,
      `/api/shoppingCart/getShoppingCart`,
      {
        headers: {
          Authorization: `bearer ${jwt}`,
        },
      }
    );
    // return data.shoppingCartItems;
    return get;
  }
);

// 添加购物车
export const addShoppingCartItem = createAsyncThunk(
  "shoppingCart/addShoppingCartItem",
  async ({jwt, touristRouteId} : {jwt: string; touristRouteId: string})=> {
    return add;
  }
  // async (parameters: { jwt: string; touristRouteId: string }, thunkAPI) => {
  //   const { data } = await axios.post(
  //     `http://123.56.149.216:8080/api/shoppingCart/items`,
  //     {
  //       touristRouteId: parameters.touristRouteId,
  //     },
  //     {
  //       headers: {
  //         Authorization: `bearer ${parameters.jwt}`,
  //       },
  //     }
  //   );
  //   return data.shoppingCartItems;
  // }
);

// 清空购物车
// export const clearShoppingCartItem = createAsyncThunk(
//   "shoppingCart/clearShoppingCartItem",
//   async (parameters: { jwt: string; itemIds: number[] }, thunkAPI) => {
//     return await axios.delete(
//       `http://123.56.149.216:8080/api/shoppingCart/items/(${parameters.itemIds.join(
//         ","
//       )})`,
//       {
//         headers: {
//           Authorization: `bearer ${parameters.jwt}`,
//         },
//       }
//     );
//   }
// );
export const clearShoppingCartItem = createAsyncThunk(
  "shoppingCart/clearShoppingCartItem",
  async ({ jwt, itemsId }: { jwt: string; itemsId: number[] }) => {
    await axios.delete(`/api/shoppingCart/clearShoppingCartItem`, {
      headers: {
        Authorization: `bearer ${jwt}`,
      },
    });
    return clear;
  }
);

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: {
    [getShoppingCart.pending.type]: (state) => {
      state.loading = true;
    },
    [getShoppingCart.fulfilled.type]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getShoppingCart.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    [addShoppingCartItem.pending.type]: (state) => {
      state.loading = true;
    },
    [addShoppingCartItem.fulfilled.type]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    [addShoppingCartItem.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    [clearShoppingCartItem.pending.type]: (state) => {
      state.loading = true;
    },
    [clearShoppingCartItem.fulfilled.type]: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
    [clearShoppingCartItem.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
