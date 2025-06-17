// src/layouts/MainLayout.jsx
import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Service from '../Components/Home';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen gap-80">
      <Header />
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
}
