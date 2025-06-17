// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from "react-router-dom"; // ← TU AVAIS COMMENTÉ ÇA

import MainLayout from './Layouts/MainLayout';

import Service from './Components/Home';
import './assets/styles/header.css';
import './assets/styles/service.css';
import './assets/styles/donate.css';
import './assets/styles/our.css';
import './App.css'
import Our from './Components/Our';
import Activites from './Components/Activites';
import './assets/styles/our.css';
import Donate from './Components/Donate';
import Organisme from './Components/Organisme';
import Home from './Components/Home';
import Who from './Components/Who';
import Presedent from "./Components/Presedent";




function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Service />
            </MainLayout>
          }
        />
        <Route
          path="/service"
          element={
            <MainLayout>
              <Service />
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
          path="/organisme-badr-web/Presedent"
          element={
            <Presedent />
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
