"use client";

import CustomImage from "@/components/shared/CustomImage";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { IProduct } from "@/types";
import { ArrowBigDownDash, ArrowBigUpDash, Trash2 } from "lucide-react";

interface Props extends IProduct {
  quantity: number;
}

function ShoppingCartItem(card: Props) {
  const { removeFromCart, increment, decrement } = useCart();

  return (
    <div className="grid w-full grid-cols-3 gap-4 rounded-md p-4 shadow-md dark:shadow-sm dark:shadow-white max-md:grid-cols-1">
      <div className="col-span-2  flex items-center gap-2">
        <div className="size-48 max-md:size-24 relative">
          <CustomImage fill product={card} />
        </div>
        <div className="flex flex-col">
          <h1 className="max-sm:text-[12px]  font-bold">{card.title}</h1>
          <h2 className="font-space-grotesk md:hidden">
            {(card.price * card.quantity).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <div className="flex items-center gap-1">
          <p className="font-space-grotesk text-xl font-bold">
            {card.quantity}
          </p>
          <div className="flex flex-col">
            <ArrowBigUpDash
              className="cursor-pointer transition-all hover:opacity-80 active:scale-125"
              role="button"
              onClick={() => increment(card.id)}
            />
            <ArrowBigDownDash
              className="cursor-pointer transition-all hover:opacity-80 active:scale-125"
              role="button"
              onClick={() =>
                card.quantity === 1
                  ? removeFromCart(card.id)
                  : decrement(card.id)
              }
            />
          </div>
        </div>
        <h1 className="text-xl font-bold max-md:hidden">
          {(card.quantity * card.price).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h1>
        <Button
          variant={"destructive"}
          size={"icon"}
          className="max-md:w-full"
          onClick={() => removeFromCart(card.id)}
        >
          <Trash2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
