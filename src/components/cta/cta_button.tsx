import Link from "next/link";
import React from "react";

interface CtaButtonProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  link: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  id,
  className,
  children,
  link,
}) => {
  return (
    <button
      id={id}
      className={`${
        className ||
        "bg-black text-white text-md p-2 rounded md:hidden w-[50%] justify-center"
      }`}
    >
      <Link href={`${link || "/"}`} className="p-2">
        {children}
      </Link>
    </button>
  );
};

export default CtaButton;
