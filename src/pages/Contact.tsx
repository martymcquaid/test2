import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <form className="mt-6 max-w-md mx-auto">
        <input type="email" placeholder="Your Email" className="border rounded-lg p-2 w-full mb-4" />
        <textarea placeholder="Your Message" className="border rounded-lg p-2 w-full mb-4" rows={4}></textarea>
        <button type="submit" className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:shadow-lg transition duration-200">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;