import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useTheme } from "./hooks/useTheme.js";

function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  // Subtle desktop ambient spotlight (signature interaction)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 antialiased selection:bg-primary selection:text-white relative overflow-x-hidden transition-colors duration-300 font-sans"
    >
      {/* Accessible Skip Navigation */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-primary focus:text-white focus:font-semibold focus:rounded-xl focus:shadow-2xl focus:outline-none"
      >
        Ana İçeriğe Atla (Skip to content)
      </a>

      {/* Signature Ambient Spotlight (Disabled on touch or reduced motion) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: isDark
            ? `radial-gradient(600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(59, 130, 246, 0.06), transparent 80%)`
            : `radial-gradient(600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(37, 99, 235, 0.04), transparent 80%)`,
        }}
      />

      {/* Subtle Background Mesh Blurs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[32rem] h-[32rem] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -left-40 w-[28rem] h-[28rem] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[24rem] h-[24rem] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Fixed Sticky Glass Navbar */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Page Content Flow */}
      <main className="w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
