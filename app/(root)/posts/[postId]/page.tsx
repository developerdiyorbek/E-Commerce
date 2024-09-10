import { BASE_URL } from "@/constants";
import PostItemBottom from "../_components/PostItemBottom";

async function Page({ params: { postId } }: { params: { postId: string } }) {
  const postJSON = await fetch(`${BASE_URL}/posts/${postId}`);
  const post = await postJSON.json();

  return (
    <section className="container mx-auto max-w-7xl pt-5">
      <h1 className="text-center mb-8 max-md:text-xl text-3xl text-muted-foreground">
        {post.title}
      </h1>
      <p className="max-md:text-[14px] mb-5 max-md:mb-3">{post.body}</p>
      <PostItemBottom post={post} />
    </section>
  );
}

export default Page;
