import { Offer } from "@/types";

export const OFFERS_MOCK_DATA = [
  { "id": "l1", "name": "Chelsea Townhouse", "price": "£2.5 million", "address": "123 King's Road, Chelsea, London SW3 4TH", "bedrooms": 4, "bathrooms": 3, "square_footage": 2500, "city": "London", "type": "house" },
  { "id": "l2", "name": "Notting Hill Victorian", "price": "£1.5 million", "address": "14 Portobello Road, Notting Hill, London W11 3AQ", "bedrooms": 3, "bathrooms": 2, "square_footage": 1800, "city": "London", "type": "house" },
  { "id": "l3", "name": "Mayfair Penthouse", "price": "£5 million", "address": "100 Park Lane, Mayfair, London W1K 1NY", "bedrooms": 5, "bathrooms": 4, "square_footage": 3500, "city": "London", "type": "house" },
  { "id": "l4", "name": "Camden Town Apartment", "price": "£1 million", "address": "12 Chalk Farm Road, Camden, London NW1 8AH", "bedrooms": 2, "bathrooms": 1, "square_footage": 1200, "city": "London", "type": "flat" },
  { "id": "l5", "name": "Shoreditch Warehouse", "price": "£3 million", "address": "100 Old Street, Shoreditch, London EC1V 9NR", "bedrooms": 3, "bathrooms": 2, "square_footage": 2000, "city": "London", "type": "flat" },
  { "id": "l6", "name": "Greenwich Terraced House", "price": "£1.2 million", "address": "123 Greenwich Road, Greenwich, London SE10 8RT", "bedrooms": 4, "bathrooms": 2, "square_footage": 1500, "city": "London", "type": "house" },
  { "id": "l7", "name": "Soho Studio", "price": "£750,000", "address": "10 Greek Street, Soho, London W1D 4DR", "bedrooms": 1, "bathrooms": 1, "square_footage": 500, "city": "London", "type": "flat" },
  { "id": "l8", "name": "Brixton Loft", "price": "£900,000", "address": "123 Atlantic Road, Brixton, London SW9 8PL", "bedrooms": 2, "bathrooms": 1, "square_footage": 750, "city": "London", "type": "flat" },
  { "id": "l9", "name": "Islington Apartment", "price": "£1.2 million", "address": "100 Upper Street, Islington, London N1 0PN", "bedrooms": 3, "bathrooms": 2, "square_footage": 1000, "city": "London", "type": "flat" },
  { "id": "m1", "name": "Castlefield Apartment", "price": "£750,000", "address": "10 Castle Street, Castlefield, Manchester M3 4PW", "bedrooms": 1, "bathrooms": 1, "square_footage": 500, "city": "Manchester", "type": "flat" },
  { "id": "m2", "name": "Piccadilly Warehouse", "price": "£900,000", "address": "123 Piccadilly Gardens, Manchester M1 1ND", "bedrooms": 2, "bathrooms": 1, "square_footage": 750, "city": "Manchester", "type": "flat" },
  { "id": "m3", "name": "Deansgate Apartment", "price": "£1.2 million", "address": "100 Deansgate, Manchester M3 3NT", "bedrooms": 3, "bathrooms": 2, "square_footage": 1000, "city": "Manchester", "type": "flat" },
  { "id": "m4", "name": "Oxford Road Townhouse", "price": "£1.5 million", "address": "123 Oxford Road, Manchester M13 9PL", "bedrooms": 4, "bathrooms": 2, "square_footage": 1250, "city": "Manchester", "type": "house" },
  { "id": "m5", "name": "Salford Quays Penthouse", "price": "£2 million", "address": "100 MediaCityUK, Salford Quays, Manchester M50 3ST", "bedrooms": 5, "bathrooms": 3, "square_footage": 1500, "city": "Manchester", "type": "flat" },
  { "id": "m6", "name": "Didsbury House", "price": "£3 million", "address": "100 Wilmslow Road, Didsbury, Manchester M20 2PQ", "bedrooms": 6, "bathrooms": 4, "square_footage": 2000, "city": "Manchester", "type": "house" },
  { "id": "m7", "name": "Withington Terraced House", "price": "£1.2 million", "address": "123 Wilmslow Road, Withington, Manchester M20 2PQ", "bedrooms": 4, "bathrooms": 2, "square_footage": 1500, "city": "Manchester", "type": "house" },
  { "id": "m8", "name": "Chorlton Flat", "price": "£750,000", "address": "10 Barlow Moor Road, Chorlton, Manchester M21 7HR", "bedrooms": 1, "bathrooms": 1, "square_footage": 500, "city": "Manchester", "type": "flat" },
  { "id": "m9", "name": "Rusholme Apartment", "price": "£900,000", "address": "123 Wilmslow Road, Rusholme, Manchester M14 6LY", "bedrooms": 2, "bathrooms": 1, "square_footage": 750, "city": "Manchester", "type": "flat" }
  // ... Add more properties here
] satisfies Offer[];