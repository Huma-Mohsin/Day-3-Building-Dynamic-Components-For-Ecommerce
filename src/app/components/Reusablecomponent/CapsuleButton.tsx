"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

interface CapsuleButtonProps {
  text: string;
  link: string;
}

const CapsuleButton: React.FC<CapsuleButtonProps> = ({ text, link }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-block bg-black text-white py-2 px-6 rounded-full text-center mt-4 mb-4  hover:text-white transition"
    >
      {text}
    </button>
  );
};

export default CapsuleButton;
