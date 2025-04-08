import { cn } from "@/lib/utils";
import { ICommentResponse } from "@/types/comment";
import { CommentControl } from "./CommentControl";
import { parsedDate } from "@/utils/parsedDate";

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
        index % 2 === 0 ? "bg-white/20" : "bg-transparent"
      )}
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-950 font-semibold text-white">
            {data.creator.name[0]}
          </div>
          <p>{data.creator.name}</p>
        </div>
        {userId === data.creator.id && (
          <CommentControl id={data.id} content={data.content} />
        )}
      </div>
      <p>{data.content}</p>
      <p className="text-end">{parsedDate(data.created_at)}</p>
    </div>
  );
};
