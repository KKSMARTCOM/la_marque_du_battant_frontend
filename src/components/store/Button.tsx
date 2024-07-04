export default function Button({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  return color === "black" ? (
    <button
      className={`relative inline-flex items-center w-full justify-center px-8 py-2 overflow-hidden border rounded-full group bg-black border-black`}
    >
      <span
        className={`absolute inset-0 w-full h-full px-8 py-2  transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out bg-white`}
      ></span>
      <span
        className={`relative  transition-colors duration-300 ease-in-out text-white group-hover:text-black`}
      >
        {title}
      </span>
    </button>
  ) : color === "white" ? (
    <button
      className={`relative w-full inline-flex items-center justify-center px-8 py-2 overflow-hidden border rounded-full group bg-white border-white`}
    >
      <span
        className={`absolute inset-0 w-full h-full px-8 py-2  transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out bg-black`}
      ></span>
      <span
        className={`relative  transition-colors duration-300 ease-in-out text-black group-hover:text-white`}
      >
        {title}
      </span>
    </button>
  ) : (
    <button
      className={`relative w-full inline-flex items-center justify-center px-8 py-2 overflow-hidden border rounded-full group bg-transparent border-white`}
    >
      <span
        className={`absolute inset-0 w-full h-full px-8 py-2  transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-out bg-white`}
      ></span>
      <span
        className={`relative  transition-colors duration-300 ease-in-out text-white group-hover:text-black`}
      >
        {title}
      </span>
    </button>
  );
}
