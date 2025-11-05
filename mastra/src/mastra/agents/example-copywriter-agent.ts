import { Agent } from "@mastra/core/agent";
 
export const copywriterAgent = new Agent({
  name: "copywriter-agent",
  instructions: "You are a copywriter agent that writes blog post copy.",
  model: 'google/gemini-2.5-flash',
});