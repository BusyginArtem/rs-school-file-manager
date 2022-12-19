export default (line) => {
  return line
    .split(" ")
    .filter((item) => item)
    .join(" ");
};
