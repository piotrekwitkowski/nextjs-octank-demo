// "use client"
// import { useEffect, useState } from 'react'
import { HOW_MANY_OFFERS, OFFERS_URL } from '@/config';
import { Offer } from '@/types';
import { OfferItem } from './offer-item';
import PageContentHeader from './page-content-header';
import PageContentWrapper from './page-content-wrapper';
import { headers } from 'next/headers';

// const getOffers = () => fetch(`${OFFERS_URL}?limit=${HOW_MANY_OFFERS}`).then(res => res.json()) as Promise<Offer[]>;
const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json())
const url = `${OFFERS_URL}?limit=${HOW_MANY_OFFERS}`;

async function getOffers() {
  // await new Promise(resolve => {});
  await new Promise(resolve => setTimeout(resolve, 2500));
  const res = await fetch(`${OFFERS_URL}?limit=${HOW_MANY_OFFERS}`)
  return await res.json() as Offer[];
}


export default async function HomePage() {
  const offers = await getOffers();
  // const { data, error } = useSWR(url, fetcher)

  // getOffers().then(data => offers = data);

  // const [offers, setOffers] = useState([]);
  // const [error, setError] = useState<string | undefined>(undefined);
  // // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   // setIsLoading(true);
  //   fetch(`${OFFERS_URL}?limit=${HOW_MANY_OFFERS}`)
  //     .then(res => res.json())
  //     .then(setOffers)
  //     .catch(_ => setError('Error while loading the data'))
  //   // .finally(() => setIsLoading(false));
  // }, []);

  return (
    <>

      <PageContentHeader/>
      <PageContentWrapper>
        {offers.map((offer, i) => <OfferItem key={i} offer={offer} />)}
      </PageContentWrapper>
    </>
  )
}
