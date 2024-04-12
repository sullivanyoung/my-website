import { Link } from '@remix-run/react';
import NavLink from './navlink';
import { MoonSVG, SunSVG } from './svgs';

interface NavBarProps {
  isDark: boolean;
  isOpen: boolean;
  setIsDark: (isDark: boolean) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export default function NavBar({ isDark, isOpen, setIsDark, setIsOpen }: NavBarProps) {
  return (
    <nav className="mb-12">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:font-bold hover:underline">
            Sullivan Young
          </span>
        </Link>
        {/* TODO: update to allow theming */}
        <button
          type="button"
          className="hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded="false"
          onClick={() => setIsDark(!isDark)}
          aria-label="open menu"
        >
          {isDark ? <MoonSVG /> : <SunSVG />}
        </button>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="open menu"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <NavLink route="/" linkName="Home" setIsOpen={setIsOpen} />
            </li>
            <li>
              <NavLink route="/projects" linkName="Projects" setIsOpen={setIsOpen} />
            </li>
            <li>
              <NavLink route="/blog" linkName="Blog" setIsOpen={setIsOpen} />
            </li>
            <li>
              <NavLink route="/contact" linkName="Contact" setIsOpen={setIsOpen} />
            </li>
            <li>
              <NavLink route="/skills" linkName="Skills" setIsOpen={setIsOpen} />
            </li>
            <li>
              <NavLink route="/about" linkName="About" setIsOpen={setIsOpen} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
