import { FaCode, FaLaptopCode, FaDatabase, FaServer, FaCheck } from "react-icons/fa";
import { skillCategories } from "../data/portfolioData.js";

export default function Skills() {
  const getCategoryIcon = (title) => {
    if (title.includes("Diller")) return <FaCode className="w-5 h-5 text-primary" />;
    if (title.includes("Web")) return <FaLaptopCode className="w-5 h-5 text-indigo-500" />;
    if (title.includes("Veritabanı")) return <FaDatabase className="w-5 h-5 text-emerald-500" />;
    return <FaServer className="w-5 h-5 text-amber-500" />;
  };

  return (
    <section
      id="yetenekler"
      aria-label="Yetenekler Bölümü"
      className="py-16 px-4 sm:px-6 max-w-6xl mx-auto text-left"
    >
      {/* Section Header */}
      <div className="max-w-2xl mb-10">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase rounded-full mb-2">
          Uzmanlıklar
        </span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
          Teknoloji & Araç Yetkinlikleri
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2">
          Akademik eğitimim ve canlı projelerimde aktif olarak kullandığım diller, çerçeveler ve altyapı bileşenleri.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 card-hover-glow flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  {getCategoryIcon(category.title)}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List without arbitrary percentages */}
              <div className="space-y-2.5 mt-5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 gap-1"
                  >
                    <div className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {skill.note && (
                        <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                          {skill.note}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[11px] font-semibold">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

