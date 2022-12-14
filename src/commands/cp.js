// import { join } from "path";
// import { rename } from "node:fs/promises";
// // helpers
// import { printCwd, showSyntaxMsg } from "../helpers/index.js";

// export default async (args) => {
//   try {
//     console.log("args ", args, args.split(" "));
//     let [initialFile, targetFile] = args.split(" ");
//     initialFile = initialFile.replaceAll(/("|')/g, "");
//     targetFile = targetFile.replaceAll(/("|')/g, "");

//     const initialFilePath = join(process.cwd(), initialFile);
//     const targetFilePath = join(process.cwd(), targetFile);

//     await rename(initialFilePath, targetFilePath);

//     printCwd();
//   } catch (error) {
//     console.log("ERROR ", error);
//     showSyntaxMsg();
//   }
// };
