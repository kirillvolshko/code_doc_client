import InputField from "@/components/common/fields/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { DocumentSchema } from "./forms.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormValues = z.infer<typeof DocumentSchema>;
export const EditDocumentForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(DocumentSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const handleOnSubmit = async () => {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)}>
        <InputField
          control={form.control}
          name="title"
          label="Code file title"
          placeholder="Input code file title"
        />
        <InputField
          control={form.control}
          label="Code description"
          placeholder="Input code description"
          name="content"
        />
        <Button type="submit">Edit</Button>
      </form>
    </Form>
  );
};
