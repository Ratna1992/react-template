// src/pages/Products.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchProducts } from '../redux/productsSlice';
import PaginatedTable from './PaginatedTable';
import { Link, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.items);
  const productStatus = useSelector((state: RootState) => state.products.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  return (
    <div>
      <PaginatedTable rows={products} title='Products'></PaginatedTable>
      <Link component={RouterLink} to="/customers" color="primary" underline="hover">
        Go to Customers
      </Link>
      <br />
      <Link component={RouterLink} to="/offers" color="primary" underline="hover">
        Go to Offers
      </Link>
    </div>
  );
};

export default Products;
