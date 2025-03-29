"use client";
import { z } from "zod";
import { LoginShema } from "./forms.config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import InputField from "@/components/common/InputField";
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/store/auth/authService";
import { useDispatch } from "react-redux";
import { setRefreshToken, setToken, setUserId } from "@/store/auth/authSlice";
import { useRouter } from "next/navigation";
import { useErrorHandler } from "@/hooks/useErrorHandler";

type FormValues = z.infer<typeof LoginShema>;
export const LoginForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(LoginShema),
    defaultValues: { email: "", password: "" },
  });
  const dispatch = useDispatch();
  const router = useRouter();

  const [login, { error }] = useLoginMutation();
  useErrorHandler(error);
  const handleOnSubmit = async (data: FormValues) => {
    const { accessToken, refreshToken, id } = await login(data).unwrap();
    dispatch(setToken(accessToken));
    dispatch(setRefreshToken(refreshToken));
    dispatch(setUserId(id));
    form.reset();
    router.push("/home");
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
          <Button type="submit">Login</Button>
        </form>
      </Form>
    </div>
  );
};
