"use client";

import Link from "next/link";

const DesktopFooter = () => {
  return (
    <>
      <footer className="flex flex-row justify-between gap-8 p-4">
        <div className="flex flex-col gap-4 w-[12%]">
          <Link href="/" className="hover:border-b-2">
            {"<James-Brown>"}
          </Link>
          <div className="text-sm">
            <p>
              Front-End Developer & Interaction Designer. <br /> I create
              engaging, thoughtful digital experiences.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[12%]">
          <Link href="/about" className="hover:border-b-2">
            About
          </Link>
          <div className="text-sm">
            <p>
              I’m James Brown, a Front-End Developer and Interaction Designer
              based in the UK. I create engaging, thoughtful digital
              experiences.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[12%]">
          <Link href="/skills" className="hover:border-b-2">
            Skills
          </Link>
          <div className="text-sm">
            <p>
              I specialize in JavaScript, React, Next.js, and UI/UX design. I
              love creating user-friendly interfaces and seamless interactions.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[12%]">
          <Link href="/projects" className="hover:border-b-2">
            Projects
          </Link>
          <div className="text-sm">
            <p>
              Explore my projects, showcasing my skills in web development and
              design. Each project reflects my passion for creating engaging
              digital experiences.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[12%]">
          <Link href="/contact" className="hover:border-b-2">
            Contact
          </Link>
          <div className="text-sm flex flex-col gap-2">
            <p>Interested in collaborating? Let’s connect!</p>
            <p>
              <a href="mailto:developer@james-frown.com">
                developer@james-frown.com
              </a>
            </p>
            <p>
              <a href="tel:+27788382692">(+27) 78 838 2692</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DesktopFooter;
