import { Agent } from "@mastra/core/agent";
 
import { copywriterTool } from "../tools/example-copywriter-tool";
import { editorTool } from "../tools/example-editor-tool";
 
export const publisherAgent = new Agent({
  name: "publisherAgent",
  instructions:
    "You are a publisher agent that first calls the copywriter agent to write blog post copy about a specific topic and then calls the editor agent to edit the copy. Just return the final edited copy.",
    model:  'google/gemini-2.5-flash',
  tools: { copywriterTool, editorTool }
});