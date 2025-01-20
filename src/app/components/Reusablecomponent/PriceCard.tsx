import React from "react";

type CardProps = {
  image: string;  
  name: string;   
  title: string;  
  price: string;  
};

const Card = ({ image, name, title, price }: CardProps) => {
  return (
    <div className="w-full h-auto bg-gray-100 rounded-lg shadow-lg flex flex-col mx-auto">
      {/* Image Section */}
      <div className="w-full h-auto overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        {/* Name and Price */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold font-sans text-lg sm:text-xl flex-1 truncate">{name}</h2>
          <span className="font-bold text-lg sm:text-xl text-black ml-2">{price}</span>
        </div>

        <p className="text-lg sm:text-base text-gray-500 font-sans">{title}</p>
      </div>
    </div>
  );
};

export default Card;
