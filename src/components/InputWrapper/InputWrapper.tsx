"use client";
import { type InputWrapperBase } from "./InputWrapper.types";

export function InputWrapper({
  errorMessage,
  isErrorShow,
  handleChange,
  label,
  maxValue,
  value,
}: InputWrapperBase) {
  return (
    <div className="flex flex-col">
      <label
        className={`uppercase ${isErrorShow ? "text-red-500" : "text-black"}`}
      >
        {label}
      </label>
      <input
        type="number"
        min={0}
        max={maxValue}
        value={value}
        className={`${
          isErrorShow ? "border-red-500" : "border-gray-300"
        } border rounded p-4 max-w-40 my-2 focus:outline-purple-500 text-2xl`}
        onChange={handleChange}
      />
      <small
        className={`text-red-500 ${isErrorShow ? "opacity-100" : "opacity-0"}`}
      >
        {errorMessage}
      </small>
    </div>
  );
}
