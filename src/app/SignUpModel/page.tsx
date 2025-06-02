"use client"


import { useState } from "react";

export default function SignUpModel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-900 bg-opacity-50 fixed inset-0 flex items-center justify-center">
    <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
      <h2 className="text-xl font-bold text-center mb-4">Sign Up</h2>
      <input
        type="text"
        placeholder="Enter your phone number"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg mt-4">
        Send code via WhatsApp
      </button>
      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-500">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>
      <button className="w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg">
        Log in with Google
      </button>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg mt-2">
        Log in with Facebook
      </button>
      <p className="text-center text-gray-600 mt-4">
        Don't have an account? <a href="#" className="text-blue-500">Sign up</a>
      </p>
    </div>
  </div>  
  );
}

