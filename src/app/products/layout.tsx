import Link from "next/link";
import "../globals.css";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <nav className="mt-14">
        <ul className="flex gap-4 px-4 border-b border-gray-200">
          <Link href="/products" className="px-2 border-b-2 border-black py-4">
            <li>Tous</li>
          </Link>{" "}
          <Link href="/products" className="px-2 py-4">
            <li>T-shirts</li>
          </Link>
          <Link href="/products" className="px-2 py-4">
            <li>Pull</li>
          </Link>
          <Link href="/products" className="px-2 py-4">
            <li>Culottes</li>
          </Link>
        </ul>
      </nav>
      {children}
    </section>
  );
}
