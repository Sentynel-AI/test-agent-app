"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import {
  useChatRuntime,
  AssistantChatTransport,
} from "@assistant-ui/react-ai-sdk";
import { Thread } from "@/components/assistant-ui/thread";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThreadListSidebar } from "@/components/assistant-ui/threadlist-sidebar";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, Sparkles, CircleDot } from "lucide-react";

export const Assistant = () => {
  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({
      api: process.env.NEXT_PUBLIC_MASTRA_URL,
    }),
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <SidebarProvider>
        <div className="flex h-dvh w-full pr-0.5">
          <ThreadListSidebar />
          <SidebarInset>
            <header className="flex h-20 shrink-0 items-center justify-between border-b bg-linear-to-r from-background via-background to-muted/20 px-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="h-8" />
                <div className="flex items-center gap-3">
                  <Avatar className="size-10 border-2 border-primary/20">
                    <AvatarImage src="/assistant-avatar.png" alt="Publisher Agent" />
                    <AvatarFallback className="bg-linear-to-br from-primary/20 to-primary/10">
                      <Bot className="size-5 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h1 className="text-lg font-semibold tracking-tight">
                        Publisher Agent
                      </h1>
                      <div className="flex items-center gap-1.5 rounded-full bg-green-500/10 px-2 py-0.5">
                        <CircleDot className="size-2 fill-green-500 text-green-500 animate-pulse" />
                        <span className="text-xs font-medium text-green-700 dark:text-green-400">
                          Online
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      AI-powered content creation assistant
                    </p>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex-1 overflow-hidden bg-linear-to-b from-background to-muted/5">
              <Thread />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </AssistantRuntimeProvider>
  );
};
