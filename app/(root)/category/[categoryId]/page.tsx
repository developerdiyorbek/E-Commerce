import ProductItem from "../../_components/ProductItem";
import { CategoryProps, IProduct } from "@/types";
import { BASE_URL } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
};

async function Page({ params: { categoryId } }: CategoryProps) {
  const productsJSON = await fetch(
    `${BASE_URL}/products/category/${categoryId}`
  );

  const products = await productsJSON.json();

  return (
    <section
      className="container mx-auto pb-5 md:pb-10 max-w-7xl"
      aria-labelledby="category page"
    >
      <h1 className="text-center capitalize py-8 max-md:text-2xl text-3xl text-muted-foreground">
        {categoryId}
      </h1>
      <div
        className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        role="list"
        aria-label={`List of products in the ${categoryId} category`}
      >
        {products.products.map((product: IProduct) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Page;
