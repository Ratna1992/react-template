// src/pages/Offers.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchOffers } from '../redux/offersSlice';
import OffersPaginatedTable from './OffersPaginatedTable';
import { Link, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
const Offers: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const offers = useSelector((state: RootState) => state.offers.items);
  const offerStatus = useSelector((state: RootState) => state.offers.status);

  useEffect(() => {
    if (offerStatus === 'idle') {
      dispatch(fetchOffers());
    }
  }, [offerStatus, dispatch]);

  return (
    <div>
      <OffersPaginatedTable rows={offers} title='Offers' />
      <br/>
      <Link component={RouterLink} to="/customers" color="primary" underline="hover">
        Go to Customers
      </Link>
      <br />
      <Link component={RouterLink} to="/cart" color="primary" underline="hover">
        Go to Products
      </Link>
      <br />
    </div>
  );
};

export default Offers;
