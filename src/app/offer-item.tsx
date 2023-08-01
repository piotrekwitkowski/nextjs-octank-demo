import { ReactNode } from "react";
import { Offer } from "../types";
import { OfferItemImage } from "./offer-item-image";

interface OfferItemProps {
  offer: Offer;
}

export const OfferItem = ({ offer }: OfferItemProps) => {
  return (
    <OfferItemTemplate
      header={<OfferItemImage id={offer.id} name={offer.name} />}
      title={offer.name}
      subtitle={offer.address}
      button={<a type="button" href="#" className="btn btn-sm btn-primary">View details</a>}
      infoText={<span className="text-muted">{offer.price}</span>}
    />
  )
}

export const OfferItemPlaceholder = () => {
  return (
    <OfferItemTemplate
      header={<span className="placeholder w-100 bg-secondary" style={{ height: '225px' }} />}
      title={<span className="placeholder col-7" />}
      subtitle={<span className="placeholder col-9" />}
      button={<button type="button" className="btn btn-sm btn-primary disabled placeholder col-3" />}
      infoText={<span className="text-muted placeholder-glow w-25"><span className="placeholder w-100"></span></span>}
    />
  )
}

interface TemplateProps {
  header: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
  button: ReactNode;
  infoText?: ReactNode;
}

const OfferItemTemplate = (props: TemplateProps) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        {props.header}
        <div className="card-body" style={{ backgroundColor: 'white', zIndex: 0 }}>
          <h4 className="card-title placeholder-glow">
            {props.title}
          </h4>
          <p className="card-text placeholder-glow">
            {props.subtitle}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            {props.button}
            {props.infoText}
          </div>
        </div>
      </div>
    </div>
  )
}
