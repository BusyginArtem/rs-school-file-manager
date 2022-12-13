import { homedir } from "node:os";
// constants
import { COMMANDS } from "./constants.js";
// helpers
import {
  printCwd,
  exitProcess,
  showSyntaxMsg,
  commandRules,
} from "./helpers/index.js";
// commands
import commands from "./commands/index.js";

class Terminal {
  initProcess({ startMsg, exitMsg }) {
    process.stdout.write(startMsg);
    process.chdir(homedir());
    printCwd();

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
      showSyntaxMsg();

      return false;
    }

    return commandRules[command](args);
  }

  static splitCommandAndArgs(data) {
    const spaceIdx = data.indexOf(" ");
    let command = "";
    let args = [];

    if (spaceIdx > 0) {
      [command, args] = [data.slice(0, spaceIdx), data.slice(spaceIdx + 1)];
    } else {
      command = data.trim();
    }

    return {
      command,
      args,
    };
  }

  static handleCommands(data) {
    const { command, args } = Terminal.splitCommandAndArgs(data);
    const isCommandValid = Terminal.validateCommand(command, args);

    if (isCommandValid) {
      commands[command](args);
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
