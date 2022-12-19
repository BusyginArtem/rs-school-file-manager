import { createReadStream, createWriteStream } from "fs";
import { unlink } from "node:fs/promises";
import { join } from "path";
import { pipeline } from "stream";
// helpers
import {
  printCwd,
  operationFailedMsg,
  splitToPaths,
} from "../helpers/index.js";

export default (args) => {
  let [source, target] = splitToPaths(args);

  const sourceFilePath = join(process.cwd(), source);

  const rreadStream = createReadStream(sourceFilePath);
  const writeStream = createWriteStream(join(process.cwd(), target));

  pipeline(rreadStream, writeStream, async (err) => {
    if (err) {
      operationFailedMsg();
    } else {
      await unlink(sourceFilePath);

      printCwd();
    }
  });
};
