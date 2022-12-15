import { join } from "path";
import { readFile } from "node:fs/promises";
// helpers
import { printCwd, removeQuotes, showSyntaxMsg } from "../helpers/index.js";

export default async (path) => {
  try {
    path = removeQuotes(path);

    const filePath = join(process.cwd(), path);

    const content = await readFile(filePath, { encoding: "utf8" });
    process.stdout.write(`${content}\n`);

    printCwd();
  } catch (error) {
    showSyntaxMsg();
  }
};
