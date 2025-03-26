"use client";
import { Provider } from "react-redux";
import { AuthPage } from "./auth/page";
import { store } from "@/store";
import { AuthProvider } from "./providers/AuthProvider";

export default function RootPage() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="">
          <AuthPage />
        </div>
      </AuthProvider>
    </Provider>
  );
}
