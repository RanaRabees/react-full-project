/* eslint-disable @next/next/no-img-element */
"use client";
import type { NextPage } from "next";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed w-full mynavback">
        <div className="relative flex items-center justify-between h-24">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* <span className="sr-only">Open main menu</span> */}
              {isOpen ? (
                <XIcon className="block h-8 w-8 shadow-red-950 shadow-2xl border-dashed border-pink-500 border-4 ronded-md" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-8 w-8 shadow-red-950 shadow-2xl border-dashed border-pink-500 border-4 ronded-md" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="container mx-auto flex justify-between items-center">
            <a className="text-red-400 md:text-red-400 lg:text-orange-400 hover:text-orange-500 transition-all hover:shadow-red-950 font-bold hover:font-extrabold hover:italic text-xl hover:text-2xl py-2 px-4" href="#">
              <img src="/logo.png" className="inline-block mr-2 ml-5 md:ml-0 lg:ml-0 transition-all h-8 w-8" alt="" />
              <p className="inline-block sm:text-center mr-2">Computers Shop</p>
            </a>
          </div>
          <div className="hidden sm:block sm:ml-8">
            <div className="flex space-x-3 md:space-x-5 mdlg:space-x-8 lg:space-x-12">
              <div className="hidden md:flex md:justify-between md:items-center">
                <a className="bg-pink-200 hover:bg-blue-300 text-white border-2 mr-5 hover:border-green-600 hover:text-yellow-500 transition-all hover:font-bold hover:text-lg hover:italic px-4 py-2 rounded-md focus:outline-none" href="#">Home</a>
                <a className="bg-pink-200 hover:bg-blue-300 text-white border-2 mr-5 hover:border-green-600 hover:text-orange-500 transition-all hover:font-bold hover:text-lg hover:italic px-4 py-2 rounded-md focus:outline-none" href="#">About</a>
                <a className="bg-pink-200 hover:bg-blue-300 text-white border-2 mr-5 hover:border-green-600 hover:text-orange-500 transition-all hover:font-bold hover:text-lg hover:italic px-4 py-2 rounded-md focus:outline-none" href="#">Services</a>
                <a className="bg-pink-200 hover:bg-blue-300 text-white border-2 mr-5 hover:border-green-600 hover:text-pink-500 transition-all hover:font-bold hover:text-lg hover:italic px-4 py-2 rounded-md focus:outline-none" href="#">Contact</a>
                <button className="mr-5 bg-gradient-to-br from-blue-200 to-indigo-500 rounded-lg hover:rounded-xl border-2 border-green-600 text-orange-400 hover:text-orange-500 hover:shadow-red-950 transition-all font-bold hover:font-extrabold hover:italic text-lg hover:text-xl py-2 px-4"><a href="#" target="_computers">Login/Signup</a></button>
              </div>
            </div>
          </div>

        </div>
        {isOpen && (
          <div className="sm:hidden transition-all text-center" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-5">
              <div className="md:hidden">
                <div className="mynavback w-full shadow hover:shadow-2xl hover:shadow-red-950 rounded-md p-4">
                  <a className="bg-pink-200 hover:bg-blue-300 text-white border-2 mr-5 hover:border-green-600 hover:text-yellow-500 transition-all hover:font-bold hover:text-lg hover:italic px-4 py-2 rounded-md focus:outline-none" href="#">Home</a>
                  <a className="bg-pink-200 hover:bg-blue-300 text-white border-2 mr-5 hover:border-green-600 hover:text-orange-500 transition-all hover:font-bold hover:text-lg hover:italic px-4 py-2 rounded-md focus:outline-none" href="#">About</a>
                  <a className="bg-pink-200 hover:bg-blue-300 text-white border-2 mr-5 hover:border-green-600 hover:text-orange-500 transition-all hover:font-bold hover:text-lg hover:italic px-4 py-2 rounded-md focus:outline-none" href="#">Services</a>
                  <hr className="mb-3 w-full bg-gradient-to-bl from-purple-500 to-orange-400 shadow-red-950 shadow-2xl" />
                  <a className="bg-pink-200 hover:bg-blue-300 text-white border-2 mr-5 hover:border-green-600 hover:text-pink-500 transition-all hover:font-bold hover:text-lg hover:italic px-4 py-2 rounded-md focus:outline-none" href="#">Contact</a>
                  <button className="bg-gradient-to-br from-blue-200 to-indigo-500 rounded-md border-2 border-green-600 text-orange-400 hover:text-orange-500 hover:shadow-red-950 transition-all hover:font-extrabold hover:italic text-lg hover:text-xl py-2 px-4"><a href="#" target="_computers">Login/Signup</a></button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
