import { Mastra } from "@mastra/core/mastra";
import { OtelExporter } from "@mastra/otel-exporter";

import { publisherAgent } from "./agents/example-publisher-agent";
import { copywriterAgent } from "./agents/example-copywriter-agent";
import { editorAgent } from "./agents/example-editor-agent";

if (!process.env.SENTYNEL_API_KEY) {
  throw new Error("SENTYNEL_API_KEY is not set");
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
                endpoint: "http://localhost:3000/api/traces",
                protocol: "http/json",
                headers: {
                  "Content-Type": "application/json",
                  "API-Key": process.env.SENTYNEL_API_KEY,
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
    cors: {
      origin: ["http://localhost:3000", "http://localhost:3001"],
      credentials: true,
    },
    middleware: [
      {
        path: "/api/agents/*/stream",
        handler: async (c, next) => {
          const body = await c.req.json();

          // Handle compatibility with assistant-ui
          if ("state" in body && body.state == null) {
            delete body.state;
            delete body.tools;
          }

          c.req.json = async () => body;

          return next();
        },
      },
    ],
  },
});
