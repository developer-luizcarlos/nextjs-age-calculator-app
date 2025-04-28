"use client";
import Image from "next/image";
import { useState } from "react";
import { InputWrapper } from "@/components/InputWrapper/InputWrapper";

export default function Home() {
  const [totalYears, setTotalYears] = useState<number>(0);
  const [totalMonths, setTotalMonths] = useState<number>(0);
  const [totalDays, setTotalDays] = useState<number>(0);

  const [yearValue, setYearValue] = useState<number>(0);
  const [monthValue, setMonthValue] = useState<number>(0);
  const [dayValue, setDayValue] = useState<number>(0);

  return (
    <div className="h-dvh flex items-center justify-center bg-green-100">
      <article className="bg-white w-3/5 p-8 round">
        <header className="flex items-center gap-3">
          <InputWrapper
            errorMessage="Must be a valid day"
            isErrorShow={false}
            label="DAY"
            maxValue={31}
            handleChange={() => {}}
          />
          <InputWrapper
            errorMessage="Must be a valid month"
            isErrorShow={false}
            label="MONTH"
            maxValue={12}
            handleChange={() => {}}
          />
          <InputWrapper
            errorMessage="Must be a valid year"
            isErrorShow={false}
            label="YEAR"
            maxValue={new Date().getFullYear()}
            handleChange={() => {}}
          />
        </header>
        <div className="flex items-center gap-3">
          <hr className="w-full text-gray-200" />
          <button className="bg-purple-500 p-4 overflow-hidden cursor-pointer rounded-full flex items-center justify-center">
            <Image
              src={"/images/icon-arrow.svg"}
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
}
