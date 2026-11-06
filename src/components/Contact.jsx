import { useState } from "react";
import { FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaComments } from "react-icons/fa";
import { socialLinks } from "../data/portfolioData.js";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, submitting, success

  const linkedinUrl = socialLinks.find((s) => s.platform === "LinkedIn")?.url;
  const githubUrl = socialLinks.find((s) => s.platform === "GitHub")?.url;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section
      id="iletisim"
      aria-label="İletişim Bölümü"
      className="py-16 px-4 sm:px-6 max-w-6xl mx-auto text-left"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Column: Direct Outreach & Socials */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase rounded-full">
              İletişim Bilgilerim
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
              Bana Buradan Ulaşabilirsin
            </h2>
          </div>

          {/* Quick Direct Cards */}
          <div className="space-y-3 pt-2">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 card-hover-glow group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#0A66C2] flex items-center justify-center">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      LinkedIn ile Ulaşın
                    </p>
                    <p className="text-xs text-slate-500">Doğrudan mesaj ve profesyonel ağ</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  Bağlan &rarr;
                </span>
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 card-hover-glow group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white flex items-center justify-center">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      GitHub Profilim
                    </p>
                    <p className="text-xs text-slate-500">Tüm açık kaynak kodlar ve katkılar</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  Depolar &rarr;
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

