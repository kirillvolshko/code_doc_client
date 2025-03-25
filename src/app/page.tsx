"use client";
import { Provider } from "react-redux";
import { AuthPage } from "./auth/page";
import { store } from "@/store";

export default function RootPage() {
  return (
    <Provider store={store}>
      <div className="">
        <AuthPage />
      </div>
    </Provider>
  );
}
