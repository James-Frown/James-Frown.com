import Link from "next/link";
import React from "react";

interface CtaButtonProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const CtaButton: React.FC<CtaButtonProps> = ({ id, className, children }) => {
  return (
    <button
      id={id}
      className={`${
        className ||
        "bg-black text-white text-md p-2 rounded md:hidden w-[50%] justify-center"
      }`}
    >
      <Link href="/about" className="p-2">
        {children}
      </Link>
    </button>
  );
};

export default CtaButton;
