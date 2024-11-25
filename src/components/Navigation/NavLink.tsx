import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = ({ to, children, className = '' }: NavLinkProps) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `block px-2 py-1 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out ${
        isActive
          ? 'bg-indigo-50 text-indigo-700'
          : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
      } ${className}`
    }
  >
    {children}
  </RouterNavLink>
);