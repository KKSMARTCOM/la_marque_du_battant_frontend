import { Fragment, useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { BsXLg } from "react-icons/bs";

import CartCard from "../cart/CartCard";
import CartCheckout from "../cart/CartCheckout";
import CartAccordion from "../cart/CartAccordion";

export default function Cart() {
  const [open, setOpen] = useState(false);
  const [cartItem, setCartItem] = useState(true);
  return (
    <Fragment>
      <LuShoppingBag
        className="w-6 h-6 cursor-pointer"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className="absolute h-screen w-full top-0 left-0 flex">
          <div
            className="h-full opacity-[0.3] w-2/3 bg-black cursor-pointer"
            onClick={() => setOpen(false)}
          ></div>
          <div
            className={`h-full w-1/3 bg-white fixed top-0 bottom-0 right-0 transform transition-transform duration-200 ease-in-out text-black ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="custom-scrollbar">
              <div className="pt-6 pb-4 mx-6 border-b border-black flex justify-between items-center fixed top-0 right-0 left-0 bg-white">
                <h1 className="text-2xl">Votre panier</h1>
                <BsXLg
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="mt-[6rem] h-[22rem] custom-scrollbar">
                {!cartItem ? (
                  <p>Votre panier est vide</p>
                ) : (
                  <div className="border-l border-gray-300">
                    {/* TOP */}
                    {/* Composant */}
                    <div className="px-6">
                      <CartCard />
                    </div>
                    <div className="px-6 mt-10">
                      <CartAccordion />
                    </div>
                    {/* BOTTOM */}
                    <div className="absolute bottom-0 h-[10rem] w-full flex flex-col gap-6 justify-center items-center bg-white border-t border-black px-4">
                      <CartCheckout />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
