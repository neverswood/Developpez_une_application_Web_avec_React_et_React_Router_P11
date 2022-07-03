import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Error } from './components/Error';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './pages/About/About.jsx';
import { Home } from './pages/Home/Home.jsx';
import { HousingSheet } from './pages/HousingSheet/HousingSheet.jsx';
import './styles/Index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Route path="home" index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="housing-sheet/:id" element={<HousingSheet />} />
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
