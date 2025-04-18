"use client";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";
import { IDocumentsResponse } from "@/types/document";
import { FileX2, Plus, File, Settings } from "lucide-react";
import { ActionButton } from "../common/ui/ActionButton";
import { DialogWindow } from "../common/ui/DialogWindow";
import CreateDocumentForm from "@/pagesComponents/project/forms/CreateDocumentForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useUserId } from "@/hooks/useUserId";
import { Button } from "../ui/button";
import Link from "next/link";

type SideBarProps = {
  data: IDocumentsResponse[];
  creator: string;
  projectId: string;
};

export const SideBar = ({ data, creator, projectId }: SideBarProps) => {
  const { open: openSideBar } = useSidebar();
  const searchParams = useSearchParams();
  const router = useRouter();
  const userId = useUserId();
  const active = searchParams?.get("doc");
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
                className={cn(active === item.id ? "bg-primary/80" : "")}
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

      {creator.length > 0 && creator === userId && (
        <SidebarFooter>
          <Link href={`/settings?id=${projectId}`} className="w-full">
            <Button type="submit" className="w-full">
              <Settings />{" "}
              <span className={cn(openSideBar ? "" : "hidden")}>Settings</span>
            </Button>
          </Link>
        </SidebarFooter>
      )}
    </Sidebar>
  );
};
