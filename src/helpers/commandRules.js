import throwSyntaxMsg from "./throwSyntaxMsg.js";

export default {
  up: (args) => {
    if (args.length) {
      throwSyntaxMsg();

      return false;
    }

    return true;
  },
  ls: (args) => {
    if (args.length) {
      throwSyntaxMsg();

      return false;
    }

    return true;
  },
  cd: () => {
    if (args.length !== 1) {
      throwSyntaxMsg();

      return false;
    }

    return true;
  },
  ls: () => {
    if (args.length !== 1) {
      throwSyntaxMsg();

      return false;
    }

    return true;
  },
};
