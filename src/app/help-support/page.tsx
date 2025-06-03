"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // For navigation
import { FaPhone, FaShoppingCart, FaTruck, FaCreditCard, FaRedo } from "react-icons/fa";

const HelpCenter = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter(); // For page navigation

  // Data for options
  const options = [
    { id: "contact", icon: <FaPhone className="text-blue-500 text-lg" />, text: "Contact Customer Care", link: "/contact" },
    { id: "order", icon: <FaShoppingCart className="text-green-500 text-lg" />, text: "Order", link: "/order" },
    { id: "shipping", icon: <FaTruck className="text-yellow-500 text-lg" />, text: "Shipping & Delivery", link: "/shipping" },
    { id: "payment", icon: <FaCreditCard className="text-purple-500 text-lg" />, text: "Payment", link: "/payment" },
    { id: "refunds", icon: <FaRedo className="text-red-500 text-lg" />, text: "Returns & Refunds", link: "/refunds" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-100">
      <div className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 w-96 border border-gray-300 transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-5 text-center">
          Help Center
        </h2>
        <ul className="space-y-4">
          {options.map((option) => (
            <li
              key={option.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                selected === option.id ? "bg-blue-200" : "hover:bg-gray-100"
              }`}
              onClick={() => setSelected(option.id)}
            >
              {option.icon}
              <span className="font-medium text-gray-700">{option.text}</span>
            </li>
          ))}
        </ul>

        {/* Show details below when an option is clicked */}
        {selected && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-700 text-sm">You selected: <strong>{options.find(o => o.id === selected)?.text}</strong></p>
            <button
              onClick={() => router.push(options.find(o => o.id === selected)?.link || "/")}
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-all"
            >
             Learn More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpCenter;
