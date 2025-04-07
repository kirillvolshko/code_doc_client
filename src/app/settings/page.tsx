"use client";
import { Button } from "@/components/ui/button";
import { AddUserToProject } from "@/pages/setting/form/AddUserToProject";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const SettingsPage = () => {
  const router = useRouter();
  return (
    <div className="p-[30px] flex flex-col gap-10">
      <Button type="submit" onClick={() => router.back()} className="max-w-min">
        <ArrowLeft /> Back
      </Button>
      <AddUserToProject />
      <div></div>
    </div>
  );
};
export default SettingsPage;
