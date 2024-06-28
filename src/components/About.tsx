import Image from "next/image";

export default function About() {
  return (
    <div className="px-6 gap-5 h-[32rem] w-full md:flex">
      <div className="w-full flex justify-center md:w-1/2">
        <div className="h-[80%] w-[80%] overflow-hidden">
          <Image
            src="/citation.jpg"
            width={800}
            height={800}
            alt=""
            className="w-full h-full object-cover transition duration-700 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
      <div className="pt-10 text-justify md:w-1/2 md:pt-0 flex flex-col gap-6">
        <h1 className="font-bold text-xl">A propos</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
          numquam obcaecati ratione asperiores non voluptatem debitis,
          reprehenderit accusantium tempora, nobis commodi ullam ad maxime
          mollitia alias praesentium enim sit hic. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Placeat, numquam obcaecati ratione
          asperiores non voluptatem debitis, reprehenderit accusantium tempora,
          nobis commodi ullam ad maxime mollitia alias praesentium enim sit hic.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
          numquam obcaecati ratione asperiores non voluptatem debitis,
          reprehenderit accusantium tempora, nobis commodi ullam ad maxime
          mollitia alias praesentium enim sit hic.Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Placeat, numquam obcaecati ratione
          asperiores non voluptatem debitis, reprehenderit accusantium tempora,
          nobis commodi ullam ad maxime mollitia alias praesentium enim sit hic.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
          numquam obcaecati ratione asperiores non voluptatem debitis,
          reprehenderit accusantium tempora, nobis commodi ullam ad maxime
          mollitia alias praesentium enim sit hic.Lorem ipsum dolor sit, amet
          consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}
