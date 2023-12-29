import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

const toppingsSlice = createSlice({
  name: "toppings",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    addTopping: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addTopping } = toppingsSlice.actions;
export default toppingsSlice.reducer;
