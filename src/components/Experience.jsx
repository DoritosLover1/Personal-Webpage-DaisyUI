import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";
import { experienceTimeline } from "../data/portfolioData.js";

export default function Experience() {
  const getIcon = (type) => {
    if (type === "Kurumsal Staj") return <FaBriefcase className="w-4 h-4 text-primary" />;
    if (type === "Eğitim") return <FaGraduationCap className="w-4 h-4 text-indigo-500" />;
    return <FaCertificate className="w-4 h-4 text-emerald-500" />;
  };

  return (
    <section
      id="deneyim"
      aria-label="Deneyim ve Eğitim Bölümü"
      className="py-16 px-4 sm:px-6 max-w-6xl mx-auto text-left"
    >
      {/* Section Header */}
      <div className="max-w-2xl mb-12">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase rounded-full mb-2">
          Yolculuk
        </span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
          Deneyim & Akademik Geçmiş
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2">
          Teorik mühendislik eğitimimi kurumsal staj ve endüstriyel sertifikalarla birleştirdiğim kariyer basamakları.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-10">
        {experienceTimeline.map((item) => (
          <div key={item.company} className="relative group">
            {/* Timeline Dot with Icon */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center shadow-xs group-hover:border-primary transition-colors">
              {getIcon(item.type)}
            </div>

            {/* Content Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 card-hover-glow space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-primary">
                    {item.company}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono font-medium">
                    {item.period}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[11px] font-semibold">
                    {item.type}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 text-xs font-medium"
                  >
                    #{badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

