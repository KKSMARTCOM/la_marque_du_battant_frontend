import React from "react";
import { eventsData } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getImagePath } from "@/utils/imagePath";

// Définition des props attendues par la page dynamique (Next.js transmet params)
interface EventDetailsPageProps {
  params: { eventId: string };
}

// Fonction utilitaire pour formater la date en français
function formatDate(date: Date | string) {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "2-digit" });
}

// Composant principal de la page de détails d'un événement
export default function EventDetailsPage({ params }: EventDetailsPageProps) {
  // On récupère l'événement correspondant à l'id présent dans l'URL
  const event = eventsData.find(e => e.id === params.eventId);
  // Si aucun événement trouvé, on affiche une page 404
  if (!event) return notFound();

  return (
    // Structure principale de la page, avec le style global et le background
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto flex-1">
            {/* Image de couverture de l'événement */}
            <div className="w-full mt-8 sm:mt-12 md:mt-16">
              <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#f8f9fc] rounded-xl"
                style={{ backgroundImage: `url(${getImagePath(event.image)})` }}
              ></div>
            </div>
            {/* Fil d'Ariane (breadcrumb) */}
            <div className="flex flex-wrap gap-2 p-2 sm:p-4">
              {/* Lien vers la liste des événements */}
              <Link className="text-[#000000] text-base font-medium leading-normal" href="/events-page">Événements</Link>
              <span className="text-[#000000] text-base font-medium leading-normal">/</span>
              {/* Nom de l'événement courant */}
              <span className="text-[#606061] text-base font-medium leading-normal">{event.name}</span>
            </div>
            {/* Titre et organisateur */}
            <div className="flex flex-wrap justify-between gap-3 p-2 sm:p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0d111b] tracking-light text-[32px] font-bold leading-tight">{event.name}</p>
                <p className="text-[#606061] text-sm font-normal leading-normal">Organisé par {event.organizer}</p>
              </div>
            </div>
            {/* Onglets (non dynamiques ici) 
            <div className="pb-3">
              <div className="flex border-b border-[#cfd6e7] px-2 sm:px-4 gap-4 sm:gap-8">
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#020817] text-[#0d111b] pb-[13px] pt-4" href="#">
                  <p className="text-[#0d111b] text-sm font-bold leading-normal tracking-[0.015em]">À propos</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4c629a] pb-[13px] pt-4" href="#">
                  <p className="text-[#4c629a] text-sm font-bold leading-normal tracking-[0.015em]">Participants</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4c629a] pb-[13px] pt-4" href="#">
                  <p className="text-[#4c629a] text-sm font-bold leading-normal tracking-[0.015em]">Commentaires</p>
                </a>
              </div>    
            </div>*/}
            {/* Section détails de l'événement */}
            <div>
            <h2 className="text-[#0d111b] text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">Détails de l&apos;événement</h2>
            <p className="text-[#0d111b] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4">
              {event.longDescription}
            </p>
            {/* Date et heure */}
            <h2 className="text-[#0d111b] text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">Date et heure</h2>
            <p className="text-[#0d111b] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4">{formatDate(event.startDate)} - {formatDate(event.endDate)}</p>
            {/* Lieu */}
            <h2 className="text-[#0d111b] text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">Lieu</h2>
            <p className="text-[#0d111b] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4">{event.address}</p>
            {/* Prix */}
            <h2 className="text-[#0d111b] text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-3 pt-5">Prix</h2>
            <p className="text-[#0d111b] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-2 sm:px-4">Billets à partir de {event.price} €</p>
            {/* Bouton d'action */}
            <div className="flex px-2 sm:px-4 py-3 justify-start">
              <a
                href={"#"}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex min-w-0 cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#000000] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]  transition-shadow duration-200 ease-in-out hover:scale-105 hover:shadow-lg hover:text-[#000000] hover:bg-[#ffffff] hover:border-2 hover:border-[#000000]"
              >
                <span className="truncate">Je participe</span>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return eventsData.map(event => ({ eventId: event.id }));
} 