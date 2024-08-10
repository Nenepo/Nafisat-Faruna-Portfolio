import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import Header from "./components/Header"
import Home from './pages/Home'
import Work from './pages/Work'
import { gsap } from 'gsap';

function App() {
  const buttonRef = useRef(null);

  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    gsap.to(buttonRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 1.5,
    });
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <>
      <section className={`${darkMode ? 'bg-n-2' : 'bg-n-1'}  font-inter main `} >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />

        </Routes>

        <button
          ref={buttonRef}
          onClick={() => setDarkMode(!darkMode)}
          className="fixed bottom-4 right-4 "
        >
           {darkMode ? (
            <img className="w-6 h-6" src="/assets/light1.png" alt="Light mode icon" />
          ) : (
            <img className="w-6 h-6" src="/assets/dark.png" alt="Dark mode icon" />
          )}
        </button>
      </section>

    </>
  )
}

export default App
