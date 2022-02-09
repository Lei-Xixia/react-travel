import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

interface UserState {
  loading: boolean;
  error: null | string;
  token: string | null;
}

const initialState: UserState = {
  loading: false,
  error: null,
  token: null,
};

export const signIn = createAsyncThunk(
  "User/signIn",
  async (paramaters: { email: string; password: string }, thunkAPI) => {
    // const { data } = await axios.post(`http://123.56.149.216:8080/auth/login`, {
    //   email: paramaters.email,
    //   passwords: paramaters.password,
    const data = {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYWl3YW5nIiwibmFtZSI6IuS7o-e9lCJ9.eAhOSo3wdOj7FhoHEdt-x0L5QKc69JIXIVFgb6E1p9g",
    };
    return data.token;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.token = action.payload;
      state.loading = false;
      state.error = null;
    },
    [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
