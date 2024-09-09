import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  open: true,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.open = !state.open;
    },
  },
});

// Selector to get the open state
export const selectDrawerOpen = (state: RootState) => state.drawer.open;

export const { toggleDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
