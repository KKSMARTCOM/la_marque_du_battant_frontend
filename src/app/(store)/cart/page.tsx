"use client";

import CartAccordion from "@/components/store/cart/CartAccordion";
import CartCard from "@/components/store/cart/CartCard";
import CartCheckout from "@/components/store/cart/CartCheckout";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();
  return (
    <div className="my-20">
      <h1 className="text-xl font-bold py-10 px-6">Votre panier</h1>
      {cart.length === 0 ? (
        <p className="text-xl">Votre panier est vide</p>
      ) : (
        <div className=" block md:flex gap-2 px-6">
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
            {cart.map((item, index) => {
              return <CartCard key={index} cartItem={item} />;
            })}
            {/* <CartCard />
            <CartCard />
            <CartCard />
            <CartCard /> */}
          </div>
          <div className=" w-full md:w-[26rem] pt-10 md:pt-0 px-0 md:px-4">
            <div>
              <CartCheckout />
            </div>
            <CartAccordion />
          </div>
        </div>
      )}

      <div className="py-10 px-6">
        <h1 className="font-bold">Ajoutez des accessoires</h1>
      </div>
    </div>
  );
}
