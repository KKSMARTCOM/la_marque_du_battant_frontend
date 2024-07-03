import { Fragment } from "react";
import Button from "../Button";

export default function CartCheckout() {
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
      <div className="w-full mt-2">
        <Button color="black" title={`Procéder au paiement  $71.95`} />
      </div>
      <small className="text-gray-400 text-center">
        Dépenser €178.05 plus pour bénéficier de la livraison gratuite
      </small>
    </Fragment>
  );
}
