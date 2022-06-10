import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Apropos from './pages/APropos';
import Home from './pages/Home';
import './styles/Nomavoir.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Route path="Home" index element={<Home />} />
          <Route path="Apropos" element={<Apropos />} />
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
