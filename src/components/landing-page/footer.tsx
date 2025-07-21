'use client';
import Image from 'next/image';

const LINKS = ['About Us', 'Careers', 'Press', 'Blog', 'Pricing'];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-black px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <a
              href="https://www.material-tailwind.com"
              target="_blank"
              className="mb-4 block text-2xl font-bold text-white hover:text-gray-400 transition-colors"
            >
              Material Tailwind
            </a>
            <div className="mb-12 font-normal text-white">
              The reward for getting on the stage is fame.
            </div>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`py-1 font-medium text-white transition-colors hover:text-gray-400 ${
                      idx === 0 ? 'pr-3' : 'px-3'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <div className="mb-3 text-lg font-semibold text-white">
              Get the app
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="flex items-center justify-center rounded bg-white px-4 py-2 font-semibold text-black shadow transition-colors hover:bg-gray-100"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                App Store
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded bg-white px-4 py-2 font-semibold text-black shadow transition-colors hover:bg-gray-100"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                Google Play
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <div className="text-center font-normal text-white opacity-75">
            &copy; {CURRENT_YEAR} Made with{' '}
            <a
              href="https://www.material-tailwind.com"
              target="_blank"
              className="underline hover:text-gray-400"
            >
              Material Tailwind
            </a>{' '}
            by{' '}
            <a
              href="https://www.creative-tim.com"
              target="_blank"
              className="underline hover:text-gray-400"
            >
              Creative Tim
            </a>
            .
          </div>

          <div className="flex gap-2">
            <a
              href="#"
              className="rounded-full p-2 text-white transition-colors hover:bg-gray-900"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
            </a>
            <a
              href="#"
              className="rounded-full p-2 text-white transition-colors hover:bg-gray-900"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
            </a>
            <a
              href="#"
              className="rounded-full p-2 text-white transition-colors hover:bg-gray-900"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </a>
            <a
              href="#"
              className="rounded-full p-2 text-white transition-colors hover:bg-gray-900"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
            </a>
            <a
              href="#"
              className="rounded-full p-2 text-white transition-colors hover:bg-gray-900"
              aria-label="Dribbble"
            >
              <i className="fa-brands fa-dribbble text-2xl not-italic opacity-75"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
