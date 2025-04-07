"use client";

import { Spinner } from "@/components/common/ui/Spinner";
import { Header } from "@/components/layout/Header";
import { SideBar } from "@/components/layout/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { DocumentView } from "@/pages/project/document/DocumentView";
import { useGetDocumentsQuery } from "@/store/documents/documentService";
import { useGetProjectByIdQuery } from "@/store/project/projectService";
import { useParams } from "next/navigation";

const ProjectPage = () => {
  const projectId = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetDocumentsQuery(
    projectId?.id ?? null,
    {
      skip: !projectId,
    }
  );
  const { data: projectArray, isLoading: loadingProject } =
    useGetProjectByIdQuery(projectId?.id ?? "", {
      skip: !projectId,
    });
  const project = projectArray?.[0];
  useErrorHandler(error);
  if (isLoading && loadingProject) return <Spinner />;
  return (
    <SidebarProvider>
      <SideBar data={data ?? []} creator={project?.creator_id ?? ""} />
      <div className="w-full">
        <Header />
        <DocumentView />
      </div>
    </SidebarProvider>
  );
};

export default ProjectPage;
