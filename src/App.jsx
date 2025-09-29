import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { NavBar } from './components/NavBar';
import { MobileNavBar } from './components/MobileNavBar';
import { Home } from './components/sections/Home';
import { About } from './components/sections//About';
import { Project } from './components/sections/Project';
import { Contact } from './components/sections/Contact';
import { Skills } from './components/sections/Skills';
import { Footer } from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen,  setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className={`min-h-screen transition-opacity duration-700 
      ${isLoaded ? "opacity 100" : "opacity-0"} bg-black text-gray-100`}>

        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileNavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <Skills />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
