// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from "react-router-dom"; // ← TU AVAIS COMMENTÉ ÇA

import MainLayout from './Layouts/MainLayout';

import Service from './Components/Home';



import './App.css'


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
        {/* <Route
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
        /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
