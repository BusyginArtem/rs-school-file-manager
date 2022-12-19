import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { pipeline } from "stream";
// helpers
import {
  printCwd,
  operationFailedMsg,
  splitToPaths,
} from "../helpers/index.js";

export default (args) => {
  const [source, target] = splitToPaths(args);

  const rreadStream = createReadStream(join(process.cwd(), source));
  const writeStream = createWriteStream(join(process.cwd(), target));

  pipeline(rreadStream, writeStream, (err) => {
    if (err) {
      operationFailedMsg();
    } else {
      printCwd();
    }
  });
};
