"use client";
import { NoDataMessage } from "@/components/common/ui/NoDataMessage";
import { Spinner } from "@/components/common/ui/Spinner";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { useUserId } from "@/hooks/useUserId";
import { useGetCommentsQuery } from "@/store/comments/commentService";
import { MessageSquareX } from "lucide-react";
import { useSearchParams } from "next/navigation";
import CommentItem from "./CommentItem";

const CommentsList = () => {
  const searchParams = useSearchParams();
  const docId = searchParams?.get("doc") || "";
  const userId = useUserId() || "";
  const { data, error, isLoading } = useGetCommentsQuery(docId, {
    skip: docId.length < 0,
  });
  useErrorHandler(error);
  if (isLoading) return <Spinner />;
  if (!data)
    return (
      <NoDataMessage
        icon={<MessageSquareX />}
        title="No comments"
        className="flex justify-center"
      />
    );
  return (
    <div className="flex flex-col gap-5 max-h-[90%] overflow-y-auto">
      {data.map((comment, index) => (
        <CommentItem
          data={comment}
          index={index}
          userId={userId}
          key={comment.id}
        />
      ))}
    </div>
  );
};
export default CommentsList;
