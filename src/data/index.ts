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

// const getOffersFromAPI = async (props?: GetOffersProps) => {
//   const { city, type, offset = 0, limit = 20 } = props || {};
//   const res = await fetch(`${OFFERS_URL}?limit=${limit}`)
//   return await res.json() as Offer[];
// }

export const getOffers = getOffersMockResponse;


