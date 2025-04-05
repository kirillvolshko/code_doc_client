import InputField from "@/components/common/fields/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CommentSchema } from "./forms.schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type FormValues = z.infer<typeof CommentSchema>;
export const CreateCommentForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(CommentSchema),
    defaultValues: {
      content: "",
    },
  });
  return (
    <Form {...form}>
      <form className="flex flex-col gap-5">
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
