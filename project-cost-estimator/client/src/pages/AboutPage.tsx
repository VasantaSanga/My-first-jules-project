import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us / Our Services</h1>
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our Company</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to [Company Name]! We are a passionate team of developers, designers, and project managers
            dedicated to bringing your digital visions to life. Our mission is to provide transparent,
            efficient, and high-quality software solutions to businesses of all sizes.
            This cost estimator tool is one of the ways we aim to simplify the initial stages of project planning for our clients.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Our Team</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team consists of experienced professionals skilled in a wide array of technologies and platforms.
            We believe in continuous learning and collaboration to deliver the best possible outcomes.
            Meet some of our key members (placeholder):
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>John Doe - Lead Developer</li>
            <li>Jane Smith - UI/UX Design Lead</li>
            <li>Robert Brown - Project Manager</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Services Offered</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            We offer a comprehensive suite of software development services, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Custom Web Application Development</li>
            <li>Mobile App Development (iOS & Android)</li>
            <li>SaaS Product Development</li>
            <li>API Design and Backend Development</li>
            <li>UI/UX Design and Prototyping</li>
            <li>Cloud Solutions & DevOps</li>
            <li>Ongoing Maintenance and Support</li>
          </ul>
          <p className="text-gray-700 mt-4">
            No matter the complexity or scale of your project, we are equipped to help you succeed.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
