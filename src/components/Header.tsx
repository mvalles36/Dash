import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Map, Users, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Home className="w-8 h-8" />
          <span className="text-2xl font-bold">RoofReach</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="flex items-center space-x-1 hover:text-blue-200 transition duration-300">
                <Home className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/map-tool" className="flex items-center space-x-1 hover:text-blue-200 transition duration-300">
                <Map className="w-5 h-5" />
                <span>Map Tool</span>
              </Link>
            </li>
            <li>
              <Link to="/campaigns" className="flex items-center space-x-1 hover:text-blue-200 transition duration-300">
                <Users className="w-5 h-5" />
                <span>Campaigns</span>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center space-x-1 hover:text-blue-200 transition duration-300">
                <User className="w-5 h-5" />
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;