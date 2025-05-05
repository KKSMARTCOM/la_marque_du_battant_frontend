"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchClient } from "../../../../../utils/fetchClient";
import toast from "react-hot-toast";

/* export function generateStaticParams() {
  return eventsData.map((item) => ({
    eventId: item.id,
  }));
} */

export default function EventDetails() {
  const [event, setEvent] = useState<EventType>();
  const params = useParams();

  const fetchEvent = async () => {
    try {
      const res = await fetchClient("/events");
      if (res) {
        setEvent(res.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer.");
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <div className="px-10 py-5">
      <p className="text-heading2-bold">Evenements</p>
    </div>
  );
}
