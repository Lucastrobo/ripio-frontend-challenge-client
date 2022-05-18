export const fixLocaleString = (data, locales, digits) => {
  const fixString = data.toLocaleString(locales, { maximumFractionDigits: digits })
  return fixString;
};