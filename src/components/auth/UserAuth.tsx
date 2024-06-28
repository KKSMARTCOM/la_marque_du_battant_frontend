"use client";
import { Fragment, useState } from "react";
import { LuUser2 } from "react-icons/lu";
import Form from "@/components/auth/Form";
import Image from "next/image";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [authMethod, setAuthMethod] = useState(true);
  return (
    <Fragment>
      <LuUser2
        className="w-8 h-8 cursor-pointer"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className="absolute h-screen w-full top-0 left-0 flex">
          <div
            className="h-full opacity-[0.3] w-2/3 bg-black cursor-pointer"
            onClick={() => setOpen(false)}
          ></div>
          <div
            className={`h-full w-1/3 bg-white fixed top-0 bottom-0 right-0 transform transition-transform duration-[5s] ease-in-out text-black ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="custom-scrollbar h-full">
              <div className="pt-6 fixed top-0 right-0 left-0 bg-white">
                <button
                  className="py-4 border-b-4 border-black w-1/2"
                  onClick={() => setAuthMethod(true)}
                >
                  Connexion
                </button>
                <button
                  className="py-4 w-1/2"
                  onClick={() => setAuthMethod(false)}
                >
                  Inscription
                </button>
              </div>
              <div className="mt-[5rem]">
                <div className="w-full flex justify-center py-[3rem]">
                  <Image src="/battant.png" alt="" width={100} height={100} />
                </div>
                {authMethod && <Form method="login" />}
                {authMethod === false && <Form method="register" />}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
