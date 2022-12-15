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
  cat: (args) => {
    if (!args) {
      showSyntaxMsg();

      return false;
    }

    return true;
  },
  add: (args) => {
    if (!args) {
      showSyntaxMsg();

      return false;
    }

    return true;
  },
  cp: (args) => {
    if (!args) {
      showSyntaxMsg();

      return false;
    }

    return true;
  },
  rn: (args) => {
    if (!args) {
      showSyntaxMsg();

      return false;
    }

    return true;
  },
  rm: (args) => {
    if (!args) {
      showSyntaxMsg();

      return false;
    }

    return true;
  },
  mv: (args) => {
    if (!args) {
      showSyntaxMsg();

      return false;
    }

    return true;
  },
};
