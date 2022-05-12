import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="">
      <div className="container mx-auto flex flex-wrap px-5 py-8 flex-col md:flex-row items-center">
        <a
          href="#"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={logo} alt="logo" className="w-14" />
          <span className="ml-6 text-3xl text-teal-800 font-bold tracking-[4px]">
            Abdula's Portfolio
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center justify-center font-medium tracking-wide gap-7">
          <a
            href="#"
            className="text-teal-800 text-xl link link-underline link-underline-black"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-teal-800 text-xl link link-underline link-underline-black"
          >
            Skills
          </a>
          <a
            href="#"
            className="text-teal-800 text-xl link link-underline link-underline-black"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
