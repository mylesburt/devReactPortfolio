import React from "react";

function Navbar() {
  return (
    <header className="bg-black text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-green-400 p-2 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M24 10.935v2.131l-10 4.934v-2.23l7.64-3.77-7.64-3.779v-2.221l10 4.935zm-24 0v2.131l10 4.934v-2.23l-7.64-3.77 7.64-3.779v-2.221l-10 4.935z"></path>
          </svg>
          <span className="text-white text-xl">MB Portfolio</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-green-400 p-2 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"></path>
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
