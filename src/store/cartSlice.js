import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { name: "Apple", price: 10 },
    { name: "Orange", price: 15 },
    { name: "Mango", price: 30 },
    { name: "Grapes", price: 20 },
  ],
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
