import React from 'react';
import { BarChart, Users, DollarSign, Calendar } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard icon={<BarChart className="w-8 h-8 text-blue-500" />} title="Total Projects" value="24" />
        <DashboardCard icon={<Users className="w-8 h-8 text-green-500" />} title="Active Clients" value="18" />
        <DashboardCard icon={<DollarSign className="w-8 h-8 text-yellow-500" />} title="Revenue" value="$52,450" />
        <DashboardCard icon={<Calendar className="w-8 h-8 text-purple-500" />} title="Upcoming Jobs" value="7" />
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">New Project</span>
            <span>Residential Roof Repair - 123 Main St</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Completed</span>
            <span>Commercial Roofing - Downtown Office Building</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">In Progress</span>
            <span>Roof Inspection - 456 Oak Avenue</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const DashboardCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex items-center space-x-4">
      {icon}
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
};

export default Dashboard;