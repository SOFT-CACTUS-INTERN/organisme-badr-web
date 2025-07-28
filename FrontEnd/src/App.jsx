// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from "react-router-dom"; // ← TU AVAIS COMMENTÉ ÇA

import MainLayout from './Layouts/MainLayout';

import Home from './Components/Home';
import './App.css'
import Our from './Components/Our';
// import Activites from './Components/Activities';
import Donate from './Components/Donate';
import Organisme from './Components/Organisme';
import Who from './Components/Who';
import Presedent from "./Components/Presedent";
import Services from "./Components/Services";
import About from "./Components/About";
import Support from './Components/Support'
import Nous from './Components/Nous';
import Contact from './Components/Contact'
import Donation from './Components/Donation'





function App() {
  return (
    <HashRouter  >
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/About"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
          <Route
          path="/Donation"
          element={
            <MainLayout>
              <Donation />
            </MainLayout>
          }
        />
        <Route
          path="/Support"
          element={
             <MainLayout>
              <Support />
            </MainLayout>
          }
        />
       
       <Route
  path="/Contact"
  element={
    <MainLayout>
      <Contact />
    </MainLayout>
  }
/>
  <Route
          path="/Achievements"
          element={
             <MainLayout>
              <Support />
            </MainLayout>
          }
        />

      
      </Routes>
    </HashRouter>
  );
}

export default App;
