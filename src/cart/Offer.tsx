// src/pages/Offers.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchOffers } from '../redux/offersSlice';
import OffersPaginatedTable from './OffersPaginatedTable';

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
    </div>
  );
};

export default Offers;
