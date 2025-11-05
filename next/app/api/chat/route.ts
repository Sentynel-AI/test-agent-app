import { mastra } from "@mastra-demo/mastra";
import { UIMessage, convertToModelMessages } from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  
  // Get the publisher agent from Mastra
  const agent = mastra.getAgent("publisherAgent");
  
  // Convert UI messages to model format for Mastra agent
  const convertedMessages = convertToModelMessages(messages);
  
  // Stream response from Mastra agent
  const agentResponse = await agent.stream(convertedMessages);
  
  // Create a stream in AI SDK data stream format
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        let fullText = '';
        
        // Stream text chunks from the agent
        for await (const chunk of agentResponse.textStream) {
          fullText += chunk;
          // Format as AI SDK data stream: 0:"text content"
          const line = `0:${JSON.stringify(fullText)}\n`;
          controller.enqueue(encoder.encode(line));
        }
        
        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Vercel-AI-Data-Stream': 'v1',
    },
  });
}
