import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import Achievements from './sections/Achiements/Achievements';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    
      <div className="app">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Header />


        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/achievements'element={<Achievements/>}/>
            {/* Optional */}
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
   
  );
}
