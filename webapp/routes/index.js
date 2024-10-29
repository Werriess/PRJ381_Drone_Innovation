import express from "express";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const router = express.Router();

async function loadRoutes(router) {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const apiPath = path.join(__dirname, "api");
  const files = fs.readdirSync(apiPath);
  for (const file of files) {
    if (file.endsWith(".js")) {
      const route = await import(path.join(apiPath, file));
      router.use(route.default);
    }
  }
}

await loadRoutes(router);

export default router;
