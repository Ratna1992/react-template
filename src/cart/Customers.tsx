// src/pages/Customers.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchCustomers } from '../redux/customersSlice';
import CustomersPaginatedTable from './CustomersPaginatedTable';
import { Link, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
const Customers: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const customers = useSelector((state: RootState) => state.customers.items);
  const customerStatus = useSelector((state: RootState) => state.customers.status);

  useEffect(() => {
    if (customerStatus === 'idle') {
      dispatch(fetchCustomers());
    }
  }, [customerStatus, dispatch]);

  return (
    <div>
      <CustomersPaginatedTable rows={customers} title='Customers'/>

      
      <br />
      <Link component={RouterLink} to="/cart" color="primary" underline="hover">
        Go to Products
      </Link>
      <Link component={RouterLink} to="/offers" color="primary" underline="hover">
        Go to Offers
      </Link>
      <br/>
    </div>

  );
};

export default Customers;
