import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import { HousingSheet } from './pages/HousingSheet';
import './styles/Nomavoir.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Route path="home" index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="housingSheet/:id" element={<HousingSheet />} />
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
