'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ProductDataType {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: string; // Stock is now a string
  rating: number;
  image: string;
}

export default function ProductPage({ params }: { params: { product: string } }) {
  const [product, setProduct] = useState<ProductDataType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const url = `https://67809e2185151f714b073b9d.mockapi.io/Product/${params.product}`;
        console.log('Fetching product from URL:', url);
        const res = await fetch(url);

        if (res.status === 404) {
          setError('Product not found.');
          setLoading(false);
          return;
        }

        if (!res.ok) {
          throw new Error(`Failed to fetch product. Status: ${res.status}`);
        }

        const productData = await res.json();
        console.log('Fetched product data:', productData);
        setProduct(productData);
        setLoading(false);
      } catch (error: any) {
        console.error('Error fetching product:', error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.product]);

  if (loading) {
    return <div className="text-center">Loading...</div>; // Improved loading state
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!product) {
    return <div className="text-center">Product not found.</div>; // Added fallback message
  }

  return (
    <div className="p-6">
      <h1 className="text-orange-600 text-center font-bold pt-6 text-2xl">{product.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        <div key={product.id} className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
          <p className="text-center text-green-600 font-bold mt-2">Stock: {product.stock}</p> {/* Display stock as a string */}
          <p className="text-center text-purple-600 font-bold mt-1">Rating: {product.rating}</p>
          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-colors duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
