"use client";

import Link from "next/link";
import React from "react";

interface ButtonProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  link?: string;
  src?: string;
}

const Button: React.FC<ButtonProps> = ({
  id,
  className = "bg-black text-white text-md p-2 rounded justify-center hover:bg-blue-700 transition duration-300 ease-in-out",
  children,
  link,
  src,
}) => {
  if (src) {
    return (
      <a
        id={id}
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  if (link) {
    return (
      <Link id={id} href={"/" + link} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button id={id} className={className}>
      {children}
    </button>
  );
};

export default Button;
