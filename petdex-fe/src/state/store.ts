import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "../state/drawer/drawerSlice";

const store = configureStore({
  reducer: {
    drawer: drawerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
