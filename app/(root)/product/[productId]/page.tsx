interface Props {
  params: { productId: string };
}

function ProductDetail({ params: { productId } }: Props) {
  return <section className="container mx-auto max-w-7xl">{productId}</section>;
}

export default ProductDetail;
