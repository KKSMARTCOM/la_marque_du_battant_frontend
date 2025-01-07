import Button from "@/components/store/CustomBlackButton";
import EventCard from "@/components/store/pages/EventCard";

export default function Events() {
  return (
    <div className="px-6 py-10">
      <small className="text-gray-400">Participez</small>
      <h1 className="font-bold text-xl py-[20px]">A nos évènements</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <div className="w-60 my-16">
        <Button color="black" title="Nos évènements" />
      </div>
    </div>
  );
}
