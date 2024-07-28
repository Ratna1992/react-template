// src/slices/offersSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Offers{
    slug:string,
    name:string,
    url:string
}

interface OfferState {
  items: Offers[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null |any;
}

const initialState: OfferState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchOffers = createAsyncThunk('offers/fetchOffers', async () => {
  const response = await axios.get('https://dummyjson.com/products/categories');
  return response.data;
});

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default offersSlice.reducer;
