"use client";

import { BASE_ASSETS_PATH } from "@/config";
import Image, { ImageLoaderProps } from "next/image";

interface Props {
  id: string;
  name: string;
}

const loader = ({ src, width }: ImageLoaderProps) => `${BASE_ASSETS_PATH}/images/${src}?format=auto&width=${width}`;

export const OfferItemImage = (props: Props) => {
  // return <img src={`${IMAGES_URL_PREFIX}${props.id}.jpeg`} alt={props.name} height='225' width='640' style={{ objectFit: 'cover', width: '100%' }} />
  return <Image loader={loader} src={`${props.id}.jpeg`} alt={props.name} height='225' width='640' style={{ objectFit: 'cover', width: '100%' }} />
}
