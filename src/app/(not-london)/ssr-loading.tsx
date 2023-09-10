

import { OfferItemPlaceholder } from "@/components";
import { HOW_MANY_OFFERS } from "@/config";

export default function Loading() {
  return (
    <>
      {Array.from({ length: HOW_MANY_OFFERS }).map((_, i) =>
        <OfferItemPlaceholder key={i} />)}
    </>
  )
}





