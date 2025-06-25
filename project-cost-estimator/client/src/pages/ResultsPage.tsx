import React from 'react';

const ResultsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Estimate Summary / Results</h1>
      <div className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <p className="text-gray-700 mb-4">
          This page will display the detailed cost breakdown and estimated timeline based on the selections from the estimator form.
        </p>
        <div className="border border-gray-200 rounded-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">Cost Breakdown</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Feature A: $XXX</li>
            <li>Module B: $YYY</li>
            <li>Design C: $ZZZ</li>
          </ul>
          <p className="text-xl font-bold mt-3">Estimated Total: $XYZ</p>
        </div>
        <div className="border border-gray-200 rounded-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">Estimated Timeline</h2>
          <p className="text-gray-600">X - Y weeks/months</p>
        </div>
        <div className="flex space-x-4 mt-6">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Email Estimate
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download PDF
          </button>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
