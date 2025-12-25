import { Template, waitForURL } from "e2b";

export const template = Template()
  .fromBunImage("1.3")
  .aptInstall(["git"])
  .gitClone(
    "https://github.com/tonmoydeb404/vite-react-shadcn-template.git",
    "/home/user/vite-app"
  )
  .setWorkdir("/home/user/vite-app")
  .runCmd("bun install")
  .bunInstall(["@types/node"], { dev: true })
  .setWorkdir("/home/user")
  .runCmd("mv vite-app/* . && rm -rf vite-app")
  .setWorkdir("/home/user")
  .setStartCmd("bun run dev", waitForURL("http://localhost:5173"));
