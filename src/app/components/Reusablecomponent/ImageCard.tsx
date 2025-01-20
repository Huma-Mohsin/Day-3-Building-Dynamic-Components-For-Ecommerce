

import React from "react";
import Image from "next/image";

type ImageCardProps = {
  imageSrc: string;
  altText: string;
  buttonLabel: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, altText, buttonLabel }) => {
  return (
    <div className="relative w-[550px] sm:w-[450px] h-[600px] overflow-hidden rounded-lg shadow-md">
      <Image
        src={imageSrc}
        alt={altText}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <button className="absolute bottom-4 left-4 px-4 py-2 bg-gray-400 text-black font-medium text-sm rounded-full hover:bg-gray-800 hover:text-white transition">
        {buttonLabel}
      </button>
    </div>
  );
};

export default ImageCard;
