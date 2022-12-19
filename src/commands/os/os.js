import { EOL, homedir, userInfo, arch } from "node:os";
import { handleCpus } from "./handleCpus.js";

export default (arg) => {
  switch (arg) {
    case "--EOL":
      process.stdout.write(`${JSON.stringify(EOL)}\n`);
      break;
    case "--cpus":
      handleCpus();
      break;
    case "--homedir":
      process.stdout.write(`${homedir()}\n`);
      break;
    case "--username":
      process.stdout.write(`${userInfo().username}\n`);
      break;
    case "--architecture":
      process.stdout.write(`${arch()}\n`);
      break;
  }
};
