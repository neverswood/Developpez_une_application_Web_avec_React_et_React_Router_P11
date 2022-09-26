import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Error } from './components/Error';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './pages/About/About.jsx';
import { Home } from './pages/Home/Home.jsx';
import { LodgingSheet } from './pages/LodgingSheet/LodgingSheet.jsx';
import './styles/Index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="lodging-sheet/:id" element={<LodgingSheet />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
