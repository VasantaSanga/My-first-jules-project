import React from 'react';

const EstimatorFormPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Project Estimator</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <p className="text-gray-700">
          Estimator form will be implemented here with multiple steps:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Step 1: Type of project (Website, Web App, Mobile App, SaaS, API backend)</li>
          <li>Step 2: Features (Login, Admin Panel, Chat, Payment, 3rd Party API, Notifications, etc.)</li>
          <li>Step 3: Tech Stack (React, Angular, Flutter, Node.js, Python, etc.)</li>
          <li>Step 4: Design Needs (UI/UX, Branding, Wireframes)</li>
          <li>Step 5: Timeline (Urgent, 1-3 months, 3-6 months)</li>
          <li>Step 6: Team Involvement (Dedicated team vs shared resources)</li>
          <li>Final Step: Contact Info (optional)</li>
        </ul>
        <p className="mt-6 text-gray-700 font-semibold">
          Each step will update the estimate dynamically.
        </p>
        {/* Placeholder for form steps */}
        <div className="mt-8 p-4 border border-dashed border-gray-300 rounded-md">
          <p className="text-center text-gray-500">Multi-step form components will go here.</p>
        </div>
      </div>
    </div>
  );
};

export default EstimatorFormPage;
