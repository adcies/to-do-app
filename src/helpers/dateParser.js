export const parseDateToInputFormat = (date) => {
  //parses from locale date string
  const parsedDate = date.split('.').reverse().join('-');
  return parsedDate;
};
