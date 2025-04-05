"use client";
import InputField from "@/components/common/fields/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CommentSchema } from "./forms.schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCreateCommentsMutation } from "@/store/comments/commentService";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { useUserId } from "@/hooks/useUserId";
import { useSearchParams } from "next/navigation";

type FormValues = z.infer<typeof CommentSchema>;
export const CreateCommentForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(CommentSchema),
    defaultValues: {
      content: "",
    },
  });
  const [createCom, { error }] = useCreateCommentsMutation();
  useErrorHandler(error);

  const searchParams = useSearchParams();
  const docID = searchParams?.get("doc") || "";

  const userId = useUserId() || "";

  const handleOnSubmit = async (data: FormValues) => {
    const { content } = data;
    await createCom({
      content: content,
      creator_id: userId,
      doc_id: docID,
    }).unwrap();
    form.reset();
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
