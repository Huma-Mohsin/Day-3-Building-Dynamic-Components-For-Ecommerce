"use client"
import React, { useState } from 'react';

const newsData = [
  {
    id: 1,
    title: 'Nike Launches New Air Max 2025',
    description: 'Nike reveals the latest in their Air Max line with improved comfort and style.',
    image: '/AllProducts/pro1.png',
    link: '/news/air-max-2025',
  },
  {
    id: 2,
    title: 'Sustainability Initiatives at Nike',
    description: 'Nike focuses on sustainable materials in their latest footwear collection.',
    image: '/AllProducts/pro2.png',
    link: '/news/sustainability-initiatives',
  },
  {
    id: 3,
    title: 'Upcoming Nike Training Shoes for 2025',
    description: 'Get ready for the most advanced training shoes from Nike with cutting-edge tech.',
    image: '/AllProducts/pro3.png',
    link: '/news/upcoming-training-shoes',
  },
  {
    id: 4,
    title: 'Nike Collaborates with NBA Stars',
    description: 'Nike’s new collection inspired by NBA legends.',
    image: '/AllProducts/pro4.png',
    link: '/news/nba-collaboration',
  },
  {
    id: 5,
    title: 'Nike Air Zoom Pegasus 39 Launch',
    description: 'A new version of the famous Nike running shoes.',
    image: '/AllProducts/pro5.png',
    link: '/news/air-zoom-pegasus-39',
  },
  {
    id: 6,
    title: 'Nike Women’s Training Gear',
    description: 'Gear up with the best apparel designed for women.',
    image: '/AllProducts/pro6.png',
    link: '/news/womens-training-gear',
  },
];

const feedData = [
  {
    id: 1,
    title: 'New Nike Women\'s Apparel Collection',
    image: '/AllProducts/pro6.png',
    price: '$79.99',
    link: '/products/womens-apparel',
  },
  {
    id: 2,
    title: 'Nike Air Force 1 – Classic Revisited',
    image: '/AllProducts/pro7.png',
    price: '$99.99',
    link: '/products/air-force-1',
  },
  {
    id: 3,
    title: 'Nike Running Shoes – Find Your Pace',
    image: '/AllProducts/pro8.png',
    price: '$119.99',
    link: '/products/running-shoes',
  },
  {
    id: 4,
    title: 'Nike React Element 55 Men\'s',
    image: '/AllProducts/pro9.png',
    price: '$129.99',
    link: '/products/nike-react-element',
  },
  {
    id: 5,
    title: 'Nike Free RN 5.0 Men\'s',
    image: '/AllProducts/pro10.png',
    price: '$109.99',
    link: '/products/nike-free-rn',
  },
  {
    id: 6,
    title: 'Nike ZoomX Invincible Run Flyknit',
    image: '/AllProducts/pro11.png',
    price: '$159.99',
    link: '/products/zoomx-invincible',
  },
];

const itemsPerPage = 3;

const NewsAndFeeds = () => {
  // State for pagination
  const [newsPage, setNewsPage] = useState(1);
  const [feedPage, setFeedPage] = useState(1);

  // Get the current news and feeds to display based on pagination
  const newsStartIndex = (newsPage - 1) * itemsPerPage;
  const currentNews = newsData.slice(newsStartIndex, newsStartIndex + itemsPerPage);

  const feedStartIndex = (feedPage - 1) * itemsPerPage;
  const currentFeeds = feedData.slice(feedStartIndex, feedStartIndex + itemsPerPage);

  // Pagination button handlers
  const nextNewsPage = () => {
    if (newsPage < Math.ceil(newsData.length / itemsPerPage)) {
      setNewsPage(newsPage + 1);
    }
  };

  const prevNewsPage = () => {
    if (newsPage > 1) {
      setNewsPage(newsPage - 1);
    }
  };

  const nextFeedPage = () => {
    if (feedPage < Math.ceil(feedData.length / itemsPerPage)) {
      setFeedPage(feedPage + 1);
    }
  };

  const prevFeedPage = () => {
    if (feedPage > 1) {
      setFeedPage(feedPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-12">Nike News & Features</h1>

      {/* News Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentNews.map((news) => (
            <div key={news.id} className="border border-gray-200 rounded-lg shadow-lg">
              <img src={news.image} alt={news.title} className="w-full h-48 object-contain rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{news.title}</h3>
                <p className="text-gray-600 mt-2">{news.description}</p>
                <a href={news.link} className="text-blue-600 hover:text-blue-800 mt-4 block">Read More</a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button onClick={prevNewsPage} className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">Previous</button>
          <button onClick={nextNewsPage} className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">Next</button>
        </div>
      </div>

      {/* Feeds Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentFeeds.map((feed) => (
            <div key={feed.id} className="border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <img src={feed.image} alt={feed.title} className="w-full h-48 object-contain" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{feed.title}</h3>
                <p className="text-gray-700 mt-2">{feed.price}</p>
                <a href={feed.link} className="text-blue-600 hover:text-blue-800 mt-4 block">Shop Now</a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button onClick={prevFeedPage} className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">Previous</button>
          <button onClick={nextFeedPage} className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">Next</button>
        </div>
      </div>
    </div>
  );
};

export default NewsAndFeeds;
