"use client";
import Button from "@/components/Button";
import Input from "@/components/auth/Input";
import Link from "next/link";
import { Fragment } from "react";

export default function Form({ method }: { method: string }) {
  const name = method === "login" ? "Connexion" : "Créer un compte";
  const submit_title = method === "login" ? "Connexion" : "Créer";
  return (
    <form
      action=""
      className="flex flex-col gap-8 px-6 pb-16 items-center w-full"
    >
      <div className="text-center flex flex-col gap-3">
        <h1 className="text-xl font-bold">{name}</h1>
        {method === "login" ? (
          <p>
            Bienvenue <br />
            Connectez-vous ci-dessous pour accéder à votre compte
          </p>
        ) : (
          <p className="text-sm">
            Créer votre compte pour accéder à l'historique de vos commandes, à
            l'état de vos commandes, aux adresses enrégistrées et plus encore
            Connectez-vous ci-dessous pour accéder à votre compte
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4 w-full">
        {method === "register" && (
          <Fragment>
            <Input type="text" placeholder="Nom*" />
            <Input type="text" placeholder="Prénom*" />
          </Fragment>
        )}
        <Input type="text" placeholder="Email*" />
        <Input type="text" placeholder="Mot de passe*" />

        {method === "register" && (
          <Input type="text" placeholder="Confirmez mot de passe*" />
        )}
      </div>
      <div className="flex justify-start items-start w-full gap-4">
        <input type="checkbox" className="h-5 w-5 cursor-pointer" />
        {method === "login" ? (
          <p>Souvenez-vous de moi.</p>
        ) : (
          <p className="text-sm">
            Inscrivez-vous aux newsletters pour être informé des dernières
            collections et évènements.
          </p>
        )}
      </div>
      <Button title={submit_title} color="black" />

      {method === "login" ? (
        <Link href="/" className="underline text-slate-400 text-center">
          Mot de passe oublié ?
        </Link>
      ) : (
        <Fragment>
          <p className="text-sm">Vous avez déjà un compte ? Connectez-vous</p>
          <small className="text-[12px] text-slate-400 text-center">
            En créant un compte, vous acceptez notre{" "}
            <Link href="/" className="underline">
              politique de confidentialité
            </Link>{" "}
            et nos{" "}
            <Link href="/" className="underline">
              conditions d'utilisation
            </Link>
            .
          </small>
        </Fragment>
      )}
    </form>
  );
}
