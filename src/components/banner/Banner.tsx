import Image, { StaticImageData } from "next/image";
import React from "react";

interface BannerItemProps {
  imageSrc?: string | StaticImageData;
  altText?: string;
  className?: string;
  link?: string;
  id: string;
  text: string;
  png?: boolean;
}

const BannerItem: React.FC<BannerItemProps> = ({
  imageSrc,
  altText,
  className,
  link,
  id,
  text,
  png,
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
        {imageSrc &&
          (png ? (
            <Image
              src={imageSrc}
              alt={altText || "Banner PNG Image"}
              className={
                "rounded-[10px] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] object-contain bg-amber-50 p-2"
              }
              width={200}
              height={200}
            />
          ) : (
            <Image
              src={imageSrc}
              alt={altText || "Banner Image"}
              className={
                "rounded-[10px] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] object-cover p-2"
              }
              width={200}
              height={200}
            />
          ))}
        <p className="text-center">{text}</p>
      </a>
    </>
  );
};

export default BannerItem;
