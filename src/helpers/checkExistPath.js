import { access, constants } from "fs";

export default (path) => {
  return new Promise((resolve, reject) =>
    access(path, constants.F_OK, (err, result) =>
      err ? reject(err) : resolve(result)
    )
  );
};
