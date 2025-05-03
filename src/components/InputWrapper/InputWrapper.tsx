"use client";
import { type InputWrapperBase } from "./InputWrapper.types";

const InputWrapper: React.FC<InputWrapperBase> = ({
  errorMessage,
  isErrorShow,
  handleChange,
  label,
  maxLength,
  value,
}) => {
  return (
    <div className="flex flex-col">
      <label
        className={`uppercase ${isErrorShow ? "text-red-500" : "text-black"}`}
      >
        {label}
      </label>
      <input
        type="text"
        minLength={1}
        maxLength={maxLength}
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
};

export default InputWrapper;
