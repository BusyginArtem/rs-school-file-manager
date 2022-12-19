import { createReadStream } from "fs";
import { join } from "path";
import { createHash } from "node:crypto";
// helpers
import {
  printCwd,
  operationFailedMsg,
  removeQuotes,
} from "../helpers/index.js";

export default (path) => {
  const sourceFilePath = join(process.cwd(), removeQuotes(path));
  const rreadStream = createReadStream(sourceFilePath);
  let content = "";

  rreadStream.on("data", (chunk) => {
    content += chunk;
  });

  rreadStream.on("error", () => {
    operationFailedMsg();
  });

  rreadStream.on("end", () => {
    const hash = createHash("sha256").update(content).digest("hex");

    process.stdout.write(`${hash}\n`);

    printCwd();
  });
};
