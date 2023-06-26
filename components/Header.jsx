'use client'
import { useTheme } from "next-themes";
import Link from "next/link";

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex w-full">
      <div className="text-center p-4 xl:pb-8 outline outline-4">
        <Link href={"/"} className="text-md sm:text-xl md:text-4xl xl:text-6xl">
        Blog
        </Link>
      </div>

      <div
        className="flex gap-x-4 items-center justify-center ml-1 max-w-max
      bg-[#EEEEEE] dark:bg-black outline outline-black dark:outline-white outline-4"
      >
        {/* Dark Theme Button */}
        <button
          className="w-6 md:w-9 lg:w-12 h-6 md:h-9 lg:h-12 leading-9 text-xl rounded-full m-1 text-black dark:text-white"
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 md:w-9 lg:w-12 h-6 md:h-9 lg:h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>

        {/* Light Theme Button */}
        <button
          className="w-6 md:w-9 lg:w-12 h-6 md:h-9 lg:h-12 leading-9 text-xl rounded-full m-1 text-black dark:text-white"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 md:w-9 lg:w-12 h-6 md:h-9 lg:h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-end items-center pr-1 sm:pr-4 outline outline-4 ml-1 w-full">
        <h2 className="text-md sm:text-xl md:text-3xl xl:text-5xl font-light">
          Want to know{" "}
          <a href="https://www.averageportfolio.com/">
            <u>about</u>
          </a>{" "}
          me?
        </h2>
      </div>
    </div>
  );
}

export default Header;