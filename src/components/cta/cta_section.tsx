import React from "react";

interface CTASectionProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function CTASection({
  children,
  className,
  id,
}: CTASectionProps) {
  return (
    <>
      <div
        id={`${id}`}
        className={`${
          className || "flex flex-col items-center justify-center p-4"
        }`}
      >
        {children}
      </div>
    </>
  );
}
