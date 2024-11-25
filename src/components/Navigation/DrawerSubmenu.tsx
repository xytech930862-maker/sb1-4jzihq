import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { NavLink } from './NavLink';

interface DrawerSubmenuProps {
  title: string;
  items: Array<{ label: string; path: string }>;
}

export const DrawerSubmenu = ({ title, items }: DrawerSubmenuProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
      >
        <div className="flex items-center">
          {isExpanded ? (
            <ChevronDown className="h-4 w-4 mr-2" />
          ) : (
            <ChevronRight className="h-4 w-4 mr-2" />
          )}
          <span>{title}</span>
        </div>
      </button>

      {isExpanded && (
        <div className="pl-6 space-y-2">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="block py-1 text-sm"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};