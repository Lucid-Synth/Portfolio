"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-blue-500/30 font-sans overflow-x-hidden">
      {/* Font Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Castoro+Titling&display=swap');
        .font-castoro {
          font-family: 'Castoro Titling', serif;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-black tracking-tighter hover:opacity-70 transition-opacity cursor-pointer font-castoro ">
            {'>'} Lucid-Synth<span className="text-blue-500">.</span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <Hero />

      <About />

      <Skills />
      
      <Projects />
      
      <Contact />

      <Footer />

      
    </div>
  );
}