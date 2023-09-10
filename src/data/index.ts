import { Offer } from "@/types";
import { OFFERS_MOCK_DATA } from "./offers";

interface GetOffersProps {
  city?: 'London' | 'Manchester';
  type?: 'flat' | 'house';
  offset?: number;
  limit?: number;
}

const getOffersMockResponse = (props?: GetOffersProps) => {
  const { city, type, offset = 0, limit = 20 } = props || {};
  let results = OFFERS_MOCK_DATA;

  // Filter properties based on the city
  if (city) results = results.filter(x => x.city === city);

  // Filter properties based on the type
  if (type) results = results.filter(x => x.type === type);

  // Implement pagination
  results = results.slice(offset, offset + limit);

  // Return the filtered properties
  return results satisfies Offer[];
};

// const OFFERS_URL = 'https://pldgwnwuwc66akcxjf4lgqlyfy0shplt.lambda-url.us-east-1.on.aws/';
// const OFFERS_URL = 'https://u07pi099k9.execute-api.us-east-1.amazonaws.com/offers';
const OFFERS_URL = 'https://d36syrpn47mnkw.cloudfront.net/offers'

export const getOffersFromAPI = async (props?: GetOffersProps) => {
  const { city, type, offset = 0, limit = 20 } = props || {};
  const res = await fetch(`${OFFERS_URL}?limit=${limit}${city ? `&city=${city}` : ''}`)
  return await res.json() as Offer[];
}

export const getOffers = getOffersMockResponse;


