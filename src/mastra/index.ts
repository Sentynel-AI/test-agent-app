import { Mastra } from "@mastra/core/mastra";
import { OtelExporter } from "@mastra/otel-exporter";

import { publisherAgent } from "./agents/example-publisher-agent";
import { copywriterAgent } from "./agents/example-copywriter-agent";
import { editorAgent } from "./agents/example-editor-agent";

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
                  "X-API-Key": "default-api-key",
                },
              },
            },
          }),
        ],
      },
    },
  },
  agents: { copywriterAgent, editorAgent, publisherAgent },
});
