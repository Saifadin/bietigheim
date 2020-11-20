import PropTypes from "prop-types";
import React from "react";

import Logo from "../images/Logo.png";
import ShortLogo from "../images/Short Logo.png";
import { Footer } from "./Footer";

function Layout({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start hidden md:block"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">Bietigheim Sunshine Ltd.</span>
                <img className="h-8 w-auto sm:h-10" src={Logo} />
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div
          className={`rounded-lg ${
            isOpen ? "shadow-md ring-1 ring-black ring-opacity-5 bg-white " : ""
          } overflow-hidden`}
        >
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img className="h-8 w-auto" src={ShortLogo} alt="" />
            </div>
            <div className="-mr-2">
              {isOpen ? (
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close main menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
          {isOpen ? (
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                >
                  Product
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                >
                  Features
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                >
                  Marketplace
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem"
                >
                  Company
                </a>
              </div>
              <div role="none">
                <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  role="menuitem"
                >
                  Log in
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
