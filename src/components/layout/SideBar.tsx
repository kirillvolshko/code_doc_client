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
import { IDocumentResponse } from "@/types/document";
import { FileX2, Plus } from "lucide-react";
import { ActionButton } from "../common/ui/ActionButton";
import { DialogWindow } from "../common/ui/DialogWindow";

type SideBarProps = {
  data: IDocumentResponse[];
};

export const SideBar = ({ data }: SideBarProps) => {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className={cn(open ? "flex items-end" : "")}>
        <SidebarTrigger />
        <DialogWindow
          triggerComponent={
            <ActionButton
              icon={<Plus />}
              title="Add new document"
              className={cn(open ? "w-full" : "icon-only w-7 h-7 p-1")}
            />
          }
        />
      </SidebarHeader>
      <SidebarContent className="p-2">
        {data && data.length > 0 ? (
          data.map((item) => (
            <SidebarMenu key={item.org_id}>
              <SidebarMenuButton tooltip={item.title} className="">
                <div className="flex items-center gap-3">
                  <span>{item.title}</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenu>
          ))
        ) : (
          <SidebarMenu>
            <SidebarMenuButton>
              <FileX2 />
              <span>Organiastion dont have docs</span>
            </SidebarMenuButton>
          </SidebarMenu>
        )}
      </SidebarContent>
    </Sidebar>
  );
};
