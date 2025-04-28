import CTASection from "@/components/cta/cta_section";
import Image from "next/image";
import ProfileImage3 from "../../assets/images/ProfileImg_3.jpg";

export default function ABOUT() {
  return (
    <>
      <main className="flex flex-row flex-wrap items-center justify-around bg-gray-100">
        <CTASection id="About_CTA">
          <Image
            src={ProfileImage3}
            width={300}
            height={300}
            alt="Profile Image 2"
            className="h-[50%] object-contain rounded-[30px] p-4"
          />
          <div className="text-black flex flex-col items-center justify-center w-[80%] h-[80%] bg-white rounded-[30px] p-4 shadow-lg">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p>
              As a dedicated webmaster and developer at BankingAcumen.com, and
              an intern at The Good People Data Company, I am actively honing my
              technical skills and building expertise in the dynamic tech
              landscape. A passionate tech enthusiast with an entrepreneurial
              mindset, I am driven to innovate, solve complex problems, and make
              a lasting impact through my work. My commitment to continuous
              learning and willingness to embrace calculated risks empower me to
              push boundaries and exceed expectations, fueled by a relentless
              curiosity and a determination to succeed.
            </p>
            <p>
              I excel as both an independent self-starter and a collaborative
              team player, leveraging strong communication skills and a deep
              enthusiasm for coding to deliver impactful results. My diverse
              interests and experiences allow me to think strategically,
              approach challenges creatively, and bring unique, forward-thinking
              perspectives to every project I undertake.
            </p>
            <p>
              While I am currently immersed in exciting opportunities, I am
              always looking for the next challenge on the horizon. I am seeking
              roles that allow me to contribute meaningfully while continuing to
              grow and evolve as a professional. With a passion for innovation,
              a collaborative spirit, and an unyielding work ethic, I am
              confident in my ability to make significant contributions to any
              organization I join
            </p>
          </div>
        </CTASection>
      </main>
    </>
  );
}
