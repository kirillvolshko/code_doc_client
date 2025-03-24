import InputField from "@/components/common/InputField";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegistratinShema } from "./forms.config";
import { zodResolver } from "@hookform/resolvers/zod";

type FormValues = z.infer<typeof RegistratinShema>;
export const RegistrationForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(RegistratinShema),
  });
  return (
    <div>
      <Form {...form}>
        <form>
          <InputField
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <InputField
            control={form.control}
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <InputField
            control={form.control}
            name="name"
            label="User name"
            placeholder="Enter your name"
          />
        </form>
      </Form>
    </div>
  );
};
