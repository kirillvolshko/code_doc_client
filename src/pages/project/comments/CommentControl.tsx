import { PopoverWindow } from "@/components/common/ui/PopoverWindow";
import { useDeleteCommentsMutation } from "@/store/comments/commentService";
import { Pencil, Trash2 } from "lucide-react";
import { EditCommentForm } from "../forms/EditCommentForm";

type CommentControlProps = {
  id: string;
  content: string;
};

export const CommentControl = ({ id, content }: CommentControlProps) => {
  const [deleteCom] = useDeleteCommentsMutation();
  const handleOnDelete = async () => {
    await deleteCom(id).unwrap();
  };
  return (
    <div className="flex gap-1 items-center">
      <PopoverWindow
        triggerComponent={<Pencil size={16} className="hover:cursor-pointer" />}
        content={<EditCommentForm id={id} content={content} />}
      />
      <Trash2
        className="text-red-600 hover:cursor-pointer"
        onClick={handleOnDelete}
        size={16}
      />
    </div>
  );
};
