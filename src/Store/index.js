import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../Pages/Dashboard/dashboardSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});
