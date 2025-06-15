import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import Achievements from './sections/Achiements/Achievements';
// import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    
      <div className="app">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Header />


        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/achievements'element={<Achievements/>}/>
            {/* Optional */}
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </main>

        <Footer />
        {/* <ScrollToTop /> */}
      </div>
   
  );
}
