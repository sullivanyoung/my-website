import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import type { LinksFunction } from '@remix-run/node';
import stylesheet from '~/tailwind.css?url';
import React from 'react';
import NavBar from './components/navbar';

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    href: '/S.png',
    type: 'image/png',
  },
  { rel: 'stylesheet', href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={`border-gray-200 p-4 ${isDark ? 'bg-gray-600' : 'bg-white'}`}>
        <NavBar isDark={isDark} setIsDark={setIsDark} isOpen={isOpen} setIsOpen={setIsOpen} />
        {!isOpen && children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
