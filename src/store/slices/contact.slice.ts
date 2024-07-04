import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  } | null;
}

const initialState: IState = {
  formData: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    createContact: (
      state,
      action: PayloadAction<{
        name: string;
        email: string;
        subject: string;
        message: string;
      }>
    ) => {
      state.formData = action.payload;
    },
  },
});

export const { createContact } = contactSlice.actions;

export default contactSlice.reducer;
