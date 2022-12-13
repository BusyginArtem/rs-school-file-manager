import { readdir } from "node:fs/promises";
// helpers
import { printCwd } from "../helpers/index.js";

const sortByField = (arr, field) =>
  arr.sort((a, b) => (a[field] > b[field] ? 1 : -1));

export default async () => {
  const entities = await readdir(process.cwd(), { withFileTypes: true });

  const files = [];
  const directories = [];

  for (const entity of entities) {
    const isFile = entity.isFile();
    const type = isFile ? "file" : "directory";

    if (isFile) {
      files.push({
        Name: entity.name,
        Type: type,
      });
    } else {
      directories.push({
        Name: entity.name,
        Type: type,
      });
    }
  }

  const processedEntities = [
    ...sortByField(directories, "Name"),
    ...sortByField(files, "Name"),
  ];

  console.table(processedEntities);
  printCwd();
};
