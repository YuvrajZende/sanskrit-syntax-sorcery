
import React from 'react';
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" />
      </head>
      <div className="min-h-screen bg-black text-white">
        {children}
      </div>
      <Toaster />
    </>
  );
};

export default Layout;
