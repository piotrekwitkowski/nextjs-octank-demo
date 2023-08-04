import { HOW_MANY_OFFERS } from '@/config';
import { getOffers } from '@/data';
import { PageProps } from '@/types';
import { OfferItem } from './offer-item';
import { PageContentHeader } from './page-content-header';
import { PageContentWrapper } from './page-content-wrapper';

export default async function HomePage(props: PageProps) {
  // const delayParam = props.searchParams?.delay;
  // const delay = Number(delayParam ? (typeof delayParam === 'string' ? delayParam : delayParam[0]) : 0);
  // console.log('API call delay:', delay);
  // await new Promise(resolve => setTimeout(resolve, delay));
  const offers = getOffers({ limit: HOW_MANY_OFFERS });

  // const [offers, setOffers] = useState([]);
  // const [error, setError] = useState<string | undefined>(undefined);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setIsLoading(true);
  //   getOffers({ limit: HOW_MANY_OFFERS })
  //     .then(setOffers)
  //     .catch(_ => setError('Error while loading the data'))
  //     .finally(() => setIsLoading(false));
  // }, []);

  return (
    <>
      <PageContentHeader />
      <PageContentWrapper>
        {offers.map((offer, i) => <OfferItem key={i} offer={offer} />)}
      </PageContentWrapper>
    </>
  )
}
