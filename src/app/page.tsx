import Image from "next/image";

export default function Home() {
  return (
    <div className="h-dvh flex items-center justify-center bg-green-100">
      <article className="bg-white w-3/5 p-8 round">
        <header></header>
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
            <span className="text-purple-500">--</span>
            <span className="text-black ml-3">years</span>
          </li>
          <li className="text-6xl italic font-bold">
            <span className="text-purple-500">--</span>
            <span className="text-black ml-3">months</span>
          </li>
          <li className="text-6xl italic font-bold">
            <span className="text-purple-500">--</span>
            <span className="text-black ml-3">days</span>
          </li>
        </ul>
      </article>
    </div>
  );
}
