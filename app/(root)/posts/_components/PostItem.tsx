import { Card, CardContent } from "@/components/ui/card";
import { IPost } from "@/types";
import Link from "next/link";
import PostItemBottom from "./PostItemBottom";

function PostItem({ post }: { post: IPost }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <Card>
        <CardContent className="mt-4">
          <div className="sm:line-clamp-1 text-muted-foreground mb-3">
            {post.title}
          </div>
          <PostItemBottom post={post} />
        </CardContent>
      </Card>
    </Link>
  );
}

export default PostItem;
