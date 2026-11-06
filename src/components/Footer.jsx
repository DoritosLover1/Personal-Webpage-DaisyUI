import { FaGithub, FaLinkedin, FaHackerrank, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personalData, socialLinks } from "../data/portfolioData.js";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (platform) => {
    if (platform === "LinkedIn") return <FaLinkedin className="w-4 h-4" />;
    if (platform === "GitHub") return <FaGithub className="w-4 h-4" />;
    if (platform === "HackerRank") return <FaHackerrank className="w-4 h-4" />;
    return <SiLeetcode className="w-4 h-4" />;
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Subtitle */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-primary text-white font-display font-bold text-xs flex items-center justify-center shadow-xs">
            İD
          </div>
          <div className="text-left">
            <p className="font-display font-bold text-sm text-slate-900 dark:text-white">
              {personalData.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {personalData.university} &bull; {personalData.department}
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
              className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
            >
              {getSocialIcon(social.platform)}
            </a>
          ))}
        </div>

        {/* Copyright & Scroll Top */}
        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span>&copy; {new Date().getFullYear()} {personalData.name}. Tüm hakları saklıdır.</span>
          <button
            onClick={scrollToTop}
            aria-label="Sayfa Başına Dön"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition"
            title="Başa Dön"
          >
            <FaArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

