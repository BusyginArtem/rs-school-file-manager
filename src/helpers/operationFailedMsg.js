import { OPERATION_FAILED_MSG } from "../constants.js";

export default () => {
  process.stdout.write(`${OPERATION_FAILED_MSG}\n`);
};
