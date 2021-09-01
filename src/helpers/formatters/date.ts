import dateFormat from 'date-fns/format';

export const DEFAULT_DATE_FORMAT = "PPPp"; // July 25th, 2021 at 7:46 PM

export const dateToFormat = (date: string) => 
  dateFormat(new Date(date), "PPPp");
