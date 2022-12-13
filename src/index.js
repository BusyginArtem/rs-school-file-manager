import Terminal from "./Terminal.js";
import User from "./User.js";

const run = () => {
  const greetMsg = User.greetMsg();
  const exitMsg = User.goodbyeMsg();

  Terminal.initProcess({ startMsg: greetMsg, exitMsg: exitMsg });
};

run();
