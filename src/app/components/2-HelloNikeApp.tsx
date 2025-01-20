import React from "react";

const HelloNikeText = () => {
  return (
    <div className="w-full h-auto bg-gray-200 py-6 sm:py-8">
      <div className="text-center space-y-4">
        {/* Main Heading */}
        <h1 className="text-[#111111] text-4xl sm:text-3xl md:text-2xl font-bold">
          Hello Nike App
        </h1>

        {/* Subheading */}
        <h2 className="text-[#111111] text-2xl sm:text-lg md:text-base font-medium">
          Download the app to access everything Nike.{" "}
          <a
            href="/"
            className="text-black hover:text-blue-700 transition-colors duration-300 font-bold underline"
          >
            Get Your Great
          </a>
        </h2>
      </div>
    </div>
  );
};

export default HelloNikeText;
