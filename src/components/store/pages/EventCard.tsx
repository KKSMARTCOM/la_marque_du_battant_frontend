import Image from "next/image";
import Link from "next/link";

export default function EventCard({ event }: any) {
  return (
    <div className="relative">
      <Link href={`/events-page/${event.id}`} className="block w-full h-[24rem] overflow-hidden relative group">
        <Image
          src={event.image ? event.image : "defaultImage.png"}
          width={800}
          height={800}
          alt="Event Image"
          className="w-full h-full object-cover transition duration-700 ease-in-out transform group-hover:scale-105"
        />
      </Link>
      <div className="flex pt-4 justify-between items-center">
        <div className="leading-6 ">
          <small className="text-gray-400">{event.name}</small>
          <h1 className="font-bold text-xl">{event.country}</h1>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <Link
            href="mailto:hello@kksmart.com"
            className="px-8 text-nowrap py-2 border border-gray-200 text-black rounded-full hover:border hover:bg-transparent hover:border-black bg-transparent"
            onClick={e => e.stopPropagation()}
          >
            Je participe
          </Link>
        </div>
      </div>
    </div>
  );
}
