import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Container,Button } from '@mui/material';
import PaginatedTable from './PaginatedTable';
import { Link } from 'react-router-dom';
const Offers: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div>
      <Container>
        <PaginatedTable rows={products} title='Offers'></PaginatedTable>
        <Button component={Link} to="/cart" variant="contained" color="primary">
        Go to Products
      </Button>
      </Container>
    </div>
  );
};

export default Offers;
