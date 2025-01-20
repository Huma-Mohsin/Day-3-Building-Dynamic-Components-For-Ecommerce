
import React from 'react';
import CapsuleButton from '../components/Reusablecomponent/CapsuleButton';

const VideoSection = () => {
  return (
    <div className="relative w-full bg-gray-200 m-6 mt-0">
 <iframe
  width="100%"
  height="480"
  src="https://www.youtube.com/embed/C_BZQkU5Cds?modestbranding=1&controls=0&rel=0"
  title="Nike Video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>


      <div className="text-center text-black mt-6">
        <h2 className="text-3xl font-bold">Discover Nike Shoes</h2>
        <p className="mt-2 text-xl">Explore the latest styles and trends in Nike footwear for all your needs.</p>
        <div className="mt-4 space-x-8" >
          <CapsuleButton text="Shop Women" link="/shop-women" />
          <CapsuleButton text="Shop Men" link="/shop-men" />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
