import CustomImage from "@/components/shared/CustomImage";
import { Card, CardContent } from "@/components/ui/card";
import { IProduct } from "@/types";
import Link from "next/link";

function ProductItem(product: IProduct) {
  return (
    <Link href={`/product/${product.id}`}>
      <Card>
        <CardContent>
          <div className="relative h-36 w-full mt-3">
            <CustomImage product={product} fill />
          </div>
          <h3 className="tracking-widest text-red-400 dark:text-muted-foreground text-sm mt-2 font-medium">
            {product.category}
          </h3>
          <h2 className="text-lg font-medium  line-clamp-1">{product.title}</h2>
          <p className="leading-relaxed text-base">
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ProductItem;
