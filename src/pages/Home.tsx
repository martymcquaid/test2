import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="hero bg-gradient-to-r from-blue-200 to-green-200 text-center py-20">
        <h1 className="text-4xl font-bold">Pluimmers</h1>
        <p className="mt-4 text-lg">Your partner in innovative solutions.</p>
      </section>

      <section className="about py-10 px-4">
        <h2 className="text-3xl font-semibold text-center">About Us</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          Pluimmers is dedicated to providing top-notch services that make a difference in your life. Our team of experts is here to help you achieve your goals.
        </p>
      </section>

      <section className="services py-10 px-4">
        <h2 className="text-3xl font-semibold text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <h3 className="font-bold">Service One</h3>
            <p>Expert advice and solutions tailored to your needs.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <h3 className="font-bold">Service Two</h3>
            <p>Innovative strategies that drive results.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <h3 className="font-bold">Service Three</h3>
            <p>Support and guidance every step of the way.</p>
          </div>
        </div>
      </section>

      <section className="gallery py-10 px-4">
        <h2 className="text-3xl font-semibold text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Image placeholders */}
          <div className="bg-gray-200 h-40 rounded-lg shadow-lg"></div>
          <div className="bg-gray-200 h-40 rounded-lg shadow-lg"></div>
          <div className="bg-gray-200 h-40 rounded-lg shadow-lg"></div>
          <div className="bg-gray-200 h-40 rounded-lg shadow-lg"></div>
          <div className="bg-gray-200 h-40 rounded-lg shadow-lg"></div>
          <div className="bg-gray-200 h-40 rounded-lg shadow-lg"></div>
        </div>
      </section>

      <section className="contact py-10 px-4">
        <h2 className="text-3xl font-semibold text-center">Contact Us</h2>
        <form className="mt-6 max-w-md mx-auto">
          <input type="email" placeholder="Your Email" className="border rounded-lg p-2 w-full mb-4" />
          <textarea placeholder="Your Message" className="border rounded-lg p-2 w-full mb-4" rows={4}></textarea>
          <button type="submit" className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:shadow-lg transition duration-200">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;