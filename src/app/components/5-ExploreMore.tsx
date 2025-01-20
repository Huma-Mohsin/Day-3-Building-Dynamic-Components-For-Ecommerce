import React from "react";
import ImageCard from "../components/Reusablecomponent/ImageCard"; 
import CapsuleButton from "../components/Reusablecomponent/CapsuleButton"; // Ensure correct path

const ExploreMore = () => {
  return (
    <div className="relative bg-white py-16">
      {/* Header Section */}
      <div className="text-left  ml-6 px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-6xl sm:text-xl md:text-2xl font-bold  ml-4 text-gray-900">
          Explore More
        </h1>
        <p className="mt-2 text-2xl sm:text-lg text-gray-900">
          Built to last all week—wears with style only Jordan Brand can deliver.
        </p>
        <CapsuleButton text="Shop Now" link="/overallproducts" />
      </div>

      {/* Grid Section */}
      <div className="mt-2 flex flex-wrap justify-center gap-6">
        <ImageCard
          imageSrc="/ExploreMore/FCB+M+NK+DF+STRK+ANTHM+JKT+HM.png"
          altText="Men's Product"
          buttonLabel="Men's"
        />
        <ImageCard
          imageSrc="/ExploreMore/W+NSW+ESSNTL+OS+BOMBER.png"
          altText="Women's Product"
          buttonLabel="Women's"
        />
        <ImageCard
          imageSrc="/ExploreMore/K+NK+SF+ACD23+RAIN+JACKET+BR.png"
          altText="Kid's Product"
          buttonLabel="Kid's"
        />
      </div>
    </div>
  );
};

export default ExploreMore;
