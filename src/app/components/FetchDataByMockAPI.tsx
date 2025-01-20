'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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

const FetchDataByMockAPI = () => {
  const [products, setProducts] = useState<ProductDataType[]>([]);
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://67809e2185151f714b073b9d.mockapi.io/Product';
        const data = await fetch(url);
        
        if (!data.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const response = await data.json();
        setProducts(response);
      } catch (err) {
        setError('Oops.. Failed to fetch data...'); // Set error state
        console.log('Error:', err);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-orange-600 text-center font-bold pt-6 text-2xl">
        Nike Products By Mock API
      </h1>

      {error && <div className="text-red-500 text-center">{error}</div>} {/* Display error message */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {products.map((product) => (
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

export default FetchDataByMockAPI;
