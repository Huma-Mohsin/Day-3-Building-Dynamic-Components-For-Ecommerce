import React from "react";
import Card from "./Reusablecomponent/PriceCard"; 

const TrendingInWeek = () => {
  // Array of items
  const items = [
    {
      image: "/Trendingweek/WMNS+AIR+FORCE+1+'07.png",
      name: "Nike Air Force 1 '07",
      title: "Women's Shoes",
      price: 13995,
    },
    {
      image: "/Trendingweek/JORDAN+FLIGHT+COURT.png",
      name: "Jordan Flight Court",
      title: "Men's Shoes",
      price: 13995,
    },
    {
      image: "/Trendingweek/W+NSW+PHNX+FLC+OOS+LOGO+CREW.jpeg",
      name: "Nike Sportswear Phoenix Fleece",
      title: "Oversized Crew-Neck",
      price: 16995,
    },
  ];

  // Function to format price as currency
  const formatCurrency = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto mt-[50px] px-8 ml-6 sm:px-12">
      {/* Parent Title */}
      <h1 className="text-left font-bold text-3xl mb-8 font-sans">Trending This Week</h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-36">
        {items.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            name={item.name}
            title={item.title}
            price={formatCurrency(item.price)} // Format the price here
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingInWeek;
