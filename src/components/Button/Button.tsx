"use client";
import Image from "next/image";
import { ButtonBase } from "./Button.types";

const Button: React.FC<ButtonBase> = ({ handleClick }) => {
  return (
    <button
      className="bg-purple-500 overflow-hidden p-4 cursor-pointer rounded-full flex items-center justify-center duration-150 hover:bg-black focus:bg-black"
      onClick={handleClick}
    >
      <Image
        src={"images/icon-arrow.svg"}
        width={50}
        height={50}
        alt="arrow icon"
      />
    </button>
  );
};

export default Button;
