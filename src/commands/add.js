import { join } from "path";
import { writeFile } from "node:fs/promises";
// helpers
import { printCwd, showSyntaxMsg } from "../helpers/index.js";

export default async (path) => {
  try {
    path = path.replaceAll(/("|')/g, "");

    const filePath = join(process.cwd(), path);

    await writeFile(filePath, "");

    printCwd();
  } catch (error) {
    showSyntaxMsg();
  }
};
