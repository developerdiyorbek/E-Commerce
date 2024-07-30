interface Props {
  params: { productId: string };
}

function ProductDetail({ params: { productId } }: Props) {
  return <section className="container mx-auto">{productId}</section>;
}

export default ProductDetail;
