import React from 'react';
import { Users, Mail, Phone, MapPin } from 'lucide-react';

const CampaignManagement = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Campaign Management</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Active Campaigns</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leads</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <CampaignRow name="Spring Roofing Special" type="Email" status="Active" leads="45" />
              <CampaignRow name="Storm Damage Awareness" type="Direct Mail" status="Scheduled" leads="0" />
              <CampaignRow name="Commercial Roofing Solutions" type="LinkedIn" status="Draft" leads="0" />
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Campaign Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PerformanceCard icon={<Mail className="w-8 h-8 text-blue-500" />} title="Email Open Rate" value="24.5%" />
          <PerformanceCard icon={<Phone className="w-8 h-8 text-green-500" />} title="Call Conversion" value="8.3%" />
          <PerformanceCard icon={<MapPin className="w-8 h-8 text-red-500" />} title="Site Visits" value="12" />
        </div>
      </div>
    </div>
  );
};

const CampaignRow = ({ name, type, status, leads }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">{name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{type}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
          status === 'Active' ? 'bg-green-100 text-green-800' :
          status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{leads}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
      </td>
    </tr>
  );
};

const PerformanceCard = ({ icon, title, value }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4">
      {icon}
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-lg font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default CampaignManagement;