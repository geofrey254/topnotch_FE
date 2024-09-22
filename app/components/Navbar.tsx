"use client";
import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseLargeLine } from "react-icons/ri";
import { LuUsers2 } from "react-icons/lu";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleNav() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="sticky bg-[#cf2025] w-full h-16 top-0 z-10">
      <div className="flex justify-between items-center py-3 md:py-3 md:px-6 text-white md:gap-0">
        <div className="flex items-center gap-2 ml-2 md:ml-0">
          <div className="flex md:hidden">
            <BiMenuAltRight
              size={30}
              className="text-white md:hidden"
              onClick={handleNav}
            />
          </div>
          <div className="left">
            <h2 className="font-extrabold md:text-2xl xl:text-3xl logo">
              TOPNOTCH
            </h2>
          </div>
        </div>
        <div className="mid rounded-lg p-2 bg-white hidden md:flex gap-56">
          <input
            type="search"
            name="search"
            id=""
            className="search_bar border-0 focus:outline-none w-[300px] text-[#350203]"
            placeholder="search for products"
          />
          <button type="submit" className="mr-6">
            <FaSearch size={20} className="text-[#cf2025]" />
          </button>
        </div>
        <div className="right flex gap-0 md:gap-12 xl:gap-8 mr-[10px] md:ml-0">
          <div className="flex gap-2 items-center">
            <FaCartArrowDown size={30} />
            <div className="text-xs">
              <h4 className="">Your Cart</h4>
              <p className="font-bold">Kes. 0.00</p>
            </div>
          </div>
          <div className="hidden md:flex gap-2 items-center">
            <div className="flex gap-2 items-center text-xs">
              <FaUserGraduate size={30} />
              <h4 className="">
                Login <br />
                <span className="font-bold">Account</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center py-4 px-6 bg-[#E4E2E2]">
        {" "}
        <div className="left">
          <ul className="flex gap-4 text-[#350203] font-medium">
            <li>Home</li>
            <li>Books</li>
            <li>Stationery</li>
            <li>Printing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="right">
          <Link
            href="#"
            className="bg-[#cf2025] rounded-md p-2 font-semibold text-white"
          >
            Get In Touch
          </Link>
        </div>
      </div>
      {/* mobile nav */}
      <div
        className={
          menuOpen
            ? "nav_anim fixed w-[90%] h-[70rem] bg-[#E4E2E2] top-0 pt-4"
            : "transition ease-in-out delay-150 duration-300 collapse"
        }
      >
        <div className="flex justify-center items-center gap-2 font-bold">
          <button onClick={handleNav}>Close</button>
          <RiCloseLargeLine size={20} />
        </div>
        <div className="text-center mt-8 p-8">
          <h4 className="font-bold">WHAT ARE YOU LOOKING FOR?</h4>
          <div className="rounded-lg p-2 bg-white flex mt-4">
            <input
              type="search"
              name="search"
              id=""
              className="search_bar rounded-full focus:outline-none w-[300px] text-[#350203] bg-transparent"
              placeholder="search for products"
            />
            <button type="submit" className="mr-6">
              <FaSearch size={20} className="text-[#cf2025]" />
            </button>
          </div>
        </div>
        <div className="text-center ml-4">
          <Link href="#" className="flex  =items-center gap-2 text-lg">
            <LuUsers2 />
            Login/Register
          </Link>
        </div>
        <div>
          <ul className="mobile-nav flex flex-col gap-6 text-[#350203] font-medium mt-12 ml-4">
            <li>Home</li>
            <li>Books</li>
            <li>Stationery</li>
            <li>Printing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
