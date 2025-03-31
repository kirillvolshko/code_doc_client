"use client";
import { z } from "zod";
import { CreateOrganisationSchema } from "./config/form.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import InputField from "@/components/common/fields/InputField";
import { Button } from "@/components/ui/button";

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
  const handleOnSubmit = async () => {
    console.log("ok");
    if (onClose) onClose(true);
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
