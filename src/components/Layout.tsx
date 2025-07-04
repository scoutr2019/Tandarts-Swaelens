
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1 pt-16 sm:pt-20 md:pt-24 lg:pt-32 animate-fade-in px-2 sm:px-4">
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;
