import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';

import Service from './Components/Service';
// import './assets/styles/header.css';
// import'./assets/styles/service.css';
import './App.css'
import Our from './Components/Our';
import Activites from './Components/Activites';
import './assets/styles/our.css';


function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
