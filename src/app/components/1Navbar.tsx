"use client";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import {  FaBars } from "react-icons/fa";
import { PiGiftLight } from "react-icons/pi";
import { BsBag } from 'react-icons/bs';
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <header className="bg-gray-200 border-b font-sans">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Left: Logo */}
          <Link href="https://www.nike.com">
            <Image
              src="/Navbar/Jumpman_logo.svg"
              alt="Nike Logo"
              width={30}
              height={30}
              className="cursor-pointer ml-14"
            />
          </Link>

          {/* Center & Right: Other Links */}
          <div className="flex items-center justify-end flex-1 space-x-6">
            <nav
              className={`flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 text-sm ${
                isMenuOpen ? "block" : "hidden"
              } sm:block`}
            >
              <Link href="/help" className="hover:underline">
                Help
              </Link>
              <span className="hidden sm:inline-block h-4 w-px bg-gray-400"></span>
              <Link href="/joinus" className="hover:underline">
                Join Us
              </Link>
              <span className="hidden sm:inline-block h-4 w-px bg-gray-400"></span>
              <Link href="/login" className="hover:underline">
                Sign In
              </Link>
            </nav>
            <FaBars
              className="sm:hidden text-gray-600 text-xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            />
          </div>
        </div>
      </header>

      {/* Main Navbar */}
      <header className="bg-white shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-8 lg:px-16 py-2">
          {/* Logo */}
          <Image
            src="/Navbar/nike-4-logo.svg"
            alt="Nike Logo"
            width={80}
            height={80}
            className="cursor-pointer  "
          />

          {/* Navigation Links */}
          <nav className="hidden sm:flex space-x-8 text-gray-800 text-base font-semibold">
            <Link href="/news" className="hover:text-gray-500">
              New & Featured
            </Link>
            <Link href="/men" className="hover:text-gray-500">
              Men
            </Link>
            <Link href="/women" className="hover:text-gray-500">
              Women
            </Link>
            <Link href="/kids" className="hover:text-gray-500">
              Kids
            </Link>
            <Link href="/overallproducts" className="hover:text-gray-500">
              SNKRS
            </Link>
          </nav>

          {/* Search & Icons */}
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-xs sm:max-w-sm">
              <CiSearch className="text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm outline-none pl-2 w-full"
                aria-label="Search"
              />
            </div>
            <Link href="/gifts
">
    
        <PiGiftLight  className="text-gray-600 text-xl cursor-pointer" aria-label="GiftVouchers" />
      
    </Link>

    <Link href="/cart
">
    
        <BsBag className="text-gray-600 text-xl cursor-pointer" aria-label="GiftVouchers" />
      
    </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
