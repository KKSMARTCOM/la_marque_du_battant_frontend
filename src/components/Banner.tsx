import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="h-screen bg-slate-500">
      <Image
        src="/banner.jpg"
        width={800}
        height={800}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 flex flex-col items-center w-full pb-10 text-white uppercase">
        <p>Jusqu'à 50% de réduction</p>
        <h1 className="font-extrabold text-lg">Shine in black</h1>
        <div className="flex gap-6 mt-4">
          <Link href="/">
            <Button title="Hommes" color="white" />
          </Link>
          <Link href="/">
            <Button title="Femmes" color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
