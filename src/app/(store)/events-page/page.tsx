"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchClient } from "../../../../utils/fetchClient";
import toast from "react-hot-toast";
import EventCard from "@/components/store/pages/EventCard";

export default function EventsPage() {
  const [events, setEvent] = useState([]);

  const fetchEvent = async () => {
    try {
      const res = await fetchClient("/events");
      if (res && res.success === true) {
        setEvent(res.data);
        console.log(res.data);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des produits:", error);
      toast.error("Erreur interne du serveur.");
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <div className="mt-10 overflow-hidden">
      <div className="h-[400px] relative w-full">
        <Image
          src="eventdefault.jpg"
          width={800}
          height={800}
          alt="Event Image"
          className="w-full h-full object-cover"
        />
        <div className="h-full w-full bg-black opacity-40 absolute top-0 left-0 z-0"></div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-heading3-bold font-semibold text-center">
          Chaque année, nous organisons des évènements pour le rassemblement des
          battants{" "}
        </h1>
      </div>
      <div className="px-6 py-10 ">
        <h1 className="py-4 font-bold text-heading4-bold">Evenements</h1>
        {events && events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((item, index) => {
              return <EventCard key={index} event={item} />;
            })}

            {/* <EventCard />
                  <EventCard /> */}
          </div>
        ) : (
          <div>
            <h1>Pas d&apos;évenements pour le moment</h1>
          </div>
        )}
      </div>
    </div>
  );
}
