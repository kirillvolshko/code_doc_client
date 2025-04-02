"use client";
import { SideBar } from "@/components/layout/SideBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useGetDocumentsQuery } from "@/store/documents/documentService";
import { useParams } from "next/navigation";

const OrganisationPage = () => {
  const orgId = useParams<{ id: string }>();
  const { data } = useGetDocumentsQuery(orgId?.id ?? null, { skip: !orgId });
  return (
    <SidebarProvider>
      <SideBar data={data ?? []} />
      <div>Org Page</div>
    </SidebarProvider>
  );
};
export default OrganisationPage;
