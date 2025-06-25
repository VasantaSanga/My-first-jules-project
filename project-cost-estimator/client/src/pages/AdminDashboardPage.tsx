import React from 'react';

const AdminDashboardPage: React.FC = () => {
  // Basic state for toggling views - can be expanded
  const [activeTab, setActiveTab] = React.useState<'submissions' | 'features' | 'pricing'>('submissions');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Placeholder for authentication check */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
        <p className="font-bold">Protected Route</p>
        <p>This page should only be accessible to logged-in administrators.</p>
      </div>

      <div className="bg-white p-6 shadow-lg rounded-lg">
        <div className="mb-4 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('submissions')}
              className={`${
                activeTab === 'submissions'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              View Submissions
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`${
                activeTab === 'features'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Manage Features
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`${
                activeTab === 'pricing'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Pricing Logic
            </button>
          </nav>
        </div>

        <div>
          {activeTab === 'submissions' && (
            <div>
              <h2 className="text-2xl font-semibold mb-3">Estimation Submissions</h2>
              <p className="text-gray-700">List of submitted estimates will appear here. Each entry will show details like client info, selected features, total cost, etc.</p>
              <div className="mt-4 border border-dashed border-gray-300 rounded-md p-10 text-center text-gray-500">
                Submissions Table/List Placeholder
              </div>
            </div>
          )}
          {activeTab === 'features' && (
            <div>
              <h2 className="text-2xl font-semibold mb-3">Manage Features & Options</h2>
              <p className="text-gray-700">Interface to add, remove, or edit features, project types, tech stacks, design needs, and their associated costs or effort points.</p>
              <button className="mt-2 mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Add New Feature
              </button>
              <div className="border border-dashed border-gray-300 rounded-md p-10 text-center text-gray-500">
                Feature Management UI Placeholder
              </div>
            </div>
          )}
          {activeTab === 'pricing' && (
            <div>
              <h2 className="text-2xl font-semibold mb-3">Adjust Pricing Logic</h2>
              <p className="text-gray-700">Interface to adjust base rates, cost modifiers for tech stacks, timeline urgency multipliers, etc.</p>
              <div className="mt-4 border border-dashed border-gray-300 rounded-md p-10 text-center text-gray-500">
                Pricing Logic Adjustment Form Placeholder
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
