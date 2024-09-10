import { Card, CardContent } from "@/components/ui/card";
import { IComment } from "@/types";
import { User } from "lucide-react";

function CommentCard({ comment }: { comment: IComment }) {
  return (
    <Card className="border rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-2">
        <User className="text-muted-foreground max-md:size-6" />
        <h2 className="font-semibold ml-3 dark:text-white text-gray-600 max-sm:text-[16px]">
          {comment.user.username}
        </h2>
      </div>
      <CardContent className="text-gray-700 dark:text-gray-200 max-sm:text-[14px]">
        {comment.body}
      </CardContent>
      <div className="text-end">
        <span className="text-sm text-gray-500 dark:text-gray-300">
          {comment.likes} likes
        </span>
      </div>
    </Card>
  );
}

export default CommentCard;
