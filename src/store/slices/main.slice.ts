import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IState {
  activeSection: string;
}

const initialState: IState = {
  activeSection: "about",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } = mainSlice.actions;

export default mainSlice.reducer;
