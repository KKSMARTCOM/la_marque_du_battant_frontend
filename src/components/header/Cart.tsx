import { Fragment, useState } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { BsXLg, BsTrash, BsPlus, BsDash } from "react-icons/bs";
import Image from "next/image";
import Button from "../Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Cart() {
  const [open, setOpen] = useState(false);
  const [cartItem, setCartItem] = useState(true);
  return (
    <Fragment>
      <LuShoppingBag
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
                      <div className="flex gap-4">
                        <div className="w-40 h-[10rem] flex justify-center items-center bg-gray-100">
                          <Image
                            src="/pull.png"
                            alt=""
                            width={100}
                            height={110}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p>T-shirt Basic</p>
                          <small className="text-slate-400">Large</small>
                          <p>$71.95</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div>
                          <h1>Quantité</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                          <div className="flex justify-between items-center px-4 py-2 border border-gray-300 rounded-full w-40 hover:border-black">
                            <BsDash className="w-6 h-6 cursor-pointer" />
                            <p>1</p>
                            <BsPlus className="w-6 h-6 cursor-pointer" />
                          </div>
                          <div className="p-2 cursor-pointer rounded-full border border-transparent hover:border hover:border-gray-200">
                            <BsTrash className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-2 pb-6 border-b border-black">
                        <div>
                          <h1>Taille</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                          <div className="flex justify-between items-center px-4 py-2 border border-gray-300 rounded-full w-[13rem] hover:border-black">
                            <p>Changement</p>
                            <span className="w-2 h-2 bg-black rounded-full"></span>
                            <p>Large</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 mt-10">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            Informations sur le paiement
                          </AccordionTrigger>
                          <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern. Yes.
                            It adheres to the WAI-ARIA design pattern.Yes. It
                            adheres to the WAI-ARIA design pattern.Yes. It
                            adheres to the WAI-ARIA design pattern.Yes. It
                            adheres to the WAI-ARIA design pattern.Yes. It
                            adheres to the WAI-ARIA design pattern.Yes. It
                            adheres to the WAI-ARIA design pattern. Expédition
                            et retours
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            Expédition et retours
                          </AccordionTrigger>
                          <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern. Yes.
                            It adheres to the WAI-ARIA design pattern.Yes. It
                            adheres to the WAI-ARIA design pattern.Yes. It
                            adheres to the WAI-ARIA design pattern.Yes. It
                            adheres to the WAI-ARIA design pattern.Yes. It
                            adheres to the WAI-ARIA design pattern.Yes. It
                            adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    {/* BOTTOM */}
                    <div className="absolute bottom-0 h-[10rem] w-full flex flex-col gap-6 justify-center items-center bg-white border-t border-black px-4">
                      <form
                        action=""
                        className="flex justify-between w-full gap-2 border-b border-gray-300"
                      >
                        <div className="w-full">
                          <input
                            type="text"
                            placeholder="Remise..."
                            className="w-full placeholder:text-gray-400 py-2 px-6 outline-none"
                          />
                        </div>
                        <button className="">Appliquer</button>
                      </form>
                      <div className="w-full">
                        <Button
                          color="black"
                          title={`Procéder au paiement  $71.95`}
                        />
                      </div>
                      <small className="text-gray-400">
                        Dépenser €178.05 plus pour bénéficier de la livraison
                        gratuite
                      </small>
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
