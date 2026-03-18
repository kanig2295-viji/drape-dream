import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardSlice";
import favReducer from "./favSlice"; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favReducer, 
  },
});
