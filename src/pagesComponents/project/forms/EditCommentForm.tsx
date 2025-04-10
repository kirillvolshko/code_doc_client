"use client";
import InputField from "@/components/common/fields/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEditCommentsMutation } from "@/store/comments/commentService";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import CommentSchema from "./schema/commentSchema";

type FormValues = z.infer<typeof CommentSchema>;
const EditCommentForm = ({
  id,
  content,
  onClose,
}: {
  id: string;
  content: string;
  onClose?: (value: boolean) => void;
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(CommentSchema),
    defaultValues: {
      content: content ?? "",
    },
  });
  const [editCom, { error }] = useEditCommentsMutation();
  useErrorHandler(error);

  const handleOnSubmit = async (data: FormValues) => {
    const { content } = data;
    await editCom({
      content,
      id: id,
    }).unwrap();
    form.reset();
    if (onClose) onClose(true);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)} className="flex gap-5">
        <InputField
          control={form.control}
          name="content"
          placeholder="Input comment"
        />
        <Button>Add comment</Button>
      </form>
    </Form>
  );
};
export default EditCommentForm;
