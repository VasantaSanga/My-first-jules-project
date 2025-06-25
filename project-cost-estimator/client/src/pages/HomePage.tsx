import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-12">
        <h1 className="text-4xl font-bold mb-4">Project Cost Estimator</h1>
        <p className="text-xl text-gray-600 mb-8">
          Get an estimate for your software development project quickly and easily.
        </p>
        <Link
          to="/estimator"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
        >
          Start Estimation
        </Link>
      </header>

      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">1. Select Project Type</h3>
            <p>Choose from Website, Web App, Mobile App, SaaS, or API backend.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">2. Add Features</h3>
            <p>Select desired features like login, admin panel, payments, etc.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">3. Get Estimate</h3>
            <p>Receive a dynamic cost and timeline estimation instantly.</p>
          </div>
        </div>
      </section>

      <section className="my-16 bg-gray-100 p-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">About Our Company</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          We are a dedicated team of software professionals committed to delivering high-quality solutions.
          Our tool helps you understand project costs upfront, ensuring transparency and trust.
        </p>
        <div className="text-center mt-8">
          <Link
            to="/about"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
