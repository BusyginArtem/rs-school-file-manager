import { join } from "path";
import { writeFile } from "node:fs/promises";
// helpers
import {
  printCwd,
  removeQuotes,
  operationFailedMsg,
} from "../helpers/index.js";

export default async (path) => {
  try {
    path = removeQuotes(path);

    const filePath = join(process.cwd(), path);

    await writeFile(filePath, "");

    printCwd();
  } catch (error) {
    operationFailedMsg();
  }
};
