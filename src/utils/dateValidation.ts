import { DateTime } from "luxon";

export function calculateYearsMonthsAndDaysAlive(
  year: number,
  month: number,
  day: number
) {
  const timePassed = DateTime.now().diff(DateTime.local(year, month, day), [
    "years",
    "months",
    "days",
  ]);
  const yearsPassed = timePassed.years;
  const monthsPassed = timePassed.months;
  const daysPassed = Math.round(timePassed.days);
  return { yearsPassed, monthsPassed, daysPassed };
}

export function isDayAccordingToMonthAndYear(
  day: number,
  month: number,
  year: number
): boolean {
  const isAThirdOneDaysMonth =
    (day <= 31 && month === 1) ||
    (day <= 31 && month === 3) ||
    (day <= 31 && month === 5) ||
    (day <= 31 && month === 7) ||
    (day <= 31 && month === 8) ||
    (day <= 31 && month === 10) ||
    (day <= 31 && month === 12);

  const isThirdDaysMonth =
    (day <= 30 && month === 4) ||
    (day <= 30 && month === 6) ||
    (day <= 30 && month === 9) ||
    (day <= 30 && month === 11);

  const isTwentyEightDaysMonth = day <= 28 && month === 2 && !isLeapYear(year);

  const isTwentyNineDaysMonth = day <= 29 && month === 2 && isLeapYear(year);

  if (
    !isThirdDaysMonth &&
    !isAThirdOneDaysMonth &&
    !isTwentyEightDaysMonth &&
    !isTwentyNineDaysMonth
  )
    return false;
  else return true;
}

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}