import Link from "next/link";
import "../globals.css";
import LeftSideBar from "@/components/store/layouts/LeftSideBar";
import TopBar from "@/components/store/layouts/TopBar";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="flex max-md:flex-col mt-14">
        <LeftSideBar />
        <TopBar />
        <div className="flex-1 h-screen max-md:hidden overflow-x-hidden custom-scrollbar">
          {children}
        </div>
      </div>
    </section>
  );
}
