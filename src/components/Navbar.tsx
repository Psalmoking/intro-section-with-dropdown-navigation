import { useState } from "react";

import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconCloseMenu from "../assets/images/icon-close-menu.svg";
import arrowUpIcon from "../assets/images/icon-arrow-up.svg";
import iconToDo from "../assets/images/icon-todo.svg";
import iconCalendar from "../assets/images/icon-calendar.svg";
import iconReminders from "../assets/images/icon-reminders.svg";
import iconPlanning from "../assets/images/icon-planning.svg";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const [showFeaturesLinks, setShowFeaturesLinks] = useState<boolean>(false);
  const toggleShowFeaturesLinks = () => {
    setShowFeaturesLinks((prev) => !prev);
  };

  const [showCompanyLinks, setShowCompanyLinks] = useState<boolean>(false);
  const toggleShowCompanyLinks = () => {
    setShowCompanyLinks((prev) => !prev);
  };

  return (
    <nav>
      <div className="relative flex  items-center justify-between md:gap-15 p-4 bg-white md:shadow-md">
        <img src={logo} alt="Logo" className="w-24 cursor-pointer" />
        <div
          onClick={toggleMenu}
          className="relative z-20 md:hidden cursor-pointer"
        >
          <img
            src={showMenu ? iconCloseMenu : iconMenu}
            alt="Menu Icon"
            className="w-6 cursor-pointer"
          />
        </div>

        {/* Desktop links */}
        <div className="w-full hidden md:flex justify-between items-center">
          <ul className="flex gap-7 text-md text-gray-600 font-medium">
            <li
              className="animate-slide-in-top group"
              style={{ animationDelay: `${1 * 0.2}s` }}
            >
              <div className="flex items-center gap-4 cursor-pointer group-hover:text-gray-900">
                Features{" "}
                <img
                  src={arrowUpIcon}
                  className="w-fit h-fit group-hover:rotate-180"
                  alt=""
                />
              </div>
              <div className="absolute right-0 pt-4">
                <div className="p-6 hidden group-hover:block w-[10rem] bg-white rounded-md shadow-black-custom text-sm">
                  <ul className="flex flex-col gap-4">
                    <li className="cursor-pointer flex items-center gap-4 hover:text-gray-800">
                      <img src={iconToDo} className="w-5" alt="icon" />
                      Todo List
                    </li>
                    <li className="cursor-pointer flex items-center gap-4 hover:text-gray-800">
                      <img src={iconCalendar} className="w-5" alt="icon" />
                      Calendar
                    </li>
                    <li className="cursor-pointer flex items-center gap-4 hover:text-gray-800">
                      <img src={iconReminders} className="w-5" alt="icon" />
                      Reminders
                    </li>
                    <li className="cursor-pointer flex items-center gap-4 hover:text-gray-800">
                      <img src={iconPlanning} className="w-5" alt="icon" />
                      Planning
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li
              className="animate-slide-in-top group"
              style={{ animationDelay: `${2 * 0.2}s` }}
            >
              <div className="flex items-center gap-4 cursor-pointer group-hover:text-gray-900">
                Company
                <img
                  src={arrowUpIcon}
                  className="w-fit h-fit group-hover:rotate-180"
                  alt=""
                />
              </div>
              <div className="absolute pt-4">
                <div className="p-6 hidden group-hover:block bg-white w-[8rem] bg-white rounded-md shadow-black-custom text-sm">
                  <ul className="flex flex-col gap-4">
                    <li className="cursor-pointer hover:text-gray-800">
                      History
                    </li>
                    <li className="cursor-pointer hover:text-gray-800">
                      Our Team
                    </li>
                    <li className="cursor-pointer hover:text-gray-800">Blog</li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              className="flex items-center cursor-pointer animate-slide-in-top hover:text-gray-900"
              style={{ animationDelay: `${3 * 0.2}s` }}
            >
              Careers
            </li>
            <li
              className="flex items-center cursor-pointer animate-slide-in-top hover:text-gray-900"
              style={{ animationDelay: `${4 * 0.2}s` }}
            >
              About
            </li>
          </ul>

          <div className="flex text-gray-700 text-sm font-medium gap-3">
            <button
              className="bg-white px-6 py-2 rounded-xl hover:bg-gray-100 transition-colors animate-slide-in-top hover:text-gray-900 cursor-pointer focus:outline-none"
              style={{ animationDelay: `${5 * 0.2}s` }}
            >
              Login
            </button>
            <button
              className="bg-white border border-gray-700 px-6 py-2 rounded-xl hover:bg-gray-100 transition-colors animate-slide-in-top hover:text-gray-900 cursor-pointer focus:outline-none"
              style={{ animationDelay: `${6 * 0.2}s` }}
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {showMenu && (
        <div className="absolute top-0 left-0 w-full h-full md:hidden">
          <div className="bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 w-full h-full" />
          <div
            className="shadow-lg pt-15 relative z-10 p-4 bg-white min-h-full w-3/5 ml-auto animate-slide-in-right"
            style={{ animationDelay: `${0 * 0.2}s` }}
          >
            <ul className="flex flex-col text-xl text-gray-600 font-medium">
              <li
                className="my-4 animate-slide-in-right group"
                style={{ animationDelay: `${1 * 0.2}s` }}
              >
                <div
                  className="flex items-center gap-4 cursor-pointer group-hover:text-gray-900"
                  onClick={toggleShowFeaturesLinks}
                >
                  Features{" "}
                  <img
                    src={arrowUpIcon}
                    className={`w-fit h-fit ${
                      !showFeaturesLinks ? "rotate-180" : ""
                    }`}
                    alt=""
                  />
                </div>
                {showFeaturesLinks && (
                  <div className="pl-7">
                    <ul className="flex flex-col gap-4 mt-2">
                      <li
                        className="cursor-pointer flex items-center gap-4 hover:text-gray-800 animate-slide-in-right"
                        style={{ animationDelay: `${1 * 0.2}s` }}
                      >
                        <img src={iconToDo} className="w-5" alt="icon" />
                        Todo List
                      </li>
                      <li
                        className="cursor-pointer flex items-center gap-4 hover:text-gray-800 animate-slide-in-right"
                        style={{ animationDelay: `${2 * 0.2}s` }}
                      >
                        <img src={iconCalendar} className="w-5" alt="icon" />
                        Calendar
                      </li>
                      <li
                        className="cursor-pointer flex items-center gap-4 hover:text-gray-800 animate-slide-in-right"
                        style={{ animationDelay: `${3 * 0.2}s` }}
                      >
                        <img src={iconReminders} className="w-5" alt="icon" />
                        Reminders
                      </li>
                      <li
                        className="cursor-pointer flex items-center gap-4 hover:text-gray-800 animate-slide-in-right"
                        style={{ animationDelay: `${4 * 0.2}s` }}
                      >
                        <img src={iconPlanning} className="w-5" alt="icon" />
                        Planning
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li
                className="my-4 animate-slide-in-right group"
                style={{ animationDelay: `${2 * 0.2}s` }}
              >
                <div
                  className="flex items-center gap-4 cursor-pointer group-hover:text-gray-900"
                  onClick={toggleShowCompanyLinks}
                >
                  Company
                  <img
                    src={arrowUpIcon}
                    className={`w-fit h-fit ${
                      !showCompanyLinks ? "rotate-180" : ""
                    }`}
                    alt=""
                  />
                </div>
                {showCompanyLinks && (
                  <div className="pl-7">
                    <ul className="flex flex-col gap-4 mt-2">
                      <li
                        className="cursor-pointer hover:text-gray-800 animate-slide-in-right"
                        style={{ animationDelay: `${1 * 0.2}s` }}
                      >
                        History
                      </li>
                      <li
                        className="cursor-pointer hover:text-gray-800 animate-slide-in-right"
                        style={{ animationDelay: `${2 * 0.2}s` }}
                      >
                        Our Team
                      </li>
                      <li
                        className="cursor-pointer hover:text-gray-800 animate-slide-in-right"
                        style={{ animationDelay: `${3 * 0.2}s` }}
                      >
                        Blog
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                className="flex items-center cursor-pointer my-4 animate-slide-in-right hover:text-gray-900"
                style={{ animationDelay: `${3 * 0.2}s` }}
              >
                Careers
              </li>
              <li
                className="flex items-center cursor-pointer my-4 animate-slide-in-right hover:text-gray-900"
                style={{ animationDelay: `${4 * 0.2}s` }}
              >
                About
              </li>
            </ul>
            <div className="flex flex-col text-gray-700 font-medium gap-3 mt-10">
              <button
                className="bg-white px-6 py-3 rounded-2xl hover:bg-gray-100 transition-colors animate-slide-in-right hover:text-gray-900 cursor-pointer focus:outline-none"
                style={{ animationDelay: `${5 * 0.2}s` }}
              >
                Login
              </button>
              <button
                className="bg-white border border-gray-700 px-6 py-3 rounded-2xl hover:bg-gray-100 transition-colors animate-slide-in-right hover:text-gray-900 cursor-pointer focus:outline-none"
                style={{ animationDelay: `${6 * 0.2}s` }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
