

'use client';
import { ErrorMessage, OfferItem, OfferItemPlaceholder } from '@/components';
import { HOW_MANY_OFFERS } from '@/config';
import { getOffersFromAPI } from '@/data';
import { Offer } from '@/types';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getOffersFromAPI({ limit: HOW_MANY_OFFERS })
      .then(setOffers)
      .catch(_ => setError('Error while loading the data'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {!error && offers.length ==0 && Array.from({ length: HOW_MANY_OFFERS }).map((_, i) => <OfferItemPlaceholder key={i} />)}
      {offers.map((offer, i) => <OfferItem key={i} offer={offer} />)}
      {error && <ErrorMessage />}
    </>
  )
}



