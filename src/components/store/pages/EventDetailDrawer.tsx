import React from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface EventDetailDrawerProps {
  open: boolean;
  onClose: () => void;
  event: {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    country: string;
    address: string;
    startDate: Date | string;
    endDate: Date | string;
  } | null;
}

function formatDate(date: Date | string) {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("fr-FR", { year: "numeric", month: "2-digit", day: "2-digit" });
}

const HEADER_HEIGHT = 80; // px, à ajuster si besoin

const EventDetailDrawer: React.FC<EventDetailDrawerProps> = ({ open, onClose, event }) => {
  if (!event) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={`!fixed !right-0 !top-[${HEADER_HEIGHT}px] !h-[calc(100vh-${HEADER_HEIGHT}px)] !w-full sm:!w-[420px] sm:!max-w-[420px] !rounded-none !p-0 !border-none !shadow-2xl bg-transparent flex flex-col z-[100] transition-all duration-300`}
        style={{ borderRadius: 0, top: HEADER_HEIGHT, height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
      >
        {/* Bouton de fermeture en haut à droite */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition"
          aria-label="Fermer"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
        {/* Image de l'événement en haut, arrondie uniquement en haut */}
        <div className="relative w-full h-[160px] sm:h-[180px] overflow-hidden rounded-t-2xl flex-shrink-0">
          <Image
            src={event.image || "/defaultImage.png"}
            alt={event.name}
            fill
            className="object-cover w-full h-full rounded-t-2xl"
            priority
          />
        </div>
        {/* Bloc contenu blanc, commence sous l'image */}
        <div className="flex-1 flex flex-col px-8 py-8 bg-white overflow-y-auto rounded-none">
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2 leading-tight">
            {event.name}
          </h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            {event.description}
          </p>
          <div className="mb-4">
            <div className="font-bold text-lg mb-1">Lieu :</div>
            <div className="text-gray-800 text-base">{event.address}</div>
          </div>
          <div className="mb-8">
            <div className="font-bold text-lg mb-1">Date :</div>
            <div className="text-gray-800 text-base">{formatDate(event.startDate)}</div>
          </div>
          <div className="mt-auto pb-2">
            <Button
              variant="outline"
              className="w-full border-black text-black rounded-full py-3 text-lg font-semibold shadow-sm hover:bg-gray-100 transition"
              style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)" }}
            >
              Je participe
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailDrawer; 