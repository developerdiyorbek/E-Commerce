function Page({ params: { postId } }: { params: { postId: string } }) {
  return <section className="container mx-auto max-w-7xl">{postId}</section>;
}

export default Page;
