import React, { ReactNode } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavItemProps {
  children: ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || '#'}
        target={href ? '_blank' : '_self'}
        className="font-medium text-base transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-0 transition-colors duration-300 ${
        isScrolling ? 'bg-white shadow' : 'bg-transparent shadow'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        <a
          href="/"
          className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
            isScrolling ? 'text-black' : 'text-white'
          }`}
        >
          SocialApp
        </a>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? 'text-black' : 'text-white'
          }`}
        >
          <NavItem>Home</NavItem>
          <NavItem>Features</NavItem>
          <NavItem>Pricing</NavItem>
          <NavItem>FAQs</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <button
            className={`rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 ${
              isScrolling ? 'text-black' : 'text-white'
            }`}
            aria-label="Twitter"
          >
            <i className="fa-brands fa-twitter text-base" />
          </button>
          <button
            className={`rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 ${
              isScrolling ? 'text-black' : 'text-white'
            }`}
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook text-base" />
          </button>
          <button
            className={`rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 ${
              isScrolling ? 'text-black' : 'text-white'
            }`}
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram text-base" />
          </button>
          <a>
            <button
              className={`cursor-pointer rounded bg-black px-4 py-2 text-sm font-semibold text-white shadow transition-colors duration-200 hover:bg-black ${
                isScrolling ? 'bg-black' : 'bg-black'
              }`}
              onClick={() => {
                window.location.href = '/admin/auth/login';
              }}
            >
              Login
            </button>
          </a>
        </div>
        <button
          onClick={handleOpen}
          className={`ml-auto inline-block rounded p-2 transition-colors duration-200 lg:hidden ${
            isScrolling ? 'text-black' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="container mx-auto mt-4 rounded-lg border-t border-gray-900 bg-black/95 px-6 py-5 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-4 text-white">
            <NavItem>Home</NavItem>
            <NavItem>Features</NavItem>
            <NavItem>Pricing</NavItem>
            <NavItem>FAQs</NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <button
              className="rounded-full p-2 text-white transition-colors duration-200 hover:bg-gray-900"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-twitter text-base" />
            </button>
            <button
              className="rounded-full p-2 text-white transition-colors duration-200 hover:bg-gray-900"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook text-base" />
            </button>
            <button
              className="rounded-full p-2 text-white transition-colors duration-200 hover:bg-gray-900"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram text-base" />
            </button>
            <a href="#get-started">
              <button className="ml-auto rounded bg-white px-4 py-2 text-sm font-semibold text-black shadow transition-colors duration-200 hover:bg-gray-200">
                Get Started
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
