import * as React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import { BsHeart } from "react-icons/bs";
import ProductDetailAccordion from "@/components/products/ProductDetailAccordion";
import ProductDetailCarrousel from "@/components/products/ProductDetailCarrousel";
import { products } from "@/data";

export default function Page({ params }: { params: { productId: string } }) {
  const product = products.find((item) => {
    return parseInt(item.id) === parseInt(params.productId);
  });
  return (
    <React.Fragment>
      {/* TOP */}
      <div className="w-full flex gap-2 overflow-x-hidden">
        <div className="h-[10rem] custom-scroll">
          <div className="flex-1 bg-gray-100">
            <Image
              alt=""
              src={product!.image}
              height={1000}
              width={800}
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-[35rem] px-4 pt-10">
          <h1 className="font-bold leading-10">{product!.name}</h1>
          <small>${product!.price}</small>
          <div className="py-8 border-b border-gray-200">
            <p>Taille</p>
            <ul className="flex gap-2 pt-2">
              <li className="w-14 h-14 flex items-center justify-center cursor-pointer rounded-full border border-gray-200 hover:border-black">
                XS
              </li>
              <li className="w-14 h-14 flex items-center justify-center cursor-pointer rounded-full border border-gray-200 hover:border-black">
                S
              </li>
              <li className="w-14 h-14 flex items-center justify-center cursor-pointer rounded-full border border-gray-200 hover:border-black">
                M
              </li>
              <li className="w-14 h-14 flex items-center justify-center cursor-pointer rounded-full border border-gray-200 hover:border-black">
                L
              </li>
              <li className="w-14 h-14 flex items-center justify-center cursor-pointer rounded-full border border-gray-200 hover:border-black">
                XL
              </li>
              <li className="w-14 h-14 flex items-center justify-center cursor-pointer rounded-full border border-gray-200 hover:border-black">
                XXL
              </li>
            </ul>
          </div>
          <div className="py-8 border-b border-gray-200">
            <Button title="Ajouter au panier" color="black" />
            <div className="flex gap-4 mt-2">
              <div className="px-6 py-2 border border-gray-200 rounded-full hover:border-black">
                <BsHeart className="w-6 h-6 cursor-pointer" />
              </div>
              <div className="flex-1 flex cursor-pointer justify-center py-2 border border-gray-200 rounded-full hover:border-black">
                Tableau des tailles
              </div>
            </div>
            <div className="pt-6">
              <small className="text-justify">
                Confectionnée dans un tissu denim délavé et ornée de broderies
                du logo sur tout le pourtour, la chemise Rahul est dotée
                d&apos;une fermeture à boutons-pression et d&apos;un col de
                chemise classique. Le devant comporte une poche de poitrine avec
                Daily Paper l&apos;étiquette.
              </small>
            </div>
          </div>
          <div className="px-12 py-8">
            <ProductDetailCarrousel />
          </div>
          <ProductDetailAccordion />
        </div>
      </div>
      {/* BOTTOM */}
      <div className="py-20 px-4">
        <h1 className="font-bold">Combinez avec</h1>
      </div>
      <div className="py-20 px-4">
        <h1 className="font-bold">Produits similaires</h1>
      </div>
    </React.Fragment>
  );
}
