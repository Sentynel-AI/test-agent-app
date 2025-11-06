import { Mastra } from "@mastra/core/mastra";
import { OtelExporter } from "@mastra/otel-exporter";

import { publisherAgent } from "./agents/example-publisher-agent";
import { copywriterAgent } from "./agents/example-copywriter-agent";
import { editorAgent } from "./agents/example-editor-agent";
import { chatRoute } from "@mastra/ai-sdk";

if (!process.env.SENTINEL_API_KEY || !process.env.SENTINEL_OTEL_ENDPOINT) {
  throw new Error("SENTINEL_API_KEY or SENTINEL_OTEL_ENDPOINT is not set");
}

export const mastra = new Mastra({
  observability: {
    configs: {
      otel: {
        serviceName: "demo-app",
        exporters: [
          new OtelExporter({
            provider: {
              custom: {
                endpoint: process.env.SENTINEL_OTEL_ENDPOINT,
                protocol: "http/json",
                headers: {
                  "Content-Type": "application/json",
                  "API-Key": process.env.SENTINEL_API_KEY,
                },
              },
            },
          }),
        ],
      },
    },
  },
  agents: { copywriterAgent, editorAgent, publisherAgent },
  server: {
    apiRoutes: [
      chatRoute({
        path: "/chat",
        agent: "publisherAgent",
      }),
    ],
  },
});
