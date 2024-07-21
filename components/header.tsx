"use client";

import React, { useState } from "react";
import Logo from "@/public/image/Storefront.png";
import Text from "@/public/image/text.png";
import Menu from "@/public/image/menu.png";
import User from "@/public/image/User.png";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-custom-gray h-24 flex items-center font-sans sticky top-0  z-50 py-4 ">
      <div className="flex items-center justify-between px-3 md:px-2 max-w-1250px mx-auto w-full">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <Image
            src={Text}
            alt="Text"
            width={200}
            height={50}
            className="ml-3"
          />
        </div>
        <nav className="hidden md:flex space-x-4 items-center gap-5">
          <a href="#" className="text-white">
            Marketplace
          </a>
          <a href="#" className="text-white">
            Rankings
          </a>
          <a href="#" className="text-white">
            Connect a wallet
          </a>
          <button
            className="bg-custom-purple text-white px-6 py-2 rounded-2xl flex items-center gap-3"
            style={{ width: "152px", height: "60px", borderRadius: "20px" }}
          >
            <Image src={User} alt="Logo" />
            Sign Up
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <Image src={Menu} alt="Menu" width={30} height={30} />
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-custom-gray flex flex-col items-center space-y-4 py-4 md:hidden">
            <a href="#" className="text-white">
              Marketplace
            </a>
            <a href="#" className="text-white">
              Rankings
            </a>
            <a href="#" className="text-white">
              Connect a wallet
            </a>
            <button
              className="bg-custom-purple text-white px-6 py-2 rounded-2xl flex items-center gap-3"
              style={{ width: "152px", height: "60px", borderRadius: "20px" }}
            >
              <Image src={User} alt="Logo" />
              Sign Up
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
