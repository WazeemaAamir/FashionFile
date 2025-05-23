'use client';

import { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      {/* Open Modal Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Login
      </button>
      
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
            
            <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
            
            {/* Form */}
            <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-lg mb-2" />
            <input type="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-lg mb-4" />
            
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-4 transition">
              Login
            </button>
            
            <div className="text-center text-gray-500 mb-4">OR</div>
            
            {/* Social Login Buttons */}
            <button className="w-full py-2 flex items-center justify-center bg-red-600 text-white rounded-lg hover:bg-red-700 mb-2 transition">
              <FaGoogle className="mr-2" /> Log in with Google
            </button>
            <button className="w-full py-2 flex items-center justify-center bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition">
              <FaFacebook className="mr-2" /> Log in with Facebook
            </button>
            
            <p className="text-center text-gray-600 mt-4">
              Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
