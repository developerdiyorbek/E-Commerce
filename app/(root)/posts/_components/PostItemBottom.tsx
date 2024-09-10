import { IPost } from "@/types";
import { Eye, ThumbsDown, ThumbsUp } from "lucide-react";

function PostItemBottom({ post }: { post: IPost }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center text-muted-foreground gap-[3px] text-sm">
          <ThumbsUp className="size-4" />
          <span>{post.reactions.likes}</span>
        </div>
        <div className="flex items-center text-muted-foreground gap-[3px] text-sm">
          <ThumbsDown className="size-4" />
          <span>{post.reactions.dislikes}</span>
        </div>
      </div>
      <div className="flex items-center text-muted-foreground gap-[3px] text-sm">
        <Eye className="size-5" />
        <span>{post.views}</span>
      </div>
    </div>
  );
}

export default PostItemBottom;
