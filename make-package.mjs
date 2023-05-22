import { cp } from "node:fs/promises";

await cp("./@localhostonly", "./node_modules/@localhostonly", {
  recursive: true,
});
