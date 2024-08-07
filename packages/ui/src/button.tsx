"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 me-2  "
      onClick={onClick}
    >
      {children}
    </button>
  );
};
