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

type SideBarProps = {
  data: IDocumentResponse[];
};

export const SideBar = ({ data }: SideBarProps) => {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className={cn(open ? "flex items-end" : "")}>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
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
            <SidebarMenuButton>Organiastion dont have docs</SidebarMenuButton>
          </SidebarMenu>
        )}
      </SidebarContent>
    </Sidebar>
  );
};
