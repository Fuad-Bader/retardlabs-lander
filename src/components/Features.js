// src/components/Features.js
import React from "react";

const Features = () => {
  return (
    <section
      id="features"
      className="py-12 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-300">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              File Sharing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Share files with anyone, anywhere with secure links and
              permissions
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-300">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              File Sync
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Access your files from any device with real-time synchronization
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-300">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              Security
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Your files are protected with enterprise-grade security and
              encryption
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
