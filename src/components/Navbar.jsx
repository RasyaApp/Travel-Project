import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import "/src/App.css";
import logo from "/src/assets/logo.svg";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (location.pathname.includes("/admin")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest("button")
      ) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutsideMenu);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [isMenuOpen]);

  return (
    <div className="w-full bg-[#262626] fixed top-0 z-50 shadow-md">
      <div className="flex items-center justify-between h-[70px] px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Main Menu */}
        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex w-full md:w-auto absolute md:relative top-[70px] md:top-0 left-0 md:left-auto bg-[#262626] md:bg-transparent p-4 md:p-0 transition-all duration-300`}
        >
          <div className="flex justify items-center justify-center flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 italic">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/about">ABOUT</NavLink>
            <NavLink href="/gallery">GALLERY</NavLink>

            {/* Dropdown Menu */}
            <div className="relative " ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="text-blue-300 hover:text-white text-sm font-semibold italic uppercase"
              >
                DESTINATION
              </button>
              {isDropdownOpen && (
                <div className="absolute items-center bg-[#262626] rounded-md shadow-lg mt-2 z-50">
                  <NavLink
                    href="/jawatengah"
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    JATENG
                  </NavLink>
                  <NavLink
                    href="/jawabarat"
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    JABAR
                  </NavLink>
                  <NavLink
                    href="/jawatimur"
                    className="block px-4 py-2 text-white hover:bg-gray-700"
                  >
                    JATIM
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink href="/wisata">REVIEW</NavLink>

            {/* Login / Logout */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-blue-300 hover:text-white text-sm font-semibold uppercase"
              >
                Logout
              </button>
            ) : (
              <NavLink href="/login">LOGIN</NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
