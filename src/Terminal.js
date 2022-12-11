import { homedir } from "node:os";
// constants
import { COMMANDS } from "./constants.js";
// helpers
import {
  getCwd,
  exitProcess,
  throwSyntaxMsg,
  removeExtraSpaces,
  commandRules,
} from "./helpers/index.js";

class Terminal {
  initProcess({ startMsg, exitMsg }) {
    process.stdout.write(startMsg);
    process.chdir(homedir());
    process.stdout.write(getCwd());

    process.stdin.on("data", (data) => {
      const chunk = data.toString().trim();

      if (chunk.includes(".exit")) {
        exitProcess(exitMsg);
      }

      Terminal.handleCommands(chunk);
    });

    process.on("SIGINT", () => exitProcess(exitMsg));
  }

  static validateCommand(command, args) {
    if (!COMMANDS.includes(command)) {
      throwSyntaxMsg();
      return false;
    }

    return commandRules[command](args);
  }

  static handleCommands(data) {
    const [command, ...args] = removeExtraSpaces(data).split(" ");

    if (Terminal.validateCommand(command, args)) {
      console.log("DATA", data);
    }
  }

  static getInstance() {
    if (!Terminal.instance) {
      Terminal.instance = new Terminal();

      return Terminal.instance;
    }

    return Terminal.instance;
  }
}

export default Terminal.getInstance();
