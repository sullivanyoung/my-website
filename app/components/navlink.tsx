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
      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 hover:bg-gray-700 md:p-0 dark:text-white "
    >
      {linkName}
    </Link>
  );
}
