import "dotenv/config";
import { Template, defaultBuildLogger } from "e2b";
import { template } from "./template";

async function main() {
  await Template.build(template, {
    alias: "vite-shadcn-bun",
    onBuildLogs: defaultBuildLogger(),
  });
}

main().catch(console.error);
