import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useKKiaPay } from "kkiapay-react";
import { getUserData } from "@/lib/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";

export default function CartCheckout() {
  const { getTotal } = useCart();
  const { openKkiapayWidget } = useKKiaPay();
  const userData = getUserData();
  const router = useRouter();
  const total = getTotal();

  const submitPayment = () => {
    if (!userData) {
      toast.error(
        "Vous devez d'abord vous connectez avant de procéder à un paiement !"
      );
      router.replace("/auth/login");
    } else
      openKkiapayWidget({
        amount: 4000,
        api_key: "xxxxxxxxxxxxxxxxxx",
        sandbox: true,
        email: "randomgail@gmail.com",
        phone: "97000000",
      });
  };
  return (
    <Fragment>
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
      <div className="w-full my-4">
        <form action="">
          <div className="py-4 flex flex-col space-y-4 border-b border-gray-300">
            <Input
              type="text"
              placeholder="Adresse de livraison"
              className="bg-slate-100 w-full py-2 px-6 rounded-full outline-none focus:border-none text-black placeholder:text-sm"
            />
            <Input
              type="text"
              placeholder="Numéro de téléphone"
              className="bg-slate-100 w-full py-2 px-6 rounded-full outline-none focus:border-none text-black placeholder:text-sm"
            />
          </div>
          <Button
            onClick={() => submitPayment()}
            className="bg-black text-nowrap rounded-full px-1 py-2 mt-4 text-white w-full"
          >
            Procéder au paiement {total} F cfa
          </Button>
        </form>
      </div>
      {/* <small className="text-gray-400 text-center">
        Dépenser €178.05 plus pour bénéficier de la livraison gratuite
      </small> */}
    </Fragment>
  );
}
