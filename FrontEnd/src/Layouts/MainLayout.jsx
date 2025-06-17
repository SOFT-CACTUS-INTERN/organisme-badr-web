// src/layouts/MainLayout.jsx
import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
<<<<<<< HEAD
import Service from '../Components/Service';
import Donate from '../Components/Donate';
=======
import Service from '../Components/Home';
>>>>>>> bbede7515f320906b2e7d1842f28a0d06ceb2d0a

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen gap-80">
      <Header />
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
}
