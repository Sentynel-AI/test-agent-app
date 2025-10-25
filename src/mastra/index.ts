import { Mastra } from "@mastra/core/mastra";
 
import { publisherAgent } from "./agents/example-publisher-agent";
import { copywriterAgent } from "./agents/example-copywriter-agent";
import { editorAgent } from "./agents/example-editor-agent";
 
export const mastra = new Mastra({
  telemetry: {
    serviceName: "demo-app",
    enabled: true,
    sampling: {
      type: "always_on",
    },
    export: {
      type: "otlp",
      endpoint: "http://localhost:3000/api/traces",
      headers: {
        "Content-Type": "application/json",
      },
    },
  },
  agents: { copywriterAgent, editorAgent, publisherAgent }
});