import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';

import Service from './Components/Service';
import Donate from './Components/Donate';

import './assets/styles/header.css';
import'./assets/styles/service.css';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Donate />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
