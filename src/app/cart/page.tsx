"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();

  const cartItems = [
    {
      id: 1,
      name: "Blue Maxi",
      price: 3500,
      image: "/Blue-Maxi.jpg",
      description: "Elegant blue maxi dress, perfect for any occasion.",
    },
    {
      id: 2,
      name: "Red Maxi",
      price: 3800,
      image: "/Red-Maxi.jpg",
      description: "Stylish red maxi dress with premium fabric.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 shadow-md p-3 bg-white rounded-lg">
        🛒 Your Shopping Cart
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center cursor-pointer hover:shadow-2xl transition"
            onClick={() =>
              router.push(
                `/cart/${item.id}?name=${encodeURIComponent(
                  item.name
                )}&image=${encodeURIComponent(
                  item.image
                )}&description=${encodeURIComponent(item.description)}&price=${item.price}`
              )
            }
          >
            <Image
              src={item.image}
              alt={item.name}
              width={250}
              height={250}
              className="w-full h-auto object-cover rounded-lg"
              unoptimized
            />
            <h3 className="text-lg font-semibold text-gray-700 mt-3">{item.name}</h3>
            <p className="text-gray-600 font-semibold mt-2">PKR {item.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
