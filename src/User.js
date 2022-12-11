// constants
import {
  GREET_MSG,
  GOOD_BYE_MSG_FIRST_PART,
  GOOD_BYE_MSG_SECOND_PART,
} from "./constants.js";
// helpers
import { getProperUserName } from "./helpers/index.js";

class User {
  constructor(name) {
    this.name = name;
  }

  greetMsg() {
    return `${GREET_MSG} ${this.name}!\n`;
  }

  goodbyeMsg() {
    return `${GOOD_BYE_MSG_FIRST_PART} ${this.name} ${GOOD_BYE_MSG_SECOND_PART}\n`;
  }

  static getInstance() {
    if (!User.instance) {
      const name = getProperUserName();

      User.instance = new User(name);

      return User.instance;
    }

    return User.instance;
  }
}

export default User.getInstance();
