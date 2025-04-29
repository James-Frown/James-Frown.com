"use client";

import Image1 from "../../assets/interests/Responsive_Icon.svg";
import Image2 from "../../assets/interests/WebDesign_Icon.svg";
import Image3 from "../../assets/interests/backend-coding.png";
import Image4 from "../../assets/interests/web-design.png";

import BannerItem from "@/components/banner/Banner";

export default function Section_2() {
  return (
    <>
      <div className="text-white flex flex-row flex-wrap items-center text-center justify-center gap-8 p-4 pt-8 pb-8">
        <BannerItem
          id="Banner_1"
          text="Responsive Web Design"
          imageSrc={Image1}
          altText="Profile Image 3"
          link="/"
        />
        <BannerItem
          id="Banner_2"
          text="Progressive Web Apps"
          imageSrc={Image2}
          altText="Profile Image 3"
          link="/"
        />
        <BannerItem
          id="Banner_4"
          text="Frontend Development"
          imageSrc={Image3}
          altText="Profile Image 3"
          link="/"
          png
        />
        <BannerItem
          id="Banner_5"
          text="Backend Development"
          imageSrc={Image4}
          altText="Profile Image 3"
          link="/"
          png
        />
      </div>
    </>
  );
}
