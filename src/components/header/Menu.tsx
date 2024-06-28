"use client";
import Link from "next/link";
import { Fragment, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <LuMenu
        className="w-10 h-10 cursor-pointer"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className={`absolute bg-black h-screen top-0 right-[-16px] px-5 text-white transform transition-transform duration-[5000ms] ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-20 w-full items-center flex justify-end">
            <LuX
              className="w-10 h-10 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>

          <ul className="flex flex-col gap-6">
            <li>Homme</li>
            <li>Femme</li>
            <li>Accessoires</li>
            <li>Collections</li>
          </ul>
          <div className="flex flex-col items-end gap-4 mt-16">
            <div>
              <Link href="/">Se connecter</Link>
              <span> / </span>
              <Link href="/">Sauthentifier</Link>
            </div>
            <Link href="/">FAQ</Link>
            <Link href="/">Nous contacter</Link>
          </div>
        </div>
      )}
    </Fragment>
  );
}
