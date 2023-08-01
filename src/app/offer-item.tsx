"use client"
import { ReactNode } from "react";
import { IMAGES_URL_PREFIX } from "@/config";
import Image, { ImageLoaderProps } from "next/image";
import { Offer } from "../types";

export function OfferItem({ offer }: { offer: Offer }) {
  const { address, id, name, price } = offer;

  const loader = ({ src, width }: ImageLoaderProps) => `${IMAGES_URL_PREFIX}${src}?format=auto&width=${width}`;

  return (
    <OfferItemTemplate
      // header={<img src={`${IMAGES_URL_PREFIX}${id}.jpeg`} alt={name} height='225' width='640' style={{ objectFit: 'cover', width: '100%' }} />}
      header={<Image loader={loader} src={`${id}.jpeg`} alt={name} height='225' width='640' style={{ objectFit: 'cover', width: '100%' }} />}
      title={name}
      subtitle={address}
      button={<a type="button" href="#" className="btn btn-sm btn-primary">View details</a>}
      infoText={<span className="text-muted">{price}</span>}
    />
  )
}

export function OfferItemPlaceholder() {
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

function OfferItemTemplate(props: TemplateProps) {
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
