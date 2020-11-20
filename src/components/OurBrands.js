import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import Bluli from "../images/cover.png";

export const OurBrands = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Brands
            </h2>
            <p className="text-xl text-gray-500">
              We always try to build brands, that people will want to use and
              buy. Our products are carefully vetted and sourced.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              <li>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <a href="https://bluli.io" target="_blank" rel="noreferrer">
                      <img
                        className="object-cover shadow-lg rounded-lg"
                        src={Bluli}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <a href="https://bluli.io" target="_blank" rel="noreferrer">
                      <h3>bluli.io</h3>
                      <p className="text-yellow-600">
                        Blue-Light Blocking Screen Protectors
                      </p>
                    </a>
                  </div>
                  <div className="text-lg">
                    <p className="text-gray-500">
                      The more we spend time on our phones, the more we damage
                      our eyes. with our <b className="text-blue-900">bluli</b>{" "}
                      Screen Protecters we want to protect your familys and your
                      eyes from damage from Blue-light.
                    </p>
                  </div>

                  <ul className="flex space-x-3 items-center ">
                    <li>
                      <a
                        href="https://bluli.io"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Website</span>
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/bluli.io"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Instagram</span>
                        <FaInstagram className="w-5 h-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/bluli.io"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Facebook</span>
                        <FaFacebook className="w-5 h-5" />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
