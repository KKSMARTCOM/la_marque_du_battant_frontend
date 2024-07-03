import CartAccordion from "@/components/cart/CartAccordion";
import CartCard from "@/components/cart/CartCard";
import CartCheckout from "@/components/cart/CartCheckout";

export default function CartPage() {
  return (
    <div className="my-20">
      <h1 className="text-xl font-bold py-10 px-6">Votre panier</h1>
      <div className="flex gap-2 pl-6">
        <div className="flex-1 grid grid-cols-2">
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
        <div className="w-[26rem] px-4">
          <div>
            <CartCheckout />
          </div>
          <CartAccordion />
        </div>
      </div>
      <div className="py-10 px-6">
        <h1>Ajoutez des accessoires</h1>
      </div>
    </div>
  );
}
