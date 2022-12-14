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
    // console.log(11111, args.split(" ").length);
    if (args.split(" ").length !== 2) {
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
};
