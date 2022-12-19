import { unlink } from "node:fs/promises";
import { join } from "path";
// helpers
import {
  printCwd,
  removeQuotes,
  operationFailedMsg,
} from "../helpers/index.js";

export default async (path) => {
  const sourceFilePath = join(process.cwd(), removeQuotes(path));

  try {
    await unlink(sourceFilePath);

    printCwd();
  } catch (error) {
    operationFailedMsg();
  }
};
