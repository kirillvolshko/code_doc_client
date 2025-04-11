"use client";
import InputField from "@/components/common/fields/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateDocumentMutation } from "@/store/documents/documentService";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { Button } from "@/components/ui/button";
import { useUserId } from "@/hooks/useUserId";
import { z } from "zod";
import { useParams } from "next/navigation";
import { Form } from "@/components/ui/form";
import { TextEditor } from "@/components/common/fields/TextEditor";
import DocumentSchema from "./schema/documentSchema";

type FormValues = z.infer<typeof DocumentSchema>;
const CreateDocumentForm = ({
  onClose,
}: {
  onClose?: (value: boolean) => void;
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(DocumentSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const orgId = useParams<{ id: string }>();
  const [createDoc, { error }] = useCreateDocumentMutation();
  useErrorHandler(error);
  const userId = useUserId();

  const handleOnSubmit = async (data: FormValues) => {
    const { title, content } = data;
    await createDoc({
      title: title,
      content: content,
      creator_id: userId ?? "",
      project_id: orgId?.id ?? "",
    }).unwrap();
    if (onClose) onClose(true);
    form.reset();
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-5"
      >
        <InputField
          control={form.control}
          label="Code file title"
          placeholder="Input code file title"
          name="title"
        />
        <div className="min-h-[210px] overflow-visible ">
          <TextEditor
            control={form.control}
            label="Code description"
            placeholder="Input code description"
            name="content"
          />
        </div>

        <Button type="submit">Create</Button>
      </form>
    </Form>
  );
};
export default CreateDocumentForm;
