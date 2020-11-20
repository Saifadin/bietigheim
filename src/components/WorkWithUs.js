import React from "react";

export const WorkWithUs = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Want to work with us?</span>
          <span className="block text-yellow-500">
            Tell us why in a quick email.
          </span>
        </h2>
        <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="mailto:osamah@bietigheimsunshine.com"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700"
            >
              Send an email now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
