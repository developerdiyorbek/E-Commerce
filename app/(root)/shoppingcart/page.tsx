"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { ArrowRight } from "lucide-react";
import ShoppingCartItem from "./_components/ShoppingCartItem";

function ShoppingCart() {
  const { carts, totalPrice, taxes } = useCart();
  return (
    <section className="container mx-auto max-w-7xl pt-10">
      <div className="grid grid-cols-3 gap-2 max-md:grid-cols-1">
        <Card className="col-span-2">
          <CardContent className="py-4">
            {carts.length > 0 && (
              <>
                <h1 className="max-md:text-xl text-2xl font-bold">
                  Shopping carts
                </h1>
                <p className="text-sm text-muted-foreground">
                  You have {carts.length} item
                </p>
              </>
            )}
            {carts.length === 0 && <div>No cart found</div>}

            <div className="my-3 flex flex-col space-y-3">
              {carts.map((card) => (
                <ShoppingCartItem key={card.id} {...card} />
              ))}
            </div>
          </CardContent>
        </Card>
        <div>
          <Card className="bg-gradient-to-t from-secondary to-background">
            <CardContent className="py-4">
              <h1 className="max-md:text-xl text-2xl font-bold">Result</h1>
              <Separator className="my-3" />
              <div className="flex items-center justify-between text-sm">
                <div className="font-bold">Subtotal</div>
                <div className="font-medium">
                  {totalPrice().toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="font-bold">Taxes</div>
                <div className="font-medium">
                  {taxes().toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="font-bold">Total</div>
                <div className="font-medium">
                  {(taxes() + totalPrice()).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
              </div>
              {carts.length > 0 && (
                <Button className="group mt-3 flex items-center justify-between px-2 font-bold w-full">
                  <span>
                    {(totalPrice() + taxes()).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </span>
                  <div className="flex items-center gap-1 opacity-50 transition-all group-hover:opacity-100">
                    <span>Checkout</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ShoppingCart;
