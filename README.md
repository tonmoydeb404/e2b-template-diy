# vite-shadcn-bun-template - E2B Sandbox Template

This is an E2B sandbox template that sets up a Vite React project with shadcn/ui components using Bun.

## Prerequisites

Before you begin, make sure you have:

- An E2B account (sign up at [e2b.dev](https://e2b.dev))
- Your E2B API key (get it from your [E2B dashboard](https://e2b.dev/dashboard))
- Node.js and npm/yarn (or similar) installed

## Configuration

1. Create a `.env` file in your project root or set the environment variable:
   ```
   E2B_API_KEY=your_api_key_here
   ```

## Installing Dependencies

```bash
npm install e2b dotenv
```

## Building the Template

```bash
# For development
npm run e2b:build:dev

# For production
npm run e2b:build:prod
```

## Using the Template in a Sandbox

Once your template is built, you can use it in your E2B sandbox:

```typescript
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
  console.log(`Access your Vite app at: http://${host}`);

  // You can now interact with the sandbox
  // For example, run commands:
  console.time("Command execution");
  const result = await sandbox.commands.exec("ls -la");
  console.timeEnd("Command execution");
  console.log("Files in sandbox:", result.stdout);

  // Keep the sandbox alive for a while
  console.log("Sandbox is ready. Press Ctrl+C to stop.");

  // In a real app, you'd handle cleanup
  // await sandbox.close()
}

main().catch(console.error);
```

## Running the Example

```bash
npm run e2b:run
```

## Template Structure

- `template.ts` - Defines the sandbox template configuration
- `build.dev.ts` - Builds the template for development
- `build.prod.ts` - Builds the template for production

## What's Included

- Vite React TypeScript project
- Tailwind CSS configured
- shadcn/ui initialized with Button component
- Development server running on port 5173

## Next Steps

1. Customize the Vite app in the sandbox
2. Add more shadcn/ui components as needed
3. Check out the [E2B documentation](https://e2b.dev/docs) for more advanced usage
4. See [shadcn/ui docs](https://ui.shadcn.com) for component usage
