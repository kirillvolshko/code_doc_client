"use client";
import { Spinner } from "@/components/common/ui/Spinner";
import { Button } from "@/components/ui/button";
import { useUserId } from "@/hooks/useUserId";
import { AddUserToProject } from "@/pagesComponents/settings/form/AddUserToProject";
import { UserTable } from "@/pagesComponents/settings/UsersTabel";
import { useGetUsersByProjectQuery } from "@/store/project/projectService";
import { ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const ClientSettingsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = useUserId();
  const projectId = searchParams?.get("id") || "";
  const { data, isLoading } = useGetUsersByProjectQuery(projectId, {
    skip: !projectId,
  });
  if (isLoading) return <Spinner />;
  return (
    <div className="p-[30px] flex flex-col gap-10 min-h-[calc(100vh-100px)]">
      <Button type="submit" onClick={() => router.back()} className="max-w-min">
        <ArrowLeft /> Back
      </Button>
      <AddUserToProject project_id={projectId} />
      <UserTable users={(data ?? []).filter((user) => user.id !== userId)} />
    </div>
  );
};
export default ClientSettingsPage;
