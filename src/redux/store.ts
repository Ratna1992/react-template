import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';

// Define the type for the root state of the Redux store
export type RootState = ReturnType<typeof store.getState>;


const store = configureStore({
  reducer: {
    products: productsReducer
  }
});

export default store;
