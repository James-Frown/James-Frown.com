import CTASection from "@/components/cta/cta_section";
import Section_1 from "./section_1";
import Section_2 from "./section_2";
import Section_3 from "./section_3";

export default function ABOUT() {
  return (
    <>
      <main className="flex flex-row flex-wrap items-center justify-around bg-gray-100">
        <CTASection id="About_CTA">
          <Section_1 />
        </CTASection>
        <CTASection
          id="About_Banner"
          className="flex flex-row items-center justify-center p-4 bg-background w-full"
        >
          <Section_2 />
        </CTASection>
        <CTASection id="About_Story">
          <Section_3 />
        </CTASection>
      </main>
    </>
  );
}
