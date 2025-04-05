"use client";

import { Header } from "@/components/layout/Header";
import { SideBar } from "@/components/layout/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { DocumentView } from "@/pages/project/document/DocumentView";
import { useGetDocumentsQuery } from "@/store/documents/documentService";
import { useParams } from "next/navigation";

const OrganisationPage = () => {
  const orgId = useParams<{ id: string }>();
  const { data, error } = useGetDocumentsQuery(orgId?.id ?? null, {
    skip: !orgId,
  });
  useErrorHandler(error);
  return (
    <SidebarProvider>
      <SideBar data={data ?? []} />
      <div className="w-full">
        <Header />
        <DocumentView />
      </div>
    </SidebarProvider>
  );
};

export default OrganisationPage;
