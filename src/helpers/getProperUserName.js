import exitProcess from "./exitProcess.js";
// constants
import { USER_NAME_ARG, ERROR_WRONG_START_ARGS } from "../constants.js";

export default () => {
  const args = process.argv.slice(2);

  if (!args.length || args.every((arg) => !arg.includes(USER_NAME_ARG))) {
    exitProcess(ERROR_WRONG_START_ARGS);
  }

  const userNameArg = args.find((arg) => arg.includes(USER_NAME_ARG));
  const name = userNameArg.split("=")[1];

  if (!name) {
    exitProcess(ERROR_WRONG_START_ARGS);
  }

  return name;
};
