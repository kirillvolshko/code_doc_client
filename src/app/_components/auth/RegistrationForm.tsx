"use client";
import InputField from "@/components/common/InputField";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegistratinShema } from "./forms.config";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useRegistrationMutation } from "@/store/auth/authService";
import { useDispatch } from "react-redux";
import { setRefreshToken, setToken, setUserId } from "@/store/auth/authSlice";

type FormValues = z.infer<typeof RegistratinShema>;
export const RegistrationForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(RegistratinShema),
    defaultValues: { name: "", email: "", password: "" },
  });
  const dispatch = useDispatch();
  const [registration] = useRegistrationMutation();
  console.log();
  const handleOnSubmit = async (data: FormValues) => {
    try {
      const { refreshToken, accessToken, id } = await registration(
        data
      ).unwrap();
      dispatch(setToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
      dispatch(setUserId(id));
      form.reset();
    } catch (error) {
      console.log(error);
    }
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
          <Button type="submit">Registration</Button>
        </form>
      </Form>
    </div>
  );
};
