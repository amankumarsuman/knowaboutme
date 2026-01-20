import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '../src/components/ui/toaster';
// import { Toaster } from '../components/ui/toaster';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Services from '../src/pages/Services';
import Skills from '../src/pages/Skills';
import Projects from '../src/pages/Projects';
import Contact from '../src/pages/Contact';
import WhatsappFloatingButton from './components/WhatsappFloatingButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
         <WhatsappFloatingButton />
      </div>
    </Router>
  );
}

export default App;