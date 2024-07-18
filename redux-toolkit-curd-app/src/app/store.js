import { configureStore } from "@reduxjs/toolkit";
import { actresSlice } from "./features/actresSlice";

export const store = configureStore({
  reducer: {
    actres: actresSlice.reducer,
  },
});
