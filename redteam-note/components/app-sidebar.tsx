import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";
import { getAllNotes } from "@/lib/markdown";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Get notes dynamically using your existing function
const noteSlugs = getAllNotes();

// Format the slugs for display in the sidebar
const notesData = noteSlugs.map(slug => ({
  id: slug,
  // Convert slug to title format (e.g., "initial-access" -> "Initial Access")
  title: slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' '),
  url: `/notes/${slug}`
}));

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="bg-sidebar text-sidebar-foreground">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Red Team Notes</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {notesData.map((note) => (
              <SidebarMenuItem key={note.id}>
                <SidebarMenuButton asChild>
                  <a href={note.url} className="font-medium text-sidebar-foreground">
                    {note.title}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}