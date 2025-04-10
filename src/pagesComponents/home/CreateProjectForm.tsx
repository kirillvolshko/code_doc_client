"use client";
import { z } from "zod";
import CreateProjectSchema from "./config/form.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import InputField from "@/components/common/fields/InputField";
import { Button } from "@/components/ui/button";
import { useCreateProjectMutation } from "@/store/project/projectService";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { useUserId } from "@/hooks/useUserId";

type FormValues = z.infer<typeof CreateProjectSchema>;
const CreateProjectForm = ({
  onClose,
}: {
  onClose?: (value: boolean) => void;
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(CreateProjectSchema),
    defaultValues: { name: "" },
  });
  const userId = useUserId();
  console.log(userId);
  const [createProject, { error }] = useCreateProjectMutation();
  useErrorHandler(error);

  const handleOnSubmit = async (data: FormValues) => {
    await createProject({
      name: data.name,
      creator_id: userId,
    }).unwrap();
    if (onClose) onClose(true);
    form.reset();
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleOnSubmit)}
          className="flex flex-col gap-5"
        >
          <InputField
            control={form.control}
            name="name"
            label="Project name"
            placeholder="Input project name"
            classNameItem="text-black"
          />
          <Button type="submit">Create project</Button>
        </form>
      </Form>
    </div>
  );
};
export default CreateProjectForm;
