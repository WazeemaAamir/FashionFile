"use client";

import { QRCodeCanvas } from "qrcode.react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const DownloadApp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white shadow-2xl rounded-2xl p-6 text-center w-80 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Download the App</h2>

        {/* QR Code */}
        <div className="flex justify-center">
          <QRCodeCanvas value="https://dildar.pk" size={150} className="mb-4" />
        </div>

        {/* App Store & Play Store Buttons */}
        <div className="flex flex-col gap-3 mt-4">
          {/* Google Play Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.dildar.pk"
            target="_blank"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <FaGooglePlay className="text-xl" />
            <span className="text-sm font-medium">Get it on Google Play</span>
          </a>

          {/* App Store Button */}
          <a
            href="https://apps.apple.com/us/app/your-app-id"
            target="_blank"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg p-3 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <FaApple className="text-xl" />
            <span className="text-sm font-medium">Download on the App Store</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
