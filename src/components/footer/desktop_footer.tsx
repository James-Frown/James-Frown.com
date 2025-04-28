"use client";

import Image from "next/image";
import Link from "next/link";

import LinkedIn from "../../assets/footer/LinkedIn_Icon.svg";
import Behance from "../../assets/footer/Behance_Icon.svg";
import GitHub from "../../assets/footer/GitHub_Icon.svg";

const DesktopFooter = () => {
  return (
    <>
      <footer className="flex flex-col justify-center gap-8 p-4 align-top">
        <div className="flex flex-row justify-between gap-8 p-4 align-top">
          <div className="flex flex-col gap-4 w-[15%]">
            <Link href="/">{"<James-Brown>"}</Link>
            <div className="flex flex-col gap-4 text-sm w-14">
              <Link href="/about" className="hover:border-b-2">
                About
              </Link>
              <Link href="/skills" className="hover:border-b-2">
                Skills
              </Link>
              <Link href="/projects" className="hover:border-b-2">
                Projects
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[15%]">
            <Link href="#Footer" className="hover:border-b-2">
              Socials
            </Link>
            <div className="text-sm flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/in/james-brown-308233171"
                className="flex flex-row gap-2 items-center"
              >
                <Image
                  alt="LinkedIn Icon"
                  width={30}
                  height={30}
                  src={LinkedIn}
                />
                LinkedIn
              </a>
              <a
                href="https://github.com/James-Frown"
                className="flex flex-row gap-2 items-center"
              >
                <Image alt="GitHub Icon" width={30} height={30} src={GitHub} />
                GitHub
              </a>
              <a
                href="https://www.behance.net/jamesbrown158"
                className="flex flex-row gap-2 items-center"
              >
                <Image
                  alt="Behance Icon"
                  width={30}
                  height={30}
                  src={Behance}
                />
                Behance
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[15%]">
            <Link href="/contact" className="hover:border-b-2">
              Contact
            </Link>
            <div className="text-sm flex flex-col gap-2">
              <p>Interested in collaborating? Let’s connect!</p>
              <p>
                <a href="mailto:2002jamesbrown@gmail.com">
                  2002jamesbrown@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+27788382692">(+27) 78 838 2692</a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center text-sm">
          <p>
            © {new Date().getFullYear()} James-Frown.com. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default DesktopFooter;
