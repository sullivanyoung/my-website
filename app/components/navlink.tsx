import { Link } from '@remix-run/react';

interface LinkProps {
  route: string;
  linkName: string;
  setIsOpen: (isOpen: boolean) => void;
}

export default function NavLink({ route, linkName, setIsOpen }: LinkProps) {
  return (
    <Link
      to={route}
      onClick={() => setIsOpen(false)}
      className="block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-gray-400 hover:bg-gray-700 md:p-0 text-white group relative"
    >
      {linkName}
      <span className="group-hover:w-full transition-width duration-500 h-0.5 bg-gray-400 absolute bottom-0 left-0 w-0" />
    </Link>
  );
}
