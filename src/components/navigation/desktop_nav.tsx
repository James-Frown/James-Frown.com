"use client";

import Link from "next/link";

const DesktopNav = () => {
  return (
    <>
      <nav className="flex flex-row justify-between p-4">
        <div>
          <Link href="/" className="">
            {"<James-Brown>"}
          </Link>
        </div>
        <ul className="flex flex-row justify-between gap-6 items-center h-8 text-md">
          <li>
            <Link href="/about" className="p-1 hover:text-lg hover:border-b-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="p-1 hover:text-lg hover:border-b-2">
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="p-1 hover:text-lg hover:border-b-2"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="p-1 hover:text-lg hover:border-b-2"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DesktopNav;
