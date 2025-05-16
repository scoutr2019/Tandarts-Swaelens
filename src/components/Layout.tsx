
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-dental-offwhite dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Header />
      <main className="flex-1 pt-24 md:pt-32 animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
