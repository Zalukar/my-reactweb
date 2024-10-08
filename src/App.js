import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import './pages/components/CssFiles/briefcase.css';
import './pages/components/CssFiles/btnsRes.css';
import './pages/components/CssFiles/cer.css';
import './pages/components/CssFiles/cerRes.css';
import './pages/components/CssFiles/contact.css';
import './pages/components/CssFiles/index.css';
import './pages/components/CssFiles/indexRes.css';
import './pages/components/CssFiles/style.css';
import './pages/components/CssFiles/styleRes.css';

import Cer from './pages/Cer';
import Index from './pages/Index';
import Contact from './pages/Contact';
import Briefcase from './pages/BriefCase';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false); // Estado para manejar la apertura del menú

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setMenuOpen(false); // Cierra el menú en pantallas grandes
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <div id="menu" onClick={toggleMenu}>☰</div>
      <div id="navContent" style={{ display: isMenuOpen || window.innerWidth > 960 ? 'block' : 'none' }}>
        <ul>
          <li><Link id="actualPag" to="/">Curriculum</Link></li>
          <li><Link to="/certificados">Certificados</Link></li>
          <li><Link to="/mybriefcase">Contacto</Link></li>
          <li><Link to="/portafolio">Portafolio</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/certificados" element={<Cer />} />
        <Route path="/mybriefcase" element={<Contact />} />
        <Route path="/portafolio" element={<Briefcase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
