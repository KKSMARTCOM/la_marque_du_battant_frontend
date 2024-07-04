import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="h-screen flex flex-col md:hidden">
      <div className="flex flex-col">
        <div className="flex flex-col items-center mt-6">
          <div className="w-20 h-20 overflow-hidden">
            <Image
              src="/battant.png"
              alt=""
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold">Hello, Client</h1>
          <p>
            Bienvenue ! Vous pouvez gérer les paramètres de votre compte ici.
          </p>
        </div>
        <ul className="mt-6">
          <Link href="/account/favoris">
            <li className="flex justify-between px-4 py-6 border-t border-b border-gray-200">
              <h1 className="text-2xl font-semibold">Favoris</h1>
              <ChevronRight />
            </li>
          </Link>
          <Link href="/account/orders">
            <li className="flex justify-between px-4 py-6 border-t border-b border-gray-200">
              <h1 className="text-2xl font-semibold">
                Historique des commandes
              </h1>
              <ChevronRight />
            </li>
          </Link>

          <Link href="">
            <li className="flex justify-between px-4 py-6 border-t border-b border-gray-200">
              <h1 className="text-2xl font-semibold">Mes evènements</h1>
              <ChevronRight />
            </li>
          </Link>

          <Link href="">
            <li className="flex justify-between px-4 py-6 border-t border-b border-gray-200">
              <h1 className="text-2xl font-semibold">Adresses</h1>
              <ChevronRight />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
