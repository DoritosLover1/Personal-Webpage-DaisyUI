import { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { personalData, navigationLinks, socialLinks } from "../data/portfolioData.js";

export default function Navbar({ isDark, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const githubLink = socialLinks.find((s) => s.platform === "GitHub")?.url;
  const linkedinLink = socialLinks.find((s) => s.platform === "LinkedIn")?.url;

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <nav
        aria-label="Ana Menü"
        className="glass-panel rounded-2xl shadow-sm px-4 sm:px-5 py-2.5 flex items-center justify-between transition-all duration-300"
      >
        {/* Brand / Logo */}
        <a
          href="#hakkimda"
          onClick={(e) => handleNavClick(e, "#hakkimda")}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-xl bg-primary text-white font-display font-bold text-sm flex items-center justify-center shadow-sm shadow-primary/30 group-hover:scale-105 transition-transform">
            İD
          </div>
          <span className="font-display font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
            {personalData.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 rounded-lg hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions: Socials, Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profili"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition hidden sm:inline-flex"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}

          {linkedinLink && (
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profili"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-[#0A66C2] hover:bg-slate-100 dark:hover:bg-slate-800 transition hidden sm:inline-flex"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          )}

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Açık temaya geç" : "Koyu temaya geç"}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {isDark ? (
              <FaSun className="w-4 h-4 text-amber-400" />
            ) : (
              <FaMoon className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-3 rounded-2xl glass-panel shadow-xl flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-2.5 rounded-xl font-medium text-slate-700 dark:text-slate-200 hover:bg-primary/10 hover:text-primary transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 mt-1 border-t border-slate-200 dark:border-slate-800 flex items-center justify-around">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 py-1.5"
              >
                <FaGithub className="w-4 h-4" /> GitHub
              </a>
            )}
            {linkedinLink && (
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 py-1.5"
              >
                <FaLinkedin className="w-4 h-4 text-[#0A66C2]" /> LinkedIn
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

