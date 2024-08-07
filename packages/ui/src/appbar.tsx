"use client";

import { Link } from "react-router-dom";
import { Button } from "./button";

export const AppBar = ({
  isAdmin,
  login,
}: {
  isAdmin: boolean;
  login: () => void;
}) => {
  return (
    <>
      <nav className=" border-gray-200 bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 py-2">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {isAdmin && <Button onClick={login}>Login</Button>}
          </div>
        </div>
      </nav>
    </>
  );
};
