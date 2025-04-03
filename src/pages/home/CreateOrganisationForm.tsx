"use client";
import { z } from "zod";
import { CreateOrganisationSchema } from "./config/form.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import InputField from "@/components/common/fields/InputField";
import { Button } from "@/components/ui/button";
import { useCreateOrganisationMutation } from "@/store/organisation/organisationService";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { useUserId } from "@/hooks/useUserId";

type FormValues = z.infer<typeof CreateOrganisationSchema>;
export const CreateOrganisationForm = ({
  onClose,
}: {
  onClose?: (value: boolean) => void;
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(CreateOrganisationSchema),
    defaultValues: { name: "" },
  });
  const userId = useUserId();
  console.log(userId);
  const [createOrg, { error }] = useCreateOrganisationMutation();
  useErrorHandler(error);
  const handleOnSubmit = async (data: FormValues) => {
    await createOrg({
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
            label="Organisation name"
            placeholder="Input organisation name"
            classNameItem="text-black"
          />
          <Button type="submit">Create</Button>
        </form>
      </Form>
    </div>
  );
};
