"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

function Navbar2() {
  const [menuOpen, setMenuOpen] = useState();

  return (
    <nav className="bg-[#E4E2E2]">
      <div className="hidden md:flex justify-between items-center py-4 px-6">
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
          <Link href="#" className="bg-[#cf2025] rounded-md p-2 font-semibold">
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
