"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { LoginForm } from "../_components/auth/LoginForm";
import { RegistrationForm } from "../_components/auth/RegistrationForm";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex gap-40 bg-slate-400 rounded-sm p-[30px] overflow-hidden">
        <LoginForm />

        <motion.div
          initial={false}
          animate={{ x: isRegistering ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gray-700 bg-opacity-50 backdrop-blur-md flex  items-center justify-center px-[30px]"
        >
          <div className="flex flex-col gap-5 w-full">
            <p
              className={cn(
                "text-[20px] font-semibold",
                isRegistering ? "text-end" : ""
              )}
            >
              <span className="text-white">Code</span>Doc
            </p>
            <Button onClick={() => setIsRegistering((prev) => !prev)}>
              {isRegistering
                ? "Don't have an account? Register"
                : "Already registered?"}
            </Button>
          </div>
        </motion.div>

        <RegistrationForm />
      </div>
    </div>
  );
};
