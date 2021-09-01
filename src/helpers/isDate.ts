export const isDate = (input: any): boolean => {
  return input instanceof Date && !isNaN(input.valueOf());
};
