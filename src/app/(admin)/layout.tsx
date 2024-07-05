import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ToasterProvider } from "@/lib/ToasterProvider";
import LeftSideBar from "@/components/admin/layout/LeftSideBar";
import TopBar from "@/components/admin/layout/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LBM - Admin Dashboard",
  description: "Admin dashboard to manage LBM data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <div className="flex max-lg:flex-col bg-gray-50 text-grey-1">
          <LeftSideBar />
          <TopBar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
