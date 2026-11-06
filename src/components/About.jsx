import { FaCode, FaShieldAlt, FaRocket, FaLightbulb } from "react-icons/fa";
import { personalData } from "../data/portfolioData.js";

export default function About() {
  const principles = [
    {
      icon: <FaCode className="w-5 h-5 text-primary" />,
      title: "Temiz & Sürdürülebilir Mimari",
      description: "Yalnızca çalışan değil, bakımı kolay, modüler ve tasarım kalıplarına (Design Patterns) uygun kod yazmaya özen gösteriyorum.",
    },
    {
      icon: <FaShieldAlt className="w-5 h-5 text-emerald-500" />,
      title: "Güvenlik & Veri Bütünlüğü",
      description: "Cisco CyberOps sertifikası ve kriptografik projelerimle pekiştirdiğim güvenlik bilincini her sistemin temeline yerleştiriyorum.",
    },
    {
      icon: <FaRocket className="w-5 h-5 text-indigo-500" />,
      title: "Yüksek Performans & Optimizasyon",
      description: "Veritabanı indekslemesi, soket eşzamanlılığı ve hafif arayüz mimarileriyle kaynak tüketimini optimize ediyorum.",
    },
    {
      icon: <FaLightbulb className="w-5 h-5 text-amber-500" />,
      title: "Problem Çözme & Öğrenme Çevikliği",
      description: "İstanbul Üniversitesi-Cerrahpaşa'daki teorik altyapıyı, açık kaynak projeler ve kurumsal staj deneyimiyle sürekli ileri taşıyorum.",
    },
  ];

  return (
    <section
      id="hakkimda"
      aria-label="Hakkımda Bölümü"
      className="py-16 px-4 sm:px-6 max-w-6xl mx-auto text-left"
    >
      {/* Section Header */}
      <div className="max-w-2xl mb-10">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase rounded-full mb-2">
          Hakkımda
        </span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
          Mühendislik Tutkusu & Yaklaşımım
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
          {personalData.bio}
        </p>
      </div>

      {/* Principles Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {principles.map((item) => (
          <div
            key={item.title}
            className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 card-hover-glow flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

