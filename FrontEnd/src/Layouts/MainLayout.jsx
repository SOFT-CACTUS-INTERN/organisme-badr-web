// src/layouts/MainLayout.jsx
import React from 'react';
import Footer from '../Components/Footer';
import Footer from '../Components/Header';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
}
