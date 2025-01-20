"use client"
import React, { useState } from "react";

// Item Interface
interface Item {
  id: number;
  name: string;
  price: number;
}

// Cart Item Interface (with quantity)
interface CartItem extends Item {
  quantity: number;
}

// Billing and Shipping Address Interface
interface Address {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

const Shop: React.FC = () => {
  // Sample items available in the shop
  const items: Item[] = [
    { id: 1, name: "Nike Shoes", price: 120 },
    { id: 2, name: "Adidas T-Shirt", price: 60 },
    { id: 3, name: "Puma Cap", price: 30 },
  ];

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Address State - Initialize with empty values to avoid null errors
  const [address, setAddress] = useState<Address>({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [isCheckout, setIsCheckout] = useState(false);

  // Add Item to Cart
  const addItemToCart = (item: Item) => {
    setCartItems((prevCartItems) => {
      // Check if the item is already in the cart
      const existingItem = prevCartItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // Update quantity for existing item
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      // Add new item to the cart
      return [...prevCartItems, { ...item, quantity: 1 }];
    });
  };

  // Calculate Total Price
  const calculateTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle Checkout Button Click
  const handleCheckout = () => {
    setIsCheckout(true);
  };

  // Handle Form Submit (Mock API Request)
  const handleAddressSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await mockAPIRequest(address);
      alert("Checkout successful: " + response.message);
      setIsCheckout(false);
      setCartItems([]); // Clear cart after successful checkout
    } catch (error) {
      alert("Failed to submit address.");
    }
  };

  // Mock API Function (Simulating a successful API request)
  const mockAPIRequest = async (address: Address) => {
    // Simulate an API request to submit the address
    return new Promise<{ message: string }>((resolve, reject) => {
      setTimeout(() => {
        if (address.name && address.address && address.city && address.state && address.zip) {
          resolve({ message: "Your order has been placed successfully!" });
        } else {
          reject(new Error("Missing address details"));
        }
      }, 2000); // Simulate a delay of 2 seconds for the mock API
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Shop Items */}
      <h1 className="text-3xl font-bold mb-4">Shop Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            <button
              onClick={() => addItemToCart(item)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <h2 className="text-3xl font-bold mt-10">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600 mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-6 bg-white shadow-lg rounded-lg p-4">
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <p className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold">Total</h3>
            <p className="text-xl font-bold">${calculateTotalPrice().toFixed(2)}</p>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Checkout
          </button>
        </div>
      )}

      {/* Checkout Form (Billing and Shipping Address) */}
      {isCheckout && (
        <div className="mt-10 bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4">Billing and Shipping Address</h2>
          <form onSubmit={handleAddressSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                onChange={(e) =>
                  setAddress({ ...address, name: e.target.value })
                }
                value={address.name}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                onChange={(e) =>
                  setAddress({ ...address, address: e.target.value })
                }
                value={address.address}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
                value={address.city}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600" htmlFor="state">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
                value={address.state}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600" htmlFor="zip">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                onChange={(e) =>
                  setAddress({ ...address, zip: e.target.value })
                }
                value={address.zip}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit Address
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Shop;
