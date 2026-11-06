import { FaArrowDown, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { personalData } from "../data/portfolioData.js";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Giriş Bölümü"
      className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-[85vh]"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-14">
        {/* Left Column: Content */}
        <div className="w-full lg:max-w-2xl space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalData.status}</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Merhaba, ben <span className="text-primary">{personalData.name}</span>
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5 text-primary">
                <FaGraduationCap className="w-4 h-4" />
                {personalData.university}
              </span>
              <span className="hidden sm:inline text-slate-400">&bull;</span>
              <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                <FaMapMarkerAlt className="w-3.5 h-3.5" />
                {personalData.location}
              </span>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed pt-1">
              {personalData.tagline}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => scrollTo("projeler")}
              className="btn btn-primary rounded-xl text-white font-semibold shadow-sm hover:shadow-md hover:shadow-primary/25 transition-all flex items-center gap-2 text-sm sm:text-base px-5"
            >
              <span>Projelerimi İncele</span>
              <FaArrowDown className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => scrollTo("iletisim")}
              className="btn btn-outline border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 rounded-xl font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-sm sm:text-base px-5"
            >
              İletişime Geç
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80">
            {personalData.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800"
              >
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Avatar Frame */}
        <div className="shrink-0 relative">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-primary/30 via-slate-200 dark:via-slate-800 to-transparent shadow-xl">
            <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-100 dark:bg-slate-900 relative group">
              <img
                src={personalData.avatar}
                alt={`${personalData.name} Profil Fotoğrafı`}
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

