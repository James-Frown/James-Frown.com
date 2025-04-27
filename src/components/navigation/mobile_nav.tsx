"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const MobileNav = () => {
  const icon1 = <GiHamburgerMenu size={30} color="white" />;
  const icon2 = <GrClose size={30} stroke="white" fill="white" />;

  const [Icon, setIcon] = useState(icon1);
  const [isOpen, setIsOpen] = useState(false);

  const eventHandler = () => {
    setIsOpen(!isOpen);
    setIcon(isOpen ? icon1 : icon2);
  };

  const menu = () => {
    if (!isOpen) return null;

    return (
      <ul className="flex flex-col justify-between gap-4 items-center p-4 h-auto text-md">
        <li>
          <Link
            onClick={() => {
              setIsOpen(false);
              setIcon(icon1);
            }}
            href="/about"
            className="p-2"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsOpen(false);
              setIcon(icon1);
            }}
            href="/skills"
            className="p-2"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsOpen(false);
              setIcon(icon1);
            }}
            href="/projects"
            className="p-2"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsOpen(false);
              setIcon(icon1);
            }}
            href="/contact"
            className="p-2"
          >
            Contact
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <>
      <header>
        <nav className="flex justify-between items-center p-4 text-md">
          <Link href="/" className="">
            {"<James-Brown>"}
          </Link>

          <button type="button" onClick={eventHandler} className="block">
            <div className="">{Icon}</div>
          </button>
        </nav>
        {menu()}
      </header>
    </>
  );
};

export default MobileNav;
