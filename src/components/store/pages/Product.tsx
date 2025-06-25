"use client";
import Sliders from "@/components/store/products/Sliders";
import { Fragment, useState } from "react";
import CartModal from "../cart/CartModal";

export default function ProductStoreLists() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<ProductType | any>({});

  return (
    <Fragment>
      <section className="px-4 sm:px-6 pt-8 sm:pt-10 pb-4 sm:pb-6 overflow-x-hidden">
        <div className="w-full">
          <header className="mb-4">
            <p className="text-gray-500 text-sm mb-2">Achetez les catégories</p>
            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center mb-4">
              <h2 className="font-bold text-4xl sm:text-5xl text-black mb-2">Articles en vedette</h2>
              <div className="h-2 w-2 bg-gray-400 rounded-full mt-2 sm:mt-0 sm:ml-4"></div>
            </div>
          </header>
          
          <div className="w-full">
            <Sliders setOpen={setOpen} setProduct={setProduct} />
          </div>
        </div>
      </section>
      
      <CartModal open={open} setOpen={setOpen} product={product} />
    </Fragment>
  );
}
