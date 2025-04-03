"use client";
import { Header } from "@/components/layout/Header";
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
      <div className="w-full">
        <Header />
        <div>Org Page</div>
      </div>
    </SidebarProvider>
  );
};
export default OrganisationPage;
