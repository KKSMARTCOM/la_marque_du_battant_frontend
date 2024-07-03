"use client";
import { products } from "@/data";
import ProductCard from "@/components/products/ProductCard";
import { Fragment, useEffect, useState } from "react";
import ProductFilter from "@/components/products/ProductFilter";
import Link from "next/link";

export default function Products() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <Fragment>
      <div className="mt-10 px-6">
        <div className="flex gap-3 text-xl items-center">
          <h1 className="font-bold">Hommes Tous</h1>
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          <p className="text-gray-400">56 articles</p>
        </div>
      </div>
      <div className="w-full flex gap-2 px-6 py-4 overflow-x-hidden">
        <ProductFilter />
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-2 flex-wrap">
            {products.map((item: any, index: number) => {
              return (
                <Link href={`/products/${item.id}`} key={index}>
                  <ProductCard product={item} />
                </Link>
              );
            })}
          </div>

          <div className="h-80 flex justify-center items-center w-full">
            <p>Vous avez atteint la fin de cette sélection</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
