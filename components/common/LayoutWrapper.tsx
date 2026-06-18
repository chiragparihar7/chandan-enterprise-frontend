"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isLandingPage =
    pathname.startsWith("/repair-maintenance");

  return (
    <>
      {!isLandingPage && <Header />}

      <main className="flex-1">{children}</main>

      {!isLandingPage && <Footer />}
    </>
  );
}