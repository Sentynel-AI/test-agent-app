import { Mastra } from "@mastra/core/mastra";
 
import { publisherAgent } from "./agents/example-publisher-agent";
import { copywriterAgent } from "./agents/example-copywriter-agent";
import { editorAgent } from "./agents/example-editor-agent";
 
export const mastra = new Mastra({
  agents: { copywriterAgent, editorAgent, publisherAgent }
});