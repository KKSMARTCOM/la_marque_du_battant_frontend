"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "@/components/header/Menu";
import Search from "@/components/header/Search";
import UserAuth from "@/components/auth/UserAuth";
import Cart from "@/components/header/Cart";
import Button from "@/components/header/Button";

export default function Header() {
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 60) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <div
      className={`h-20 px-4 left-0 top-0 right-0 ${
        sticky
          ? "bg-white text-black fixed z-[9999] border-b border-gray-200"
          : "absolute bg-transparent text-white"
      }`}
    >
      {/* MOBILE */}
      <div className="h-full flex justify-between items-center relative md:hidden">
        <Link href="/" className="text-lg font-bold uppercase">
          la marque du battant
        </Link>
        <Menu />
      </div>
      {/* WEB */}
      <div className="hidden md:flex h-full">
        <div className="flex items-center justify-between w-full">
          {/* LEFT */}
          <div className="flex items-center gap-5">
            <Link href="/" className="text-lg text-nowrap font-bold uppercase">
              la marque <br />
              du battant
            </Link>
            <ul className="flex items-center gap-3">
              <li>Homme</li>
              <li>Femme</li>
              <li>Accessoires</li>
              <li>Collections</li>
              <li className="text-red-600">Evènements</li>
            </ul>
          </div>
          {/* RIGHT */}
          <div className="flex items-center gap-5">
            <Search scrolled={sticky} />
            <Button title="BLOG" scrolled={sticky} />
            <UserAuth />
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}
