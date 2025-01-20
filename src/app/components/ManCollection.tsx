'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link'; // Ensure you import Link

interface ProductDataType {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  rating: number;
  image: string; // Assuming image is a valid URL
}

const MenProducts = () => {
  const menProducts: ProductDataType[] = [
    {
      id: '1',
      name: 'Nike Air Max 2021',
      description: 'Comfortable running shoes with great cushioning.',
      price: 120,
      category: 'Men',
      stock: 15,
      rating: 4.5,
      image: '/men/airmax.jpeg', 
    },
    {
      id: '2',
      name: 'Nike Hoodi-Light blue',
      description: ' A light fabric, keeps you cool during running.',
      price: 150,
      category: 'Men',
      stock: 10,
      rating: 4.7,
      image: '/men/light blue nike hoodi.jpeg', 
    },
    {
      id: '3',
      name: 'Nike Joggers',
      description: 'Sports shoes designed for both comfort and style.',
      price: 110,
      category: 'Men',
      stock: 8,
      rating: 4.2,
      image: '/men/nike joggers.jpeg',
    },
    {
      id: '4',
      name: 'Nike Air Jordan',
      description: 'Training shoes built for heavy-duty workouts.',
      price: 130,
      category: 'Men',
      stock: 20,
      rating: 4.4,
      image: '/men/Nike Air Jordan.jpeg',
    },
    {
      id: '5',
      name: 'Nike Club Puffer',
      description: 'Responsive cushioning puffer for active men.',
      price: 140,
      category: 'Men',
      stock: 12,
      rating: 4.6,
      image: '/men/nike club puffer.jpeg',
    },
    {
      id: '6',
      name: 'Nike Trouser',
      description: 'Lightweight running trouser that keeps you relax..',
      price: 160,
      category: 'Men',
      stock: 18,
      rating: 4.8,
      image: '/men/nike gray trouser.jpeg',
    },
    {
      id: '7',
      name: 'Nike Water Bottle',
      description: 'Stainless Steel Bottle, Resist free.',
      price: 100,
      category: 'Men',
      stock: 22,
      rating: 4.3,
      image: '/men/waterbottle.jpeg',
    },
    {
      id: '8',
      name: 'New Balance Fresh Tracksuit',
      description: 'For Running And To provide comfort.',
      price: 120,
      category: 'Men',
      stock: 14,
      rating: 4.5,
      image: '/men/nikesports.jpeg',
    },
    {
      id: '9',
      name: 'Nike Perfume',
      description: 'Elegant fragrance .',
      price: 130,
      category: 'Men',
      stock: 25,
      rating: 4.6,
      image: '/men/nike indigo men perfume.jpeg',
    },
    {
      id: '10',
      name: 'Running dress',
      description: 'Stability running dress designed for long-distance runs.',
      price: 140,
      category: 'Men',
      stock: 17,
      rating: 4.7,
      image: '/men/nike men tracksuit.jpeg',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-orange-600 text-center font-bold pt-6 text-2xl">
        Men's Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {menProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <Link href={`/overallproducts/${product.id}`} passHref>
              {/* Handle Image properly */}
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-72 object-contain rounded-md mb-4"
                />
              ) : (
                <div className="w-full h-72 bg-gray-200 rounded-md flex justify-center items-center">
                  No image available
                </div>
              )}

              <h3 className="font-bold text-lg text-center mt-4">{product.name}</h3>
              <p className="text-lg text-center text-gray-600">{product.category}</p>
              <p className="text-lg text-center mt-2">{product.description}</p>
              <p className="font-semibold text-center text-xl mt-2">Price: ${product.price}</p>
              <p className="text-center text-green-600 font-bold mt-2">Stock: {product.stock}</p>
              <p className="text-center text-purple-600 font-bold mt-1">Rating: {product.rating}</p>
            </Link>
            {/* Add a "Shop Now" Button */}
            <div className="flex justify-center mt-4">
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-colors duration-300">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenProducts;
