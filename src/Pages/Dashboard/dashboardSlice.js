import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchOrderBookData, fetchTickerData } from "./dashboardAPI";

const initialState = {
  btc_data: null,
  order_book_data: null,
  status: "idle",
};

// async requests for call & return api response.
export const setDataApiCall = createAsyncThunk("btc/fetchData", async () => {
  const ticker = await fetchTickerData();
  const orderBook = await fetchOrderBookData();
  return { ticker, orderBook };
});

// dashboard store for Ticker & Order Book
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(setDataApiCall.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setDataApiCall.fulfilled, (state, action) => {
        state.status = "idle";
        state.btc_data = action.payload.ticker;
        state.order_book_data = action.payload.orderBook;
      });
  },
});

export const btc_data = (state) => state.dashboard.btc_data;
export const order_book_data = (state) => state.dashboard.order_book_data;

export default dashboardSlice.reducer;
