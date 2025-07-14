// src/layouts/MainLayout.jsx
import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function MainLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="flex-grow">
        {React.cloneElement(children, { isMobileMenuOpen })}
      </main>
      <Footer />
    </div>
  );
}
