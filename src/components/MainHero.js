import React from "react";

import Logo from "../images/Logo.png";
import HeroImage from "../images/hero.jpg";
// import ShortLogo from "../images/Short Logo.png";

export const MainHero = () => {
  const [isOpen] = React.useState(false);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

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
                isOpen
                  ? "shadow-md ring-1 ring-black ring-opacity-5 bg-white "
                  : ""
              } overflow-hidden`}
            >
              <div className="px-2 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={Logo} alt="" />
                </div>
                {/* <div className="-mr-2">
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
                </div> */}
              </div>
              {/* {isOpen ? (
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
              ) : null} */}
            </div>
          </div>

          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Disrupting the </span>
                <span className="block text-yellow-500 xl:inline">
                  E-Commerce World
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We are a young E-Commerce Company looking to shake up the
                E-Commerce world with new and exciting Brands. Our goal is to
                bring amazing to products to amazing people.
              </p>
              {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div> */}
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={HeroImage}
          alt=""
        />
      </div>
    </div>
  );
};
