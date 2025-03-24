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
          className={cn(
            "absolute top-0 left-0 w-1/2 h-full bg-gray-700 bg-opacity-90 backdrop-blur-md flex  items-center justify-center"
          )}
        >
          <div className="flex flex-col gap-5">
            <p className="text-[20px] font-semibold">
              <span className="text-white">Code</span>Doc
            </p>
            <Button onClick={() => setIsRegistering((prev) => !prev)}>
              {isRegistering
                ? "Already registered?"
                : "Don't have an account? Register"}
            </Button>
          </div>
        </motion.div>

        <RegistrationForm />
      </div>
    </div>
  );
};
