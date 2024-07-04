import Link from "next/link";

export default function LeftSideBar() {
  return (
    <div className="h-screen max-w-[20rem] left-0 top-0 bottom-0 sticky flex flex-col p-12 border-r border-gray-200 max-md:hidden">
      <div className="flex flex-col gap-16">
        <div className="text-center ">
          <h1 className="text-2xl font-bold mb-2">Hello, Client</h1>
          <p className="text-[14px]">
            Bienvenue ! Vous pouvez gérer les paramètres de votre compte ici.
          </p>
        </div>
        <ul className="flex flex-col gap-6">
          <Link href="/account/favoris" className="font-bold">
            <li>Favoris</li>
          </Link>
          <Link href="/account/orders">
            <li>Historique des commandes</li>
          </Link>
          <Link href="/account/events">
            <li>Mes evènements</li>
          </Link>
          <Link href="/account/address">
            <li>Adresses</li>
          </Link>
        </ul>
        <div className="flex justify-center">
          <button className="px-8 py-2 text-black border transition-transform duration-700 ease-in-out border-gray-200 hover:border-black rounded-full">
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
}
