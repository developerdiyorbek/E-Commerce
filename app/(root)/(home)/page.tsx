import { ICategory } from "@/types";
import CategoryItem from "../_components/CategoryItem";
import { BASE_URL } from "@/constants";

async function Home() {
  const categoriesJSON = await fetch(`${BASE_URL}/products/categories`);

  const categories = await categoriesJSON.json();

  return (
    <section
      className="container py-12 mx-auto max-w-7xl"
      aria-labelledby="product-categories"
    >
      <h1 className="text-center mb-8 max-md:text-2xl text-3xl text-muted-foreground">
        Product categories
      </h1>
      <div
        className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        role="list"
        aria-label="List of product categories"
      >
        {categories.map((category: ICategory) => (
          <CategoryItem key={category.slug} {...category} />
        ))}
      </div>
    </section>
  );
}

export default Home;
