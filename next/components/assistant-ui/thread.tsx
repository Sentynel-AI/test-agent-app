import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  PencilIcon,
  RefreshCwIcon,
  Square,
  Bot,
  User,
} from "lucide-react";

import {
  ActionBarPrimitive,
  BranchPickerPrimitive,
  ComposerPrimitive,
  ErrorPrimitive,
  MessagePrimitive,
  ThreadPrimitive,
} from "@assistant-ui/react";

import type { FC } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import * as m from "motion/react-m";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MarkdownText } from "@/components/assistant-ui/markdown-text";
import { ToolFallback } from "@/components/assistant-ui/tool-fallback";
import { TooltipIconButton } from "@/components/assistant-ui/tooltip-icon-button";
import {
  ComposerAttachments,
  UserMessageAttachments,
} from "@/components/assistant-ui/attachment";

import { cn } from "@/lib/utils";

export const Thread: FC = () => {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <ThreadPrimitive.Root
          className="aui-root aui-thread-root @container flex h-full flex-col bg-background"
          style={{
            ["--thread-max-width" as string]: "44rem",
          }}
        >
          <ThreadPrimitive.Viewport className="aui-thread-viewport relative flex flex-1 flex-col overflow-x-auto overflow-y-scroll px-4">
            <ThreadPrimitive.If empty>
              <ThreadWelcome />
            </ThreadPrimitive.If>

            <ThreadPrimitive.Messages
              components={{
                UserMessage,
                EditComposer,
                AssistantMessage,
              }}
            />

            <ThreadPrimitive.If empty={false}>
              <div className="aui-thread-viewport-spacer min-h-8 grow" />
            </ThreadPrimitive.If>

            <Composer />
          </ThreadPrimitive.Viewport>
        </ThreadPrimitive.Root>
      </MotionConfig>
    </LazyMotion>
  );
};

const ThreadScrollToBottom: FC = () => {
  return (
    <ThreadPrimitive.ScrollToBottom asChild>
      <TooltipIconButton
        tooltip="Scroll to bottom"
        variant="outline"
        className="aui-thread-scroll-to-bottom absolute -top-12 z-10 self-center rounded-full p-4 disabled:invisible dark:bg-background dark:hover:bg-accent"
      >
        <ArrowDownIcon />
      </TooltipIconButton>
    </ThreadPrimitive.ScrollToBottom>
  );
};

const ThreadWelcome: FC = () => {
  return (
    <div className="aui-thread-welcome-root mx-auto my-auto flex w-full max-w-(--thread-max-width) grow flex-col">
      <div className="aui-thread-welcome-center flex w-full grow flex-col items-center justify-center px-8 pb-8">
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.1 }}
          className="aui-thread-welcome-message-motion-1 mb-2 text-center text-3xl font-bold tracking-tight"
        >
          Welcome to Publisher Agent
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.15 }}
          className="aui-thread-welcome-message-motion-2 mb-8 max-w-lg text-center text-base text-muted-foreground"
        >
          Your AI-powered content creation assistant. I can help you write, edit,
          and publish high-quality blog posts and articles.
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2 }}
          className="mb-12 grid w-full max-w-2xl grid-cols-1 gap-4 @md:grid-cols-3"
        >
          <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-4 text-center shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-full bg-blue-500/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 text-blue-600 dark:text-blue-400"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
            </div>
            <h3 className="font-semibold">Content Creation</h3>
            <p className="text-xs text-muted-foreground">
              Generate high-quality articles and blog posts
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-4 text-center shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-full bg-purple-500/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 text-purple-600 dark:text-purple-400"
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
              </svg>
            </div>
            <h3 className="font-semibold">Smart Editing</h3>
            <p className="text-xs text-muted-foreground">
              Refine and polish your writing instantly
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-4 text-center shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-full bg-green-500/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 text-green-600 dark:text-green-400"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
              </svg>
            </div>
            <h3 className="font-semibold">Quick Publishing</h3>
            <p className="text-xs text-muted-foreground">
              Ready to publish content in seconds
            </p>
          </div>
        </m.div>
      </div>
      <ThreadSuggestions />
    </div>
  );
};

const ThreadSuggestions: FC = () => {
  return (
    <div className="aui-thread-welcome-suggestions grid w-full gap-3 px-4 pb-4 @md:grid-cols-2">
      {[
        {
          title: "Write a blog post",
          label: "about emerging tech trends",
          action: "Write a comprehensive blog post about emerging technology trends in 2025",
          icon: "✨",
        },
        {
          title: "Create product content",
          label: "for SaaS launch",
          action: "Help me create content for a new SaaS product launch",
          icon: "🚀",
        },
        {
          title: "Draft a case study",
          label: "showcasing customer success",
          action: "Draft a case study highlighting customer success and ROI improvements",
          icon: "📊",
        },
        {
          title: "Write thought leadership",
          label: "article for LinkedIn",
          action: "Create a thought leadership article about AI adoption in enterprise",
          icon: "💡",
        },
      ].map((suggestedAction, index) => (
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.25 + 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className="aui-thread-welcome-suggestion-display nth-[n+3]:hidden @md:nth-[n+3]:block"
        >
          <ThreadPrimitive.Suggestion
            prompt={suggestedAction.action}
            send
            asChild
          >
            <Button
              variant="ghost"
              className="aui-thread-welcome-suggestion group h-auto w-full flex-1 flex-wrap items-start justify-start gap-2 rounded-2xl border border-border/50 bg-card/50 px-5 py-4 text-left text-sm shadow-sm transition-all hover:border-primary/20 hover:bg-card hover:shadow-md @md:flex-col"
              aria-label={suggestedAction.action}
            >
              <div className="flex w-full items-center gap-2.5">
                <span className="text-xl">{suggestedAction.icon}</span>
                <span className="aui-thread-welcome-suggestion-text-1 font-semibold text-foreground group-hover:text-primary">
                  {suggestedAction.title}
                </span>
              </div>
              <span className="aui-thread-welcome-suggestion-text-2 text-xs text-muted-foreground">
                {suggestedAction.label}
              </span>
            </Button>
          </ThreadPrimitive.Suggestion>
        </m.div>
      ))}
    </div>
  );
};

const Composer: FC = () => {
  return (
    <div className="aui-composer-wrapper sticky bottom-0 mx-auto flex w-full max-w-(--thread-max-width) flex-col gap-4 overflow-visible rounded-t-3xl bg-linear-to-t from-background via-background to-transparent pb-4 pt-8 md:pb-6">
      <ThreadScrollToBottom />
      <ComposerPrimitive.Root className="aui-composer-root relative flex w-full flex-col rounded-2xl border-2 border-border bg-card px-1 pt-2 shadow-lg shadow-black/5 transition-shadow hover:shadow-xl focus-within:border-primary/50 focus-within:shadow-xl dark:border-muted-foreground/20">
        <ComposerAttachments />
        <ComposerPrimitive.Input
          placeholder="Type your message to Publisher Agent..."
          className="aui-composer-input mb-1 max-h-32 min-h-16 w-full resize-none bg-transparent px-4 pt-1.5 pb-3 text-base outline-none placeholder:text-muted-foreground/60 focus:outline-primary"
          rows={1}
          autoFocus
          aria-label="Message input"
        />
        <ComposerAction />
      </ComposerPrimitive.Root>
      <p className="mx-auto text-center text-xs text-muted-foreground/60">
        Publisher Agent can make mistakes. Consider checking important information.
      </p>
    </div>
  );
};

const ComposerAction: FC = () => {
  return (
    <div className="aui-composer-action-wrapper relative mx-1 mt-2 mb-2 flex items-center justify-end">
      <ThreadPrimitive.If running={false}>
        <ComposerPrimitive.Send asChild>
          <TooltipIconButton
            tooltip="Send message"
            side="bottom"
            type="submit"
            variant="default"
            size="icon"
            className="aui-composer-send size-[34px] rounded-full p-1"
            aria-label="Send message"
          >
            <ArrowUpIcon className="aui-composer-send-icon size-5" />
          </TooltipIconButton>
        </ComposerPrimitive.Send>
      </ThreadPrimitive.If>

      <ThreadPrimitive.If running>
        <ComposerPrimitive.Cancel asChild>
          <Button
            type="button"
            variant="default"
            size="icon"
            className="aui-composer-cancel size-[34px] rounded-full border border-muted-foreground/60 hover:bg-primary/75 dark:border-muted-foreground/90"
            aria-label="Stop generating"
          >
            <Square className="aui-composer-cancel-icon size-3.5 fill-white dark:fill-black" />
          </Button>
        </ComposerPrimitive.Cancel>
      </ThreadPrimitive.If>
    </div>
  );
};

const MessageError: FC = () => {
  return (
    <MessagePrimitive.Error>
      <ErrorPrimitive.Root className="aui-message-error-root mt-2 rounded-md border border-destructive bg-destructive/10 p-3 text-sm text-destructive dark:bg-destructive/5 dark:text-red-200">
        <ErrorPrimitive.Message className="aui-message-error-message line-clamp-2" />
      </ErrorPrimitive.Root>
    </MessagePrimitive.Error>
  );
};

const AssistantMessage: FC = () => {
  return (
    <MessagePrimitive.Root asChild>
      <div
        className="aui-assistant-message-root relative mx-auto flex w-full max-w-(--thread-max-width) animate-in gap-4 py-6 duration-150 ease-out fade-in slide-in-from-bottom-1 last:mb-24"
        data-role="assistant"
      >
        <Avatar className="size-9 shrink-0 border-2 border-primary/20 shadow-sm">
          <AvatarFallback className="bg-linear-to-br from-primary/20 to-primary/10">
            <Bot className="size-5 text-primary" />
          </AvatarFallback>
        </Avatar>
        
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">Publisher Agent</span>
            <span className="text-xs text-muted-foreground">AI Assistant</span>
          </div>
          
          <div className="aui-assistant-message-content rounded-2xl border bg-card/50 px-4 py-3 leading-7 shadow-sm wrap-break-word text-foreground">
            <MessagePrimitive.Parts
              components={{
                Text: MarkdownText,
                tools: { Fallback: ToolFallback },
              }}
            />
            <MessageError />
          </div>

          <div className="aui-assistant-message-footer flex">
            <BranchPicker />
            <AssistantActionBar />
          </div>
        </div>
      </div>
    </MessagePrimitive.Root>
  );
};

const AssistantActionBar: FC = () => {
  return (
    <ActionBarPrimitive.Root
      hideWhenRunning
      autohide="not-last"
      autohideFloat="single-branch"
      className="aui-assistant-action-bar-root col-start-3 row-start-2 -ml-1 flex gap-1 text-muted-foreground data-floating:absolute data-floating:rounded-md data-floating:border data-floating:bg-background data-floating:p-1 data-floating:shadow-sm"
    >
      <ActionBarPrimitive.Copy asChild>
        <TooltipIconButton tooltip="Copy">
          <MessagePrimitive.If copied>
            <CheckIcon />
          </MessagePrimitive.If>
          <MessagePrimitive.If copied={false}>
            <CopyIcon />
          </MessagePrimitive.If>
        </TooltipIconButton>
      </ActionBarPrimitive.Copy>
      <ActionBarPrimitive.Reload asChild>
        <TooltipIconButton tooltip="Refresh">
          <RefreshCwIcon />
        </TooltipIconButton>
      </ActionBarPrimitive.Reload>
    </ActionBarPrimitive.Root>
  );
};

const UserMessage: FC = () => {
  return (
    <MessagePrimitive.Root asChild>
      <div
        className="aui-user-message-root mx-auto flex w-full max-w-(--thread-max-width) animate-in gap-4 py-6 duration-150 ease-out fade-in slide-in-from-bottom-1 first:mt-3 last:mb-5"
        data-role="user"
      >
        <Avatar className="size-9 shrink-0 border-2 border-muted-foreground/20 shadow-sm">
          <AvatarFallback className="bg-linear-to-br from-muted to-muted/50">
            <User className="size-5 text-foreground/70" />
          </AvatarFallback>
        </Avatar>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">You</span>
          </div>
          
          <div className="relative">
            <UserMessageAttachments />
            
            <div className="aui-user-message-content-wrapper">
              <div className="aui-user-message-content rounded-2xl border bg-primary/5 px-4 py-3 wrap-break-word text-foreground">
                <MessagePrimitive.Parts />
              </div>
            </div>
            
            <div className="aui-user-action-bar-wrapper mt-1">
              <UserActionBar />
            </div>
          </div>

          <BranchPicker className="aui-user-branch-picker -mr-1" />
        </div>
      </div>
    </MessagePrimitive.Root>
  );
};

const UserActionBar: FC = () => {
  return (
    <ActionBarPrimitive.Root
      hideWhenRunning
      autohide="not-last"
      className="aui-user-action-bar-root flex items-center gap-1"
    >
      <ActionBarPrimitive.Edit asChild>
        <TooltipIconButton tooltip="Edit" className="aui-user-action-edit">
          <PencilIcon />
        </TooltipIconButton>
      </ActionBarPrimitive.Edit>
    </ActionBarPrimitive.Root>
  );
};

const EditComposer: FC = () => {
  return (
    <div className="aui-edit-composer-wrapper mx-auto flex w-full max-w-(--thread-max-width) flex-col gap-4 px-2 first:mt-4">
      <ComposerPrimitive.Root className="aui-edit-composer-root ml-auto flex w-full max-w-7/8 flex-col rounded-xl bg-muted">
        <ComposerPrimitive.Input
          className="aui-edit-composer-input flex min-h-[60px] w-full resize-none bg-transparent p-4 text-foreground outline-none"
          autoFocus
        />

        <div className="aui-edit-composer-footer mx-3 mb-3 flex items-center justify-center gap-2 self-end">
          <ComposerPrimitive.Cancel asChild>
            <Button variant="ghost" size="sm" aria-label="Cancel edit">
              Cancel
            </Button>
          </ComposerPrimitive.Cancel>
          <ComposerPrimitive.Send asChild>
            <Button size="sm" aria-label="Update message">
              Update
            </Button>
          </ComposerPrimitive.Send>
        </div>
      </ComposerPrimitive.Root>
    </div>
  );
};

const BranchPicker: FC<BranchPickerPrimitive.Root.Props> = ({
  className,
  ...rest
}) => {
  return (
    <BranchPickerPrimitive.Root
      hideWhenSingleBranch
      className={cn(
        "aui-branch-picker-root mr-2 -ml-2 inline-flex items-center text-xs text-muted-foreground",
        className,
      )}
      {...rest}
    >
      <BranchPickerPrimitive.Previous asChild>
        <TooltipIconButton tooltip="Previous">
          <ChevronLeftIcon />
        </TooltipIconButton>
      </BranchPickerPrimitive.Previous>
      <span className="aui-branch-picker-state font-medium">
        <BranchPickerPrimitive.Number /> / <BranchPickerPrimitive.Count />
      </span>
      <BranchPickerPrimitive.Next asChild>
        <TooltipIconButton tooltip="Next">
          <ChevronRightIcon />
        </TooltipIconButton>
      </BranchPickerPrimitive.Next>
    </BranchPickerPrimitive.Root>
  );
};
