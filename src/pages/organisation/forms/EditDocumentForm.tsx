import InputField from "@/components/common/fields/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { DocumentSchema } from "./forms.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditDocumentMutation } from "@/store/documents/documentService";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { useUserId } from "@/hooks/useUserId";
import { useSearchParams } from "next/navigation";
import TextareaField from "@/components/common/fields/TextAreaField";
import { TextEditor } from "@/components/common/fields/TextEditor";

type FormValues = z.infer<typeof DocumentSchema>;
export const EditDocumentForm = ({
  onClose,
  title,
  content,
}: {
  onClose?: (value: boolean) => void;
  title: string;
  content: string;
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(DocumentSchema),
    defaultValues: {
      title: title ?? "",
      content: content ?? "",
    },
  });
  const [editDoc, { error }] = useEditDocumentMutation();
  useErrorHandler(error);
  const userId = useUserId();
  const searchParams = useSearchParams();
  const docId = searchParams?.get("doc") || "";
  const handleOnSubmit = async (data: FormValues) => {
    const { title, content } = data;
    await editDoc({
      body: {
        title: title,
        content: content,
        updated_id: userId ?? "",
      },
      docId: docId,
    }).unwrap();
    if (onClose) onClose(true);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-5"
      >
        <InputField
          control={form.control}
          name="title"
          label="Code file title"
          placeholder="Input code file title"
        />
        <TextEditor
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
