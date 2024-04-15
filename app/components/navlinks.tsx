import { NavLink } from '@remix-run/react';

interface LinkProps {
  route: string;
  linkName: string;
  setIsOpen: (isOpen: boolean) => void;
}

export default function NavLinks({ route, linkName, setIsOpen }: LinkProps) {
  return (
    <NavLink
      to={route}
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        isActive
          ? 'block py-10 px-3 rounded underline underline-offset-4 decoration-2 text-white md:border-0 md:p-0'
          : 'block py-10 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-white hover:bg-gray-700 md:p-0 text-gray-400 group relative'
      }
    >
      {linkName}
      <span className="group-hover:w-full transition-width duration-500 h-0.5 md:bg-white bg-none absolute bottom-0 left-0 w-0" />
    </NavLink>
  );
}
