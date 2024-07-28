// src/pages/Customers.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchCustomers } from '../redux/customersSlice';
import CustomersPaginatedTable from './CustomersPaginatedTable';

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
    </div>
  );
};

export default Customers;
