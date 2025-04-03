"use client";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";
import { IDocumentsResponse } from "@/types/document";
import { FileX2, Plus, File } from "lucide-react";
import { ActionButton } from "../common/ui/ActionButton";
import { DialogWindow } from "../common/ui/DialogWindow";
import { CreateDocumentForm } from "@/pages/organisation/forms/CreateDocumentForm";
import { useRouter } from "next/navigation";

type SideBarProps = {
  data: IDocumentsResponse[];
};

export const SideBar = ({ data }: SideBarProps) => {
  const { open: openSideBar } = useSidebar();
  const router = useRouter();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className={cn(openSideBar ? "flex items-end" : "")}>
        <SidebarTrigger />

        <DialogWindow
          triggerComponent={
            <ActionButton
              icon={<Plus />}
              title="Add new document"
              className={cn(openSideBar ? "w-full" : "icon-only w-7 h-7 p-1")}
            />
          }
          classNameTrigger={cn(openSideBar ? "w-full" : "")}
          content={<CreateDocumentForm />}
        />
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {data && data.length > 0 ? (
            data.map((item) => (
              <SidebarMenuButton
                tooltip={item.title}
                className=""
                key={item.id}
                onClick={() =>
                  router.push(`?doc=${item.id}`, { scroll: false })
                }
              >
                <File />
                <span>{item.title}</span>
              </SidebarMenuButton>
            ))
          ) : (
            <SidebarMenuButton>
              <FileX2 />
              <span>Organiastion dont have docs</span>
            </SidebarMenuButton>
          )}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
