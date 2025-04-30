import { Fragment, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useKKiaPay } from "kkiapay-react";
import { getUserData } from "@/lib/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { fetchClient } from "../../../../utils/fetchClient";
import { Loader } from "lucide-react";

export default function CartCheckout() {
  const { cart, getTotal, clearCart } = useCart();
  const { openKkiapayWidget } = useKKiaPay();
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const total = getTotal().toFixed(2);

  useEffect(() => {
    const userData = getUserData();
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const submitPayment = async (event: any) => {
    event.preventDefault();
    if (!user) {
      toast.error(
        "Vous devez d'abord vous connectez avant de procéder à un paiement !"
      );
      router.replace("/auth/login");
    } else if (!user.address || !user.phone) {
      toast.error(
        "Vous devez d'abord ajouter votre adresse de livraison et votre numéro de téléphone avant de procéder à un paiement !"
      );
      router.replace("/account/profil");
    } else {
      /* openKkiapayWidget({
        amount: 4000,
        api_key: "xxxxxxxxxxxxxxxxxx",
        sandbox: true,
        email: "randomgail@gmail.com",
        phone: "97000000",
      }); */
      setLoading(true);
      const body = {
        cart: cart,
        total: total,
        transaction_id: 123456,
        transaction_status: "approved",
      };
      try {
        const res = await fetchClient("/cart/save", {
          method: "POST",
          body: body,
        });

        if (res && res.success == true) {
          toast.success(res.message);
          router.replace("/account/orders");
          clearCart();
        }
      } catch (error) {
        toast.error("Erreur interne du serveur !");
        console.error("Erreur :", error);
      } finally {
        setLoading(false);
      }

      console.log(user);
    }
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
        {/* <form action="">
          <div className="py-4 flex flex-col space-y-4 border-b border-gray-300">
            <Input
              value={user.address}
              type="text"
              placeholder="Adresse de livraison"
              className="bg-slate-100 w-full py-2 px-6 rounded-full outline-none focus:border-none text-black placeholder:text-sm"
            />
            <Input
              value={user.phone}
              type="text"
              placeholder="Numéro de téléphone"
              className="bg-slate-100 w-full py-2 px-6 rounded-full outline-none focus:border-none text-black placeholder:text-sm"
            />
          </div>
        </form> */}
        <Button
          onClick={(event) => submitPayment(event)}
          className="bg-black text-nowrap rounded-full px-1 py-2 mt-4 text-white w-full"
        >
          {loading ? <Loader /> : `Procéder au paiement ${total} F cfa`}
        </Button>
      </div>
      {/* <small className="text-gray-400 text-center">
        Dépenser €178.05 plus pour bénéficier de la livraison gratuite
      </small> */}
    </Fragment>
  );
}
