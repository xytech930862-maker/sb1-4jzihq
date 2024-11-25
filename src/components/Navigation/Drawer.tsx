import { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { DrawerSubmenu } from './DrawerSubmenu';

const preCourseItems = [
  { label: 'Lecture 1', path: '/pre-course/lecture-1' },
  { label: 'Lecture 2', path: '/pre-course/lecture-2' },
  { label: 'Lecture 3', path: '/pre-course/lecture-3' },
];

const aboutItems = [
  { label: 'Our Story', path: '/about/story' },
  { label: 'Team', path: '/about/team' },
  { label: 'Mission', path: '/about/mission' },
];

export const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-lg hover:bg-gray-50"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Login Button */}
      <button className="fixed top-4 right-4 z-50 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
        Login
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="px-6 py-8">
          <span className="text-2xl font-bold text-indigo-600">CCheng Road</span>
        </div>

        {/* Navigation Items */}
        <nav className="px-4 space-y-2">
          <NavLink to="/" className="flex items-center">
            <ChevronRight className="h-4 w-4 mr-2" />
            Course Introduction
          </NavLink>

          <DrawerSubmenu title="Pre-Course Lectures" items={preCourseItems} />

          <NavLink to="/first-level" className="flex items-center">
            <ChevronRight className="h-4 w-4 mr-2" />
            First-Level Course
          </NavLink>

          <DrawerSubmenu title="About Us" items={aboutItems} />
        </nav>
      </div>
    </>
  );
};