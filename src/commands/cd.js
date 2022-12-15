import { resolve, parse, sep } from "node:path";
import { platform } from "node:os";
// helpers
import {
  checkExistPath,
  printCwd,
  removeQuotes,
  showSyntaxMsg,
} from "../helpers/index.js";

const isWin = platform() === "win32" || platform() === "win64";

export default async (path) => {
  try {
    path = removeQuotes(path);

    if (!path.startsWith("..")) {
      await checkExistPath(path);
    }

    const dest = resolve(path);
    const destRoot = parse(dest).root;

    const isRootPath =
      path.toLowerCase() === destRoot.toLowerCase().split(sep)[0];

    if (isWin && isRootPath) {
      process.chdir(destRoot);
    } else {
      process.chdir(dest);
    }

    printCwd();
  } catch (err) {
    showSyntaxMsg();
  }
};
