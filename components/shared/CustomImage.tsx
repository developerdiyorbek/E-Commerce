"use client";

import { IProduct } from "@/types";
import Image from "next/image";
import { useState } from "react";

interface Props {
  product: IProduct;
  fill?: boolean;
}

const CustomImage = ({ product, fill }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {fill ? (
        <Image
          src={product.images[0]}
          alt={product.category}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className={`object-contain flex-1 duration-700 ease-in-out group-hover:opacity-75  ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          priority
          onLoad={() => setIsLoading(false)}
        />
      ) : (
        <Image
          src={product.images[0]}
          alt={product.category}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-contain  duration-700 ease-in-out group-hover:opacity-75  ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          priority
          width={400}
          height={500}
          onLoad={() => setIsLoading(false)}
        />
      )}
    </>
  );
};

export default CustomImage;
