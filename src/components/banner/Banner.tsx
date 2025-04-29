import Image, { StaticImageData } from "next/image";
import React from "react";

interface BannerItemProps {
  imageSrc?: string | StaticImageData;
  altText?: string;
  className?: string;
  link?: string;
  id: string;
  text: string;
}

const BannerItem: React.FC<BannerItemProps> = ({
  imageSrc,
  altText,
  className,
  link,
  id,
  text,
}) => {
  return (
    <>
      <a
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        className={
          className +
          " flex flex-col items-center justify-center text-center align-middle"
        }
        id={id}
      >
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={altText || "Banner Image"}
            className={
              "rounded-[10px] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] object-cover"
            }
            width={200}
            height={200}
          />
        )}
        <p className="text-center">{text}</p>
      </a>
    </>
  );
};

export default BannerItem;
