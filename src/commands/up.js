import { join } from "node:path";
// helpers
import { printCwd } from "../helpers/index.js";

export default () => {
  const upPath = join(process.cwd(), "..");

  process.chdir(upPath);
  printCwd();
};
