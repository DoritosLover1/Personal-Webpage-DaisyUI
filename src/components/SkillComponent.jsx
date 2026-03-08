function SkillsSectionComponent() {
  const skillCategories = [
    {
      title: "Programlama Dilleri",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: "C++", level: 70 },
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 60 },
      ],
    },
    {
      title: "Veritabanı",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      skills: [
        { name: "MySQL", level: 70 },
        { name: "T-SQL", level: 70 },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      skills: [
        { name: "AWS", level: 60},
        { name: "Docker", level: 55 },
        { name: "Kubernetes", level: 50 },
      ],
    },
    {
      title: "Frontend & Mobil",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: "React", level: 70 },
        { name: "Tailwind CSS", level: 65 },
        { name: "Bootstrap", level: 80 },
        { name: "Flutter", level: 70 },
      ],
    },
  ];

  return (
    <div className="w-full px-4 sm:px-0">
        
      <div className="w-full max-w-5xl mx-auto bg-base-300 shadow-primary shadow-[0_6px_30px_0px] rounded-2xl border-2 border-primary px-4 sm:px-8 py-8 sm:py-12 box-border">
        <div className="mb-6 sm:mb-10 space-y-2">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase rounded-full">
            Yeteneklerim
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-content dark:text-white leading-tight">
            Teknik <span className="text-primary">Beceriler</span>
          </h2>
          <p className="text-base sm:text-lg dark:text-slate-400 leading-relaxed">
            Çeşitli alanlarda{" "}
            <span className="dark:text-primary font-semibold">Başlangıç ~ Orta</span> seviyede
            deneyime sahibim. Öğrenmeye devam ediyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="relative group p-4 sm:p-6 rounded-xl border border-primary/40 bg-base-100 hover:bg-primary/20 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -inset-1 bg-primary/5 rounded-xl blur-xl group-hover:bg-primary/15 transition-all duration-500 -z-10" />

              <div className="flex items-center gap-2 mb-5">
                <span className="p-2 rounded-lg bg-primary/20 text-primary shrink-0">
                  {category.icon}
                </span>
                <h3 className="text-sm font-bold tracking-wider uppercase text-primary">
                  {category.title}
                </h3>
              </div>

                <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-semibold dark:text-primary text-slate-700">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-primary/80 shrink-0 ml-2">
                        {skill.level <= 40
                          ? "Başlangıç"
                          : skill.level <= 65
                          ? "Başlangıç ~ Orta"
                          : "Orta"}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-primary/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 mt-6 sm:mt-10">
          <div className="p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-primary/40 bg-primary dark:bg-primary/90">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">Dil</p>
            <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">3+</p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-primary/40 bg-primary dark:bg-primary/90">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">Teknoloji</p>
            <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">10+</p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-primary/40 bg-primary dark:bg-primary/90">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mb-1">Staj</p>
            <p className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">Halkbank</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSectionComponent;