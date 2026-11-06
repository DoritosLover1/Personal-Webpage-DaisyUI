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
              İletişim
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
              Birlikte Yeni Fikirler İnşa Edelim
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Yazılım geliştirme, staj imkanları veya aklınızdaki bir proje hakkında konuşmak isterseniz LinkedIn üzerinden hemen bağlantı kurabilir veya formu kullanabilirsiniz.
            </p>
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

        {/* Right Column: Working Contact Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <FaComments className="w-5 h-5 text-primary" />
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Hızlı Mesaj Gönder
            </h3>
          </div>

          {status === "success" ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-center space-y-2 animate-in fade-in">
              <FaCheckCircle className="w-8 h-8 text-emerald-500 mx-auto" />
              <p className="font-bold text-base">Mesajınız başarıyla iletildi!</p>
              <p className="text-xs opacity-90">En kısa sürede sizinle iletişime geçeceğim.</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-3 text-xs underline font-semibold text-emerald-700 dark:text-emerald-300"
              >
                Yeni bir mesaj yaz
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ahmet Yılmaz"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:border-primary transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  E-Posta Adresiniz
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ornek@alanadi.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:border-primary transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Mesajınız
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Projeniz veya iletmek istediğiniz detaylar..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:border-primary transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-sm hover:shadow-md hover:shadow-primary/25 transition flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <span>Gönderiliyor...</span>
                ) : (
                  <>
                    <FaPaperPlane className="w-3.5 h-3.5" />
                    <span>Mesajı Gönder</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

