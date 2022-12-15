import { unlink } from "node:fs/promises";
import { join } from "path";
// helpers
import { printCwd, removeQuotes, showSyntaxMsg,  } from "../helpers/index.js";

export default async (path) => {
  const sourceFilePath = join(process.cwd(), removeQuotes(path));

  try {
    await unlink(sourceFilePath);

    printCwd();
  } catch (error) {
    showSyntaxMsg();
  }
};
