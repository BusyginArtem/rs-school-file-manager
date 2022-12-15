import removeQuotes from "./removeQuotes.js";

export default (str) => {
  const symbols = str.trim().split("");
  let isQuotationOpened = false;
  let spaceIdx = 0;

  for (let index = 0; index < symbols.length; index++) {
    const elem = symbols[index];

    if (/("|')/.test(elem) && !isQuotationOpened) {
      isQuotationOpened = true;
      continue;
    }

    if (/("|')/.test(elem) && isQuotationOpened) {
      isQuotationOpened = false;
      continue;
    }

    if (!isQuotationOpened && /\s/.test(elem)) {
      spaceIdx = index;
    }
  }

  return [
    removeQuotes(str.slice(0, spaceIdx)),
    removeQuotes(str.slice(spaceIdx + 1)),
  ];
};
