import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information & Calendar */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> contact@example.com</p>
          <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="text-gray-700 mb-4"><strong>Address:</strong> 123 Tech Street, Silicon Valley, CA 94000</p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Schedule a Meeting</h3>
          <p className="text-gray-700 mb-2">
            Use the embedded calendar below to find a time that works for you.
          </p>
          <div className="border border-dashed border-gray-300 rounded-md h-64 flex items-center justify-center">
            <p className="text-gray-500">Embedded Calendar Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
