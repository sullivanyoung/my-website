import { NavLink } from '@remix-run/react';
import NavLinks from './navlinks';
// import { MoonSVG, SunSVG } from './svgs';

interface NavBarProps {
  isDark: boolean;
  isOpen: boolean;
  setIsDark: (isDark: boolean) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export default function NavBar({ isOpen, setIsOpen }: NavBarProps) {
  return (
    <nav className="mb-12">
      <div className="flex flex-wrap justify-between mx-auto">
        <NavLink to="/" className="flex items-center">
          <span className="text-2xl font-bold whitespace-nowrap text-white group relative">
            Sullivan Young
            <span className="group-hover:w-full transition-width duration-500 h-0.5 bg-white absolute bottom-0 left-0 w-0" />
          </span>
        </NavLink>
        {/* TODO: update to allow theming */}
        {/* <button
          type="button"
          className="hidden items-center p-2 w-10 h-10 justify-center text-sm
          text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2
           focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded="false"
          onClick={() => setIsDark(!isDark)}
          aria-label="open menu"
        >
          {isDark ? <MoonSVG /> : <SunSVG />}
        </button> */}
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
              <NavLinks route="/" linkName="Home" setIsOpen={setIsOpen} />
            </li>
            <li>
              <NavLinks route="/projects" linkName="Projects" setIsOpen={setIsOpen} />
            </li>
            <li>
              <NavLinks route="/blog" linkName="Blog" setIsOpen={setIsOpen} />
            </li>
            {/* <li>
              <NavLinks route="/contact" linkName="Contact" setIsOpen={setIsOpen} />
            </li> */}
            {/* TODO: Add Skills Page Back
             <li>
              <NavLink route="/skills" linkName="Skills" setIsOpen={setIsOpen} />
            </li> */}
            <li>
              <NavLinks route="/about" linkName="About" setIsOpen={setIsOpen} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
