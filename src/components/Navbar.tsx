import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Briefcase, FolderOpen, Award, Mail, Target } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: User },
    { name: 'About', href: '/about', icon: User },
    { name: 'Experience', href: '/experience', icon: Briefcase },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Skills', href: '/skills', icon: Target },
    { name: 'Certifications', href: '/certifications', icon: Award },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center min-w-0">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-lg custom-nav:text-xl font-bold text-blue-600">
                <span className="hidden custom-nav:inline">Ravi Pratap Singh</span>
                <span className="custom-nav:hidden">Ravi Pratap Singh</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden custom-nav:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="custom-nav:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 min-h-[48px] min-w-[48px]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="custom-nav:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-md transition-colors duration-200 min-h-[48px] flex items-center ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;