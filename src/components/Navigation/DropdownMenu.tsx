import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavLink } from './NavLink';

interface DropdownItem {
  label: string;
  path: string;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  isMobile?: boolean;
}

export const DropdownMenu = ({ label, items, isMobile = false }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <div className="space-y-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-md"
        >
          <span>{label}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </button>
        {isOpen && (
          <div className="pl-4 space-y-2">
            {items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="block w-full text-left"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-md"
      >
        <span>{label}</span>
        <ChevronDown
          className={`ml-1 w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="block w-full text-left"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};