// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from "react-router-dom"; // ← TU AVAIS COMMENTÉ ÇA

import MainLayout from './Layouts/MainLayout';

import Home from './Components/Home';
import './App.css'
import Our from './Components/Our';
import Activites from './Components/Activites';
import Donate from './Components/Donate';
import Organisme from './Components/Organisme';
// import Home from './Components/Home';
import Who from './Components/Who';
import Presedent from "./Components/Presedent";
import Services from "./Components/Services";
import About from "./Components/About";
import Support from './Components/Support'




function App() {
  return (
    <HashRouter  >
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Support />
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />
        <Route
          path="/Our"
          element={
            <Our />
          }
        />
        <Route
          path="/Activites"
          element={
            <Activites />
          }
        />
        <Route
          path="/donate"
          element={
            <Donate />
          }
        />
        <Route
          path="/organisme"
          element={
            <Organisme />
          }
        />
        <Route
          path="/home"
          element={
            <Home />
          }
        />
        <Route
          path="/who"
          element={
            <Who />
          }
        />
         <Route
          path="/Presedent"
          element={
            <Presedent />
          }
        /> 
      </Routes>
    </HashRouter>
  );
}

export default App;
