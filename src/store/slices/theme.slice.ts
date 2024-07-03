import { createSlice } from "@reduxjs/toolkit";

interface IState {
  theme: "light" | "dark";
}

const initialState: IState = {
  theme: (localStorage.getItem("theme") as "light" | "dark") || "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
