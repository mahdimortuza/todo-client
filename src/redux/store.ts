import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import todoReducer from "./features/todoSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    todos: todoReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
