export const parseDateToInputFormat = (date) => {
  //parses from locale date string
  const splitedDate = date.split('.');
  if (splitedDate[0].length === 1) {
    splitedDate[0] = '0' + splitedDate[0];
  }
  const parsedDate = splitedDate.reverse().join('-');
  return parsedDate;
};
