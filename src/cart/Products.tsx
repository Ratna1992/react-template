import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setProducts } from '../redux/productsSlice';
import { Link } from 'react-router-dom';
import { Button, Typography, List, ListItem } from '@mui/material';
import PaginatedTable from './PaginatedTable';
import { Container } from '@mui/material';
const Products: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    // Mock API call to fetch products
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products'); // Replace with your API endpoint
      const data = await response.json();
      dispatch(setProducts(data?.products));
    };

    fetchProducts();
  }, [dispatch]);

  return (
<>
<Container>
      <PaginatedTable rows={products} title="Products" />
      <Button component={Link} to="/offers" variant="contained" color="primary">
        Go to Offers
      </Button>
    </Container>
</>
    
   
)};

export default Products;
