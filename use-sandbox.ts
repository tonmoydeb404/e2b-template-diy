import "dotenv/config";
import { Sandbox } from "e2b";

async function main() {
  console.log("Creating E2B sandbox with vite-shadcn-bun-dev template...");

  console.time("Sandbox creation");
  // Create the sandbox
  const sandbox = await Sandbox.create("vite-shadcn-bun-dev");
  console.timeEnd("Sandbox creation");

  console.log("Sandbox created successfully!");
  console.log(
    "The Vite dev server is running on port 5173 inside the sandbox."
  );
  // Get the URL to access the web app
  const host = sandbox.getHost(5173);
  console.log(`Access your Vite app at: https://${host}`);
  // You can now interact with the sandbox
  // For example, run commands:
  console.time("Command execution");
  const result = await sandbox.commands.run("ls -la");
  console.timeEnd("Command execution");
  console.log("Files in sandbox:", result.stdout);

  // Or access the web app at the sandbox's URL
  // Note: In a real application, you might want to proxy or access the URL

  // Keep the sandbox alive for a while
  console.log("Sandbox is ready. Press Ctrl+C to stop.");

  // In a real app, you'd handle cleanup
  // await sandbox.close()
}

main().catch(console.error);
