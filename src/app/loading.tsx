import { HOW_MANY_OFFERS } from "@/config";
import { OfferItemPlaceholder } from "./offer-item";
import PageContentHeader from "./page-content-header";
import PageContentWrapper from "./page-content-wrapper";

export default function Loading() {
  return (
    <>
      <PageContentHeader />
      <PageContentWrapper>
        {Array.from({ length: HOW_MANY_OFFERS }).map((_, i) => <OfferItemPlaceholder key={i} />)}
      </PageContentWrapper>
    </>
  )
}