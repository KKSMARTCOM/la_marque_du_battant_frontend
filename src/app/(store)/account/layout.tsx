import "../../globals.css";
import LeftSideBar from "@/components/store/layouts/LeftSideBar";
import TopBar from "@/components/store/layouts/TopBar";
import { AuthProvider } from "@/context/AuthContext";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="flex max-md:flex-col mt-14">
        <AuthProvider>
          <LeftSideBar />
          <TopBar />
          <div className="flex-1 h-screen max-md:hidden overflow-x-hidden custom-scrollbar">
            {children}
          </div>
        </AuthProvider>
      </div>
    </section>
  );
}
