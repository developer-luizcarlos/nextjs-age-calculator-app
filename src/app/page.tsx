"use client";
import InputWrapper from "@/components/InputWrapper/InputWrapper";
import Button from "@/components/Button/Button";
import { monthFormat } from "@/utils/dateFormat";
import {
  calculateYearsMonthsAndDaysAlive,
  isDayAccordingToMonthAndYear,
} from "@/utils/dateValidation";
import { ChangeEvent, useState } from "react";

const Home: React.FC = () => {
  const [totalYears, setTotalYears] = useState<number>(0);
  const [totalMonths, setTotalMonths] = useState<number>(0);
  const [totalDays, setTotalDays] = useState<number>(0);

  const [yearValue, setYearValue] = useState<string>("");
  const [monthValue, setMonthValue] = useState<string>("");
  const [dayValue, setDayValue] = useState<string>("");

  const [yearError, setYearError] = useState<boolean>(false);
  const [monthError, setMonthError] = useState<boolean>(false);
  const [dayError, setDayError] = useState<boolean>(false);

  const calculateAge = () => {
    displayInvalidDateValueErrors();
    if (isNegativeAge()) return;
    const isInvalidDateValues = dayError || monthError || yearError;

    if (isInvalidDateValues) return;

    const day = parseFloat(dayValue);
    const month = parseFloat(monthFormat(monthValue));
    const year = parseFloat(yearValue);

    const isValidDate = isDayAccordingToMonthAndYear(day, month, year);
    if (!isValidDate) {
      setDayError(true);
      setMonthError(true);
      setYearError(true);
      return;
    }

    const totalAge = calculateYearsMonthsAndDaysAlive(year, month, day);
    setTotalDays(totalAge.daysPassed);
    setTotalMonths(totalAge.monthsPassed);
    setTotalYears(totalAge.yearsPassed);
  };

  const displayInvalidDateValueErrors = () => {
    const [day, month, year] = [
      parseFloat(dayValue),
      parseFloat(monthValue),
      parseFloat(yearValue),
    ];

    const invalidDay = day.toString() === "" || day < 1 || day > 31;
    const invalidMonth = month.toString() === "" || month < 1 || month > 12;
    const invalidYear =
      year.toString() === "" || year < 1950 || year > new Date().getFullYear();

    setDayError(invalidDay);
    setMonthError(invalidMonth);
    setYearError(invalidYear);
  };

  const isNegativeAge = () => {
    const date = new Date();
    const [month, year] = [parseFloat(monthValue), parseFloat(yearValue)];
    const [currentMonth, currentYear] = [
      date.getMonth() + 1,
      date.getFullYear(),
    ];

    const isAnyDateValueNaN = isNaN(month) || isNaN(year);
    if (isAnyDateValueNaN) return true;

    if (month > currentMonth && year === currentYear) return true;
    else return false;
  };

  const validateInputValue = (
    min: number,
    max: number,
    value: string
  ): boolean => {
    const val = parseFloat(value);
    if (!val || val < min || val > max) return true;
    else return false;
  };

  return (
    <div className="h-dvh flex items-center justify-center bg-gray-100">
      <article className="bg-white min-w-96 w-full max-w-3/5 p-8 round">
        <header className="flex items-center gap-3">
          <InputWrapper
            errorMessage="Must be a valid day"
            isErrorShow={dayError}
            label="DAY"
            maxLength={2}
            value={dayValue}
            handleChange={(e: ChangeEvent<HTMLInputElement>) => {
              setDayValue(e.target.value);
              setDayError(validateInputValue(1, 31, e.target.value));
            }}
          />
          <InputWrapper
            errorMessage="Must be a valid month"
            isErrorShow={monthError}
            label="MONTH"
            maxLength={2}
            value={monthValue}
            handleChange={(e: ChangeEvent<HTMLInputElement>) => {
              setMonthValue(e.target.value);
              setMonthError(validateInputValue(1, 12, e.target.value));
            }}
          />
          <InputWrapper
            errorMessage="Must be a valid year"
            isErrorShow={yearError}
            label="YEAR"
            maxLength={4}
            value={yearValue}
            handleChange={(e: ChangeEvent<HTMLInputElement>) => {
              setYearValue(e.target.value);
              setYearError(
                validateInputValue(
                  1950,
                  new Date().getFullYear(),
                  e.target.value
                )
              );
            }}
          />
        </header>
        <div className="flex items-center gap-3">
          <hr className="w-full text-gray-200" />
          <Button handleClick={calculateAge} />
          <hr className="w-full block text-gray-200 md:hidden" />
        </div>
        <ul>
          <li className="text-6xl italic font-bold">
            <span className="text-purple-500">{totalYears ?? "--"}</span>
            <span className="text-black ml-3">years</span>
          </li>
          <li className="text-6xl italic font-bold">
            <span className="text-purple-500">{totalMonths ?? "--"}</span>
            <span className="text-black ml-3">months</span>
          </li>
          <li className="text-6xl italic font-bold">
            <span className="text-purple-500">{totalDays ?? "--"}</span>
            <span className="text-black ml-3">days</span>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Home;
