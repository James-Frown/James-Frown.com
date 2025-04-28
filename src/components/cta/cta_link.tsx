import Link from "next/link";
import React from "react";

interface CtaLinkProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const CtaLink: React.FC<CtaLinkProps> = ({ id, className, children }) => {
  return (
    <p
      id={id}
      className={`${
        className ||
        "text-blue-500 font-bold text-md p-2 ml-2 hidden md:inline-block"
      }`}
    >
      <Link
        href="/about"
        className="hover:border-b-blue-500 border-b-2 border-transparent transition duration-300 ease-in-out p-2"
      >
        {children}
      </Link>
    </p>
  );
};

export default CtaLink;
