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
  // os: () => {
  //   if (args.length !== 1) {
  //     showSyntaxMsg();

  //     return false;
  //   }

  //   return true;
  // },
};
