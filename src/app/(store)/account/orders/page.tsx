import Button from "@/components/store/Button";
import { FileClock } from "lucide-react";

export default function Orders() {
  return (
    <div className="p-10">
      {" "}
      <h1 className="font-semibold text-xl py-4">Historique des commandes</h1>
      <div className="h-80 flex flex-col items-center justify-center gap-4">
        <FileClock className="w-20 h-20" />
        <p>Vous n&apos;avez pas encore passé de commande</p>
        <div>
          <Button title="Acheter maintenant" color="black" />
        </div>
      </div>
    </div>
  );
}
