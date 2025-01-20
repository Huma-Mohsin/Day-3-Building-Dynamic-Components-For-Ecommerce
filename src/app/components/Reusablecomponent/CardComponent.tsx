import React from 'react';

interface CardProps {
  imageSrc: string;
 
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc,  description }) => {
  return (
    <div className="relative w-96 h-96 bg-gray-200 shadow-lg rounded-md overflow-hidden mt-4 transition-transform transform hover:scale-105 hover:shadow-xl m-4 pt-4">
      <img
        src={imageSrc}
        alt={description}
        className="w-full h-3/4 object-contain"
      />
      <div className="p-4">
      
        <p className="text-xl text-center text-gray-900">{description}</p>
      </div>
    </div>
  );
};

export default Card;
