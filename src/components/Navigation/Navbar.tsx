import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { DropdownMenu } from './DropdownMenu';

const services = [
  { label: 'Web Development', path: '/services/web' },
  { label: 'App Development', path: '/services/app' },
  { label: 'Digital Marketing', path: '/services/digital' },
];

const portfolio = [
  { label: 'Project 1', path: '/portfolio/project1' },
  { label: 'Project 2', path: '/portfolio/project2' },
  { label: 'Project 3', path: '/portfolio/project3' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-indigo-600">CCheng Road</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <DropdownMenu label="Services" items={services} />
            <DropdownMenu label="Portfolio" items={portfolio} />
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <DropdownMenu label="Services" items={services} isMobile />
            <DropdownMenu label="Portfolio" items={portfolio} isMobile />
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};