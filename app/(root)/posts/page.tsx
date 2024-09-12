import { BASE_URL } from "@/constants";
import PostItem from "./_components/PostItem";
import { IPost } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
};

async function Posts() {
  const postsJSON = await fetch(`${BASE_URL}/posts`);
  const { posts } = await postsJSON.json();

  return (
    <section className="container py-12 mx-auto max-w-7xl">
      <h1 className="text-center mb-8 max-md:text-2xl text-3xl text-muted-foreground">
        Posts
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {posts.map((post: IPost) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </section>
  );
}

export default Posts;
