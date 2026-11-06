import { useState } from "react";
import { FaGithub, FaChevronLeft, FaChevronRight, FaInfoCircle } from "react-icons/fa";
import { GiServerRack, GiSatelliteCommunication } from "react-icons/gi";
import { projectCategories, projectsData } from "../data/portfolioData.js";
import ProjectModal from "./ProjectModal.jsx";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [carouselIndexes, setCarouselIndexes] = useState({});

  const filteredProjects =
    selectedCategory === "Tümü"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const handlePrevSlide = (e, projectId, totalImages) => {
    e.stopPropagation();
    setCarouselIndexes((prev) => {
      const current = prev[projectId] || 0;
      return { ...prev, [projectId]: current === 0 ? totalImages - 1 : current - 1 };
    });
  };

  const handleNextSlide = (e, projectId, totalImages) => {
    e.stopPropagation();
    setCarouselIndexes((prev) => {
      const current = prev[projectId] || 0;
      return { ...prev, [projectId]: current === totalImages - 1 ? 0 : current + 1 };
    });
  };

  return (
    <section
      id="projeler"
      aria-label="Projeler Bölümü"
      className="py-16 px-4 sm:px-6 max-w-6xl mx-auto text-left"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase rounded-full mb-2">
            Portfolyo
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
            Öne Çıkan Çalışmalarım
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-1">
            Mobil, web, dağıtık sistemler ve güvenlik alanında geliştirdiğim projeler.
          </p>
        </div>

        <a
          href="https://github.com/DoritosLover1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white text-slate-700 dark:text-slate-300 rounded-xl text-xs font-semibold gap-2 self-start md:self-auto"
        >
          <FaGithub className="w-3.5 h-3.5" />
          <span>Tüm Projeler (GitHub)</span>
        </a>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {projectCategories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                isActive
                  ? "bg-primary text-white shadow-sm shadow-primary/30"
                  : "bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-slate-800"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const currentImgIndex = carouselIndexes[project.id] || 0;
          const hasImages = project.images && project.images.length > 0;

          return (
            <article
              key={project.id}
              className="bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 card-hover-glow overflow-hidden flex flex-col justify-between group"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-slate-800/80 overflow-hidden border-b border-slate-200/70 dark:border-slate-800">
                {hasImages ? (
                  <>
                    <img
                      src={project.images[currentImgIndex]}
                      alt={`${project.title} Görseli ${currentImgIndex + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Image Counter */}
                    {project.images.length > 1 && (
                      <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/70 text-white text-[10px] font-mono backdrop-blur-sm z-10 pointer-events-none">
                        {currentImgIndex + 1} / {project.images.length}
                      </span>
                    )}

                    {/* Carousel Controls */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => handlePrevSlide(e, project.id, project.images.length)}
                          aria-label="Önceki Görsel"
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:scale-105"
                        >
                          <FaChevronLeft className="w-2.5 h-2.5" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => handleNextSlide(e, project.id, project.images.length)}
                          aria-label="Sonraki Görsel"
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:scale-105"
                        >
                          <FaChevronRight className="w-2.5 h-2.5" />
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-6 space-y-2">
                    {project.category.includes("Finans") ? (
                      <GiServerRack className="w-12 h-12 text-primary/60" />
                    ) : (
                      <GiSatelliteCommunication className="w-12 h-12 text-primary/60" />
                    )}
                    <span className="text-xs font-mono font-medium text-slate-500">
                      Backend & Servis Mimarisi
                    </span>
                  </div>
                )}

                {/* Category Pill */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="px-2.5 py-1 rounded-lg bg-white/95 dark:bg-slate-950/85 text-slate-800 dark:text-slate-200 text-[11px] font-semibold shadow-xs backdrop-blur-sm border border-slate-200/50 dark:border-slate-800">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md text-slate-400 text-[11px] font-mono">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-primary hover:underline flex items-center gap-1.5"
                    >
                      <FaInfoCircle className="w-3.5 h-3.5" />
                      <span>İncele</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-xs btn-outline border-slate-200 dark:border-slate-700 hover:border-primary hover:bg-primary hover:text-white rounded-lg text-xs font-medium gap-1"
                      >
                        <FaGithub className="w-3 h-3" />
                        <span>Kod</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}

