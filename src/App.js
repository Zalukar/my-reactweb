import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

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
  return (
    <BrowserRouter>
      <div id="menu">☰</div>
      <div id="navContent">
        <ul>
          <li><Link id="actualPag" to="/">Curriculum</Link></li> {/* Cambiado a / para que sea la página de inicio */}
          <li><Link to="/certificados">Certificados</Link></li>
          <li><Link to="/mybriefcase">Contacto</Link></li> {/* Cambiado a /mybriefcase */}
          <li><Link to="/portafolio">Portafolio</Link></li> {/* Cambiado a /portafolio */}
        </ul>
        </div>
        
        {/* Área de contenido donde se renderizan las páginas */}
          <Routes>
            <Route path="/" element={<Index/>} /> {/* Página de inicio */}
            <Route path="/certificados" element={<Cer />} /> {/* Ruta para certificados */}
            <Route path="/mybriefcase" element={<Contact />} /> {/* Ejemplo de página de contacto */}
            <Route path="/portafolio" element={<Briefcase />} /> {/* Ejemplo de página de portafolio */}
          </Routes>
    </BrowserRouter>
  );
}

export default App;
