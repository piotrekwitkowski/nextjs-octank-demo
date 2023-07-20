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