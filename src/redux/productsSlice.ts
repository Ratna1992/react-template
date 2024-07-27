import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for a single product
interface Product {
  id: number;
  title: string;
  price: number;
}

// Define the initial state type
interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: []
};

// Create the products slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    }
  }
});

export const { setProducts, addProduct } = productsSlice.actions;

export default productsSlice.reducer;
