import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./slices/main.slice";
import themeReducer from "./slices/theme.slice";
import contactReducer from "./slices/contact.slice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    theme: themeReducer,
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
