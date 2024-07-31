import CustomImage from "@/components/shared/CustomImage";
import { BASE_URL } from "@/constants";

interface Props {
  params: { productId: string };
}

async function ProductDetail({ params: { productId } }: Props) {
  const productJSON = await fetch(`${BASE_URL}/products/${productId}`);

  const product = await productJSON.json();

  console.log(product);

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
          <div className="pt-4">
            <p className="text-xs md:text-sm">{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
