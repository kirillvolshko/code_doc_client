"use client";
import InputField from "@/components/common/fields/InputField";
import { CreateDocumentSchema } from "./forms.schema";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateDocumentMutation } from "@/store/documents/documentService";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { Button } from "@/components/ui/button";
import { useUserId } from "@/hooks/useUserId";
import { z } from "zod";
import { useParams } from "next/navigation";

type FormValues = z.infer<typeof CreateDocumentSchema>;
export const CreateDocumentForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(CreateDocumentSchema),
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
      org_id: orgId?.id ?? null,
    }).unwrap();
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-5"
      >
        <InputField />

        <Button type="submit">Create</Button>
      </form>
    </Form>
  );
};
