import ihsan_image from "../assets/ihsan.jpeg";

function HeroSectionComponent() {
  return (
    <div className="hero min-h-[75vh] w-full max-w-5xl bg-base-300 shadow-primary shadow-[0_6px_30px_0px] rounded-2xl border-2 border-primary px-4 sm:px-8 py-8 sm:py-12">
      <div className="hero-content flex-col lg:flex-row gap-6 lg:gap-12 items-center w-full">

        <div className="relative group shrink-0">
          <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-all duration-500" />
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl border-4 border-primary/30 shadow-2xl">
            <img
              src={ihsan_image}
              alt="İhsan Demirci"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div className="w-full max-w-lg space-y-6">

          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase rounded-full">
            Merhaba, Ben İhsan
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-content dark:text-white leading-tight">
            İhsan <span className="text-primary">DEMİRCİ</span>
          </h1>

          <p className="text-lg dark:text-slate-400 leading-relaxed">
            <span className="dark:text-primary font-semibold">Bilgisayar mühendisliği</span> öğrencisiyim. Çeşitli alanlarda projeler geliştirmekteyim.
            Bu portföy sitesinde projelerimi, yeteneklerimi ve hakkımda bilgileri bulabilirsiniz.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex-1 min-w-[120px] p-4 rounded-xl border border-slate-200 dark:border-primary/40 bg-primary dark:bg-primary/90">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">Deneyim</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">Öğrenci</p>
            </div>
            <div className="flex-1 min-w-[120px] p-4 rounded-xl border border-slate-200 dark:border-primary/40 bg-primary dark:bg-primary/90">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">Proje</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">10+</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="btn btn-primary rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              Projelerimi Gör
            </button>
            <button className="btn btn-outline btn-primary rounded-xl font-bold hover:scale-105 transition-transform">
              Bana Ulaşın
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroSectionComponent;