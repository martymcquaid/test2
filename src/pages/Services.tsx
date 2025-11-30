import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
          <h3 className="font-bold">Consulting</h3>
          <p>Expert consulting services to help you navigate challenges.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
          <h3 className="font-bold">Development</h3>
          <p>Custom software development tailored to your business needs.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
          <h3 className="font-bold">Design</h3>
          <p>Creative design solutions that stand out in the market.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
          <h3 className="font-bold">Marketing</h3>
          <p>Strategic marketing services to boost your brand's visibility.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
          <h3 className="font-bold">Support</h3>
          <p>Reliable support to ensure your operations run smoothly.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;