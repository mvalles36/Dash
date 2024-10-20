import React from 'react';
import { Map, Search } from 'lucide-react';

const MapTool = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Map Tool</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Enter address to search"
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Search
          </button>
        </div>
        <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
          <Map className="w-16 h-16 text-gray-400" />
          <p className="text-gray-500 ml-4">Map view will be displayed here</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Property Information</h2>
          <p className="text-gray-600">Select a property on the map to view details</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Measurements</h2>
          <p className="text-gray-600">Roof measurements will appear here</p>
        </div>
      </div>
    </div>
  );
};

export default MapTool;