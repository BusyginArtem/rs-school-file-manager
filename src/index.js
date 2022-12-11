import Terminal from "./Terminal.js";
import User from "./User.js";

  // if (opsys == "darwin") {
  //   opsys = "MacOS";
  // } else if (opsys == "win32" || opsys == "win64") {
  //   opsys = "Windows";
  // } else if (opsys == "linux") {
  //   opsys = "Linux";
  // }

const run = () => {
  const greetMsg = User.greetMsg();
  const exitMsg = User.goodbyeMsg();

  Terminal.initProcess({ startMsg: greetMsg, exitMsg: exitMsg });
};

run();
