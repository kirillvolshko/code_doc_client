import { LoginForm } from "../_components/auth/LoginForm";
import { RegistrationForm } from "../_components/auth/RegistrationForm";

export const AuthPage = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-slate-400 rounded-sm p-[30px]">
        <LoginForm />
        <RegistrationForm />
      </div>
    </div>
  );
};
