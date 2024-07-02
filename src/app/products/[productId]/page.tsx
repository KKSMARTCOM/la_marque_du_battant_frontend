"use client";
import * as React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Page({ params }: { params: { productId: string } }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <React.Fragment>
      {/* TOP */}
      <div className="w-full flex gap-2 overflow-x-hidden">
        <div className="h-[10rem] custom-scroll">
          <div className="flex-1 bg-gray-100">
            <Image
              alt=""
              src="/pull.png"
              height={1000}
              width={800}
              className="objetc-cover"
            />
          </div>
          <div className="flex-1 bg-gray-100">
            <Image
              alt=""
              src="/pull.png"
              height={1000}
              width={800}
              className="objetc-cover"
            />
          </div>
        </div>
        <div className="w-[35rem] px-4 pt-10">
          <h1 className="font-bold leading-10">
            Mid Blue Rahul Monogram Denim Shirt
          </h1>
          <small>$159.95</small>
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
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="px-6 flex justify-center items-center">
                    <small className="text-center">
                      Livraison gratuite sur toutes les commandes sur €250.00 !{" "}
                    </small>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="px-6 flex justify-center items-center">
                    <small className="text-center">
                      Les délais de livraison sont actuellement plus long en
                      raison du grand nombre de commandes.{" "}
                    </small>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="px-6 flex justify-center items-center">
                    <small className="text-center">
                      Paiement sécurisé avec Mobile Money, Moov Money, Celtiis
                      Cash, PayPal, Mastercard, Visa.{" "}
                    </small>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline">
                Composition
              </AccordionTrigger>
              <AccordionContent>Coton 100</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:no-underline">
                Expédition
              </AccordionTrigger>
              <AccordionContent className="leading-7">
                <p>
                  Les délais de livraison sont actuellement plus longs en raison
                  du grand nombre de commandes.
                </p>
                <p>
                  Dès que votre commande est expédiée, vous recevez un e-mail de
                  confirmation d&apos;expédition avec un numéro de suivi.
                </p>
                <ul>
                  <li className="flex gap-4">
                    <h1 className="font-bold">Pays-Bas</h1>
                    <p>3 - 7 jours ouvrables Gratuit</p>
                  </li>
                  <li className="flex gap-4">
                    <h1 className="font-bold">Europe Zone 1</h1>
                    <p>5 - 9 jours ouvrables Gratuit</p>
                  </li>
                  <li className="flex gap-4">
                    <h1 className="font-bold">Europe Zone 2</h1>
                    <p>
                      7 - 10 jours ouvrables € 10,00 (Gratuit à partir de €99)
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <h1 className="font-bold">Hors Europe</h1>
                    <p>
                      9 - 12 jours ouvrables € 10,00 (Gratuit à partir de €250)
                    </p>
                  </li>
                </ul>
                <p>
                  *La zone 1 de l&apos;Europe comprend la Belgique, la France,
                  l&apos;Allemagne et le Luxembourg. Pour plus
                  d&apo;sinformations, veuillez consulter notre page{" "}
                  <span>
                    <Link className="underline" href="/">
                      Expédition
                    </Link>
                  </span>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:no-underline">
                Retour
              </AccordionTrigger>
              <AccordionContent className="leading-7">
                <p>
                  Notre politique de retour est très simple - nous acceptons les
                  retours pour n&apos;importe quelle raison, et émettons un
                  remboursement ou un crédit magasin. Tout ce qui a été acheté
                  en ligne peut être retourné à notre entrepôt. <br /> Pour
                  commencer le processus de retour, veuillez vous rendre sur
                  notre portail de retour. Vous aurez besoin de votre numéro de
                  commande ainsi que de l&apos;e-mail que vous avez utilisé lors
                  de votre achat. Veuillez remplir le formulaire et suivre les
                  instructions pour effectuer votre retour. Par le biais de
                  notre portail de retour, vous pouvez acheter une étiquette de
                  retour à un prix réduit. <br />
                  Pour plus d&apos;informations, veuillez consulter notre page
                  sur les{" "}
                  <span>
                    <Link href="/">retours.</Link>
                  </span>
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    Tous les produits doivent être retournés dans les 14 jours
                    suivant leur réception.
                  </li>
                  <li>
                    Tous les produits doivent être non portés et non lavés.
                  </li>
                  <li>
                    Tous les produits doivent avoir toutes les Daily Paper
                    étiquettes d&apos;origine encore attachées.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="mt-2 flex gap-2">
        <div className=" bg-gray-100">
          <Image
            alt=""
            src="/pull.png"
            height={1000}
            width={800}
            className="objetc-cover"
          />
        </div>
        <div className="bg-gray-100">
          <Image
            alt=""
            src="/pull.png"
            height={1000}
            width={800}
            className="objetc-cover"
          />
        </div>
      </div>
      <div className="py-20 px-4">
        <h1 className="font-bold">Combinez avec</h1>
      </div>
      <div className="py-20 px-4">
        <h1 className="font-bold">Produits similaires</h1>
      </div>
    </React.Fragment>
  );
}
