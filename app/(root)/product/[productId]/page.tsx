"use client";

import CustomImage from "@/components/shared/CustomImage";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/Query/queryFn";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import Loading from "../../_components/Loading";

interface Props {
  params: { productId: number };
}

function ProductDetail({ params: { productId } }: Props) {
  const router = useRouter();

  const { data: product, isLoading } = getProduct(productId);
  const { addToCart } = useCart();

  if (isLoading) return <Loading />;

  const onCart = () => {
    router.push("/shoppingcart");
    addToCart(product);
  };

  return (
    <section className="container mx-auto max-w-7xl py-10">
      <div className="flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="relative size-96 max-md:size-60">
          <CustomImage product={product} fill />
        </div>

        <div className="space-y-2 pb-8">
          <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
          <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
            {Number(product.price).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h2>
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
              <Star key={i} className="fill-yellow-400 text-yellow-400" />
            ))}
            {Array.from({ length: 5 - Math.floor(product.rating) }).map(
              (_, i) => (
                <Star key={i} className="text-yellow-400" />
              )
            )}
          </div>
          <div className="pt-4">
            <p className="text-md max-md:text-sm max-w-[800px]">
              {product.description}
            </p>

            <Button variant={"secondary"} className="mt-2" onClick={onCart}>
              Add to card
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
