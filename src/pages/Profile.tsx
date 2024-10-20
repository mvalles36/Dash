import React from 'react';
import { User, Mail, Phone, Building } from 'lucide-react';

const Profile = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">User Profile</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-6 mb-6">
          <div className="bg-blue-500 text-white rounded-full p-2">
            <User className="w-16 h-16" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-gray-600">Roofing Specialist</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProfileField icon={<Mail className="w-5 h-5 text-gray-400" />} label="Email" value="john.doe@example.com" />
          <ProfileField icon={<Phone className="w-5 h-5 text-gray-400" />} label="Phone" value="(555) 123-4567" />
          <ProfileField icon={<Building className="w-5 h-5 text-gray-400" />} label="Company" value="RoofReach Inc." />
          <ProfileField icon={<User className="w-5 h-5 text-gray-400" />} label="Role" value="Project Manager" />
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Performance Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Projects Completed" value="47" />
          <StatCard title="Client Satisfaction" value="4.8/5" />
          <StatCard title="Revenue Generated" value="$523,000" />
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          <ActivityItem action="Completed project" description="Residential Roof Replacement - 789 Pine St" time="2 days ago" />
          <ActivityItem action="Started new campaign" description="Summer Roofing Maintenance Special" time="1 week ago" />
          <ActivityItem action="Added new client" description="Commercial Property Management Inc." time="2 weeks ago" />
        </ul>
      </div>
    </div>
  );
};

const ProfileField = ({ icon, label, value }) => {
  return (
    <div className="flex items-center space-x-3">
      {icon}
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-gray-900">{value}</p>
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
};

const ActivityItem = ({ action, description, time }) => {
  return (
    <li className="flex space-x-3">
      <div className="flex-shrink-0">
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
          <User className="h-5 w-5 text-white" />
        </div>
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium text-gray-900">{action}</p>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
    </li>
  );
};

export default Profile;