import showSyntaxMsg from "./showSyntaxMsg.js";

export default {
  up: (args) => {
    if (args) {
      showSyntaxMsg();

      return false;
    }

    return true;
  },
  ls: (args) => {
    if (args) {
      showSyntaxMsg();

      return false;
    }

    return true;
  },
  cd: (args) => {
    if (!args) {
      showSyntaxMsg();

      return false;
    }

    return true;
  },
  os: (args) => {
    if (!args) {
      showSyntaxMsg();

      return false;
    }

    return true;
  },
};
