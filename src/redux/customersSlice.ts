// src/slices/customersSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Customer{
    id:number,
    firstName:string,
    lastName:string,
    age:number,
    gender:string
}
interface CustomerState {
  items: Customer[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | any;
}

const initialState: CustomerState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
  const response = await axios.get('https://dummyjson.com/users');
  return response.data.users;
});

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default customersSlice.reducer;
