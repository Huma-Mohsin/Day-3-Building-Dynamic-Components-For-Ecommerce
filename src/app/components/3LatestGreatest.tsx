import React from "react";
import Card from "../components/Reusablecomponent/CardComponent";

const LatestGreatest = () => {
  const cardsData = [
    {
      imageSrc: "/LatestGreatest/NIKE+FREE+METCON+6.png",
      description: "Gym Gear For The New Year.",
    },
    {
      imageSrc: "/LatestGreatest/W+NK+RUN+DVN+RFLCTV+JKT.png",
      description: "Nike running Division",
    },
    {
      imageSrc: "/LatestGreatest/NIKE+AIR+ZOOM+G.T.+JUMP+2.jpeg",
      description: "Mad Energy Pack",
    },
    {
      imageSrc: "/LatestGreatest/NikeTech.jpeg",
      description: "Nike Tech Woven Suit",
    },
    {
      imageSrc: "/LatestGreatest/Y+NK+BRSLA+BKPK+-+CAT+AOP+FA24.png",
      description: "Nike Brasilia",
    },
  ];

  return (
    <div className="w-full py-10 px-6 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-900 mb-8 sm:text-3xl md:text-2xl">
        Latest & Greatest
      </h2>

      {/* Horizontal Scrollable Cards */}
      <div className="flex overflow-x-auto gap-6 px-2 scrollbar-hide">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestGreatest;
