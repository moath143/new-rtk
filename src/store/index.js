import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './features/counterSlice'
import productSlice from './features/productsSlice'

const store = configureStore({
  reducer: {
    counterStore: counterSlice.reducer,
    productStore: productSlice.reducer
  },
});

export default store