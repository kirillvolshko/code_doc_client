import CreateCommentForm from "../forms/CreateCommentForm";
import CommentsList from "./CommentsList";

const CommentsView = () => {
  return (
    <div className="flex flex-col gap-5 flex-2">
      <p className="text-[20px] font-semibold">
        Comments for this code document
      </p>
      <CommentsList />
      <CreateCommentForm />
    </div>
  );
};
export default CommentsView;
