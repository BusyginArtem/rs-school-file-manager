import { createBrotliDecompress } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { join } from "path";
// helpers
import {
  printCwd,
  operationFailedMsg,
  splitToPaths,
} from "../helpers/index.js";

export default (args) => {
  const [source, target] = splitToPaths(args);

  const sourceStream = createReadStream(join(process.cwd(), source));
  const destinationStream = createWriteStream(join(process.cwd(), target));
  const gunzip = createBrotliDecompress();

  pipeline(sourceStream, gunzip, destinationStream, (err) => {
    if (err) {
      operationFailedMsg();
    } else {
      printCwd();
    }
  });
};
