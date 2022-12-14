import { join } from "path";
import { readFile } from "node:fs/promises";
// helpers
import { printCwd, showSyntaxMsg } from "../helpers/index.js";

export default async (path) => {
  try {
    path = path.replaceAll(/("|')/g, "");

    const filePath = join(process.cwd(), path);

    const content = await readFile(filePath, { encoding: "utf8" });
    process.stdout.write(`${content}\n`);

    printCwd();
  } catch (error) {
    showSyntaxMsg();
  }
};
