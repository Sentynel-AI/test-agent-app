import * as React from "react";
import { Bot, Sparkles, Plus } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function ThreadListSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="aui-sidebar-header space-y-4 border-b bg-linear-to-b from-sidebar to-sidebar/80 p-4">
        <div className="flex items-center gap-3">
          <Avatar className="size-10 shrink-0 border-2 border-primary/20 shadow-sm">
            <AvatarFallback className="bg-linear-to-br from-primary/20 to-primary/10">
              <Bot className="size-5 text-primary" />
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <div className="flex items-center gap-1.5">
              <h2 className="truncate text-sm font-bold">Publisher Agent</h2>
              <Sparkles className="size-3 shrink-0 text-primary" />
            </div>
            <p className="truncate text-xs text-muted-foreground">
              Content Assistant
            </p>
          </div>
        </div>
        
        <Button 
          className="w-full justify-start gap-2 bg-primary/10 text-primary hover:bg-primary/20"
          variant="ghost"
        >
          <Plus className="size-4" />
          New Conversation
        </Button>
      </SidebarHeader>
      
      <SidebarContent className="aui-sidebar-content px-2 py-4">
        <div className="mb-3 px-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Recent Conversations
          </h3>
        </div>
        <ThreadList />
      </SidebarContent>
      
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2.5 rounded-lg bg-muted/50 p-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Sparkles className="size-4 text-primary" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="text-xs font-medium">Enhanced Mode</span>
            <span className="text-xs text-muted-foreground">Powered by AI</span>
          </div>
        </div>
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  );
}
