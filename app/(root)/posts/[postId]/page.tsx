import { BASE_URL } from "@/constants";
import PostItemBottom from "../_components/PostItemBottom";
import CommentCard from "./_components/CommentCard";
import { IComment } from "@/types";

interface Props {
  params: { postId: string };
}

async function Page({ params: { postId } }: Props) {
  const postJSON = await fetch(`${BASE_URL}/posts/${postId}`);
  const postCommentsJSON = await fetch(`${BASE_URL}/posts/${postId}/comments`);

  const post = await postJSON.json();
  const { comments } = await postCommentsJSON.json();

  return (
    <section className="container mx-auto max-w-7xl pt-5">
      <h1 className="text-center mb-8 max-md:text-xl text-3xl text-muted-foreground">
        {post.title}
      </h1>
      <p className="max-md:text-[14px] mb-5 max-md:mb-3">{post.body}</p>
      <PostItemBottom post={post} />
      <h2 className="text-center max-md:my-4 my-8 max-md:text-lg text-2xl text-muted-foreground">
        Comments
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 max-md:gap-3 gap-5">
        {comments.length ? (
          comments.map((comment: IComment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))
        ) : (
          <div>No comment</div>
        )}
      </div>
    </section>
  );
}

export default Page;
