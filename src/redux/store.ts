// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice'
import customersReducer from './customersSlice';
import offersReducer from './offersSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    customers: customersReducer,
    offers: offersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
