"use client";
import InputWrapper from "@/components/InputWrapper/InputWrapper";
import { monthFormat } from "@/utils/dateFormat";
import {
  calculateYearsMonthsAndDaysAlive,
  isDayAccordingToMonthAndYear,
} from "@/utils/dateValidation";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const Home = () => {
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
    verifyExistentErrors();
    if (
      dayError ||
      monthError ||
      yearError ||
      dayValue === "" ||
      monthValue === "" ||
      yearValue === ""
    )
      return;

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

  const verifyExistentErrors = () => {
    if (dayValue === "") {
      setDayError(true);
    } else {
      setDayError(false);
    }

    if (monthValue === "") {
      setMonthError(true);
    } else {
      setMonthError(false);
    }

    if (yearValue === "") {
      setYearError(true);
    } else {
      setYearError(false);
    }
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
    <div className="h-dvh flex items-center justify-center bg-green-100">
      <article className="bg-white w-3/5 p-8 round">
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
          <button
            className="bg-purple-500 p-4 overflow-hidden cursor-pointer rounded-full flex items-center justify-center"
            onClick={calculateAge}
          >
            <Image
              src={"images/icon-arrow.svg"}
              width={50}
              height={50}
              alt="arrow icon"
            />
          </button>
        </div>
        <ul>
          <li className="text-6xl italic font-bold">
            <span className="text-purple-500">{totalYears || "--"}</span>
            <span className="text-black ml-3">years</span>
          </li>
          <li className="text-6xl italic font-bold">
            <span className="text-purple-500">{totalMonths || "--"}</span>
            <span className="text-black ml-3">months</span>
          </li>
          <li className="text-6xl italic font-bold">
            <span className="text-purple-500">{totalDays || "--"}</span>
            <span className="text-black ml-3">days</span>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Home;
