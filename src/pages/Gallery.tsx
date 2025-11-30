import React from 'react';

const Gallery = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Image placeholders for gallery */}
        <div className="bg-gray-200 h-40 rounded-lg shadow-lg"></div>
        <div className="bg-gray-200 h-40 rounded-lg shadow-lg"></div>
        <div className="bg-gray-200 h-40 rounded-lg shadow-lg"></div>
        <div className="bg-gray-200 h-40 rounded-lg shadow-lg"></div>
        <div className="bg-gray-200 h-40 rounded-lg shadow-lg"></div>
        <div className="bg-gray-200 h-40 rounded-lg shadow-lg"></div>
      </div>
    </div>
  );
};

export default Gallery;