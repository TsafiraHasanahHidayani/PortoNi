import React from 'react';
import './index.css'; // Gantikan Portofolio.css

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih! Pesan kamu sudah dikirim 😊");
  };

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact handleSubmit={handleSubmit} />
      <Footer />
    </div>
  );
}

export default App;
