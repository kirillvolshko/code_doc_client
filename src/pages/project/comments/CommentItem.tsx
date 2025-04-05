import { cn } from "@/lib/utils";
import { ICommentResponse } from "@/types/comment";

type CommentItemProps = {
  data: ICommentResponse;
  index: number;
  userId: string;
};

export const CommentItem = ({ data, index, userId }: CommentItemProps) => {
  return (
    <div
      className={cn(
        "p-2 rounded-md flex flex-col gap-2 w-full",
        index % 2 === 0 ? "bg-blue-300" : "bg-transparent"
      )}
    >
      <div>
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-950 font-semibold text-white">
            {data.creator.name[0]}
          </div>

          <p>{data.creator.name}</p>
        </div>
      </div>
      <p>{data.content}</p>
      <p className="text-end">{data.created_at}</p>
    </div>
  );
};
