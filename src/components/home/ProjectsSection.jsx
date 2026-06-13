"use client";

import { useState } from "react";
import { ExternalLink, Code, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import projects from "@/data/projects";

const PROJECTS_PER_PAGE = 4;

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const goToPage = (page) => {
    setCurrentPage(page);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Projects" subtitle="Recent work and case studies" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {currentProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.15}>
              <div className="bg-[#F7F7F5] dark:bg-dark-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group h-full flex flex-col">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gold-500/20 to-gold-600/20 dark:from-gold-500/10 dark:to-gold-600/10 flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl opacity-40 group-hover:scale-125 transition-transform duration-500">
                    {project.emoji}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/50 dark:from-dark-700/50 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold dark:text-white text-dark-900 mb-3">{project.title}</h3>
                  <p className="text-dark-400 dark:text-dark-200 text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white dark:bg-dark-600 text-dark-500 dark:text-dark-200 rounded-full text-xs font-medium border border-gray-200 dark:border-dark-500">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gold-500 text-dark-900 rounded-lg text-sm font-medium hover:bg-gold-400 transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gold-500 text-gold-500 rounded-lg text-sm font-medium hover:bg-gold-500 hover:text-dark-900 transition-colors"
                    >
                      <Code size={14} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-200 dark:border-dark-600 text-dark-500 dark:text-dark-200 hover:bg-gold-500 hover:text-dark-900 hover:border-gold-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                  page === currentPage
                    ? "bg-gold-500 text-dark-900"
                    : "border border-gray-200 dark:border-dark-600 text-dark-500 dark:text-dark-200 hover:bg-gold-500 hover:text-dark-900 hover:border-gold-500"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-200 dark:border-dark-600 text-dark-500 dark:text-dark-200 hover:bg-gold-500 hover:text-dark-900 hover:border-gold-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next page"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Showing X of Y projects */}
        <p className="text-center text-dark-400 dark:text-dark-400 text-sm mt-4">
          Showing {startIndex + 1}–{Math.min(startIndex + PROJECTS_PER_PAGE, projects.length)} of {projects.length} projects
        </p>
      </div>
    </section>
  );
}