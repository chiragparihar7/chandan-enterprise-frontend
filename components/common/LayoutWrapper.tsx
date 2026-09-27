"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FloatingContactButtons from "@/components/common/FloatingContactButtons";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isLandingPage =
    pathname.startsWith("/repair-maintenance") ||
    pathname.startsWith("/false-ceiling-services") ||
    pathname.startsWith("/waterproofing-services");

  return (
    <>
      {!isLandingPage && <Header />}

      <main className="flex-1">
        {children}
      </main>

      {!isLandingPage && <Footer />}

      <FloatingContactButtons />
    </>
  );
}