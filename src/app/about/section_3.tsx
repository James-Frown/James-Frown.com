"use client";

import Image from "next/image";

import ProfileImage3 from "../../assets/images/ProfileImg_3.jpg";
const Resume = "/resume/Resume.pdf";

import Button from "@/components/button/Button";

export default function Section_3() {
  return (
    <>
      <Image
        src={ProfileImage3}
        width={300}
        height={300}
        alt="Profile Image 2"
        className="object-cover hidden sm:inline-block rounded-[30px] p-4"
      />
      <Image
        src={ProfileImage3}
        width={200}
        height={200}
        alt="Profile Image 2"
        className="object-cover rounded-[100%] sm:hidden p-4"
      />
      <div className="text-gray-700 flex flex-col items-center text-center justify-center gap-8 w-[100%] h-[100%] sm:w-[80%] sm:h-[80%] p-4">
        <p>
          As a dedicated{" "}
          <span className="font-semibold text-gray-700">Webmaster</span> and{" "}
          <span className="font-semibold text-gray-700">Developer</span> at{" "}
          <span className="font-bold text-black">Banking Acumen</span>, and an{" "}
          <span className="font-semibold text-gray-700">Intern</span> at{" "}
          <span className="font-bold text-black">
            The Good People Data Company
          </span>
          , I am actively honing my technical skills and building expertise in
          the dynamic tech landscape. A passionate tech enthusiast with an
          entrepreneurial mindset, I am driven to innovate, solve complex
          problems, and make a lasting impact through my work. My commitment to
          continuous learning and willingness to embrace calculated risks
          empower me to push boundaries and exceed expectations, fueled by a
          relentless curiosity and a determination to succeed.
        </p>
        <p>
          I excel as both an independent self-starter and a collaborative team
          player, leveraging strong communication skills and a deep enthusiasm
          for coding to deliver impactful results. My diverse interests and
          experiences allow me to think strategically, approach challenges
          creatively, and bring unique, forward-thinking perspectives to every
          project I undertake.
        </p>
        <p>
          While I am currently immersed in exciting opportunities, I am always
          looking for the next challenge on the horizon. I am seeking roles that
          allow me to contribute meaningfully while continuing to grow and
          evolve as a professional. With a passion for innovation, a
          collaborative spirit, and an unyielding work ethic, I am confident in
          my ability to make significant contributions to any organization I
          join.
        </p>
        <Button id="Resume_Button" src={Resume}>
          Resume
        </Button>
      </div>
    </>
  );
}