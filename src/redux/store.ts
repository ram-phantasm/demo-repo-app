import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import { productApi } from "../API/service";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
