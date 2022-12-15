import { join } from "path";
import { rename } from "node:fs/promises";
// helpers
import { printCwd, showSyntaxMsg, splitToPaths } from "../helpers/index.js";

export default async (args) => {
  try {
    let [initialFile, targetFile] = splitToPaths(args);

    const initialFilePath = join(process.cwd(), initialFile);
    const targetFilePath = join(process.cwd(), targetFile);

    await rename(initialFilePath, targetFilePath);

    printCwd();
  } catch (error) {
    showSyntaxMsg();
  }
};
