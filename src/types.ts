export interface Offer {
  address: string;
  bathrooms: number;
  bedrooms: number;
  city: string;
  id: string;
  name: string;
  price: string;
  square_footage: number;
  type: "house" | "flat";
}

export interface PageProps {
  searchParams?: SearchParams;
}

interface SearchParams {
  [key: string]: string | string[] | undefined;
}