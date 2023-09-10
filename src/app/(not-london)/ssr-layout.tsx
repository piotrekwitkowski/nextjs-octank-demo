

import { OfferItem } from '@/components';
import { HOW_MANY_OFFERS } from '@/config';
import { getOffers } from '@/data';

export default async function HomePage() {
  const offers = getOffers({ limit: HOW_MANY_OFFERS });

  return (
    <>
      {offers.map((offer, i) => <OfferItem key={i} offer={offer} />)}
    </>
  )
}


