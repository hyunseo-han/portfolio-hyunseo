import { useState } from "react";
import type { Project } from "../constants";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(5,150,105,0.12)]"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Accent bar */}
      <div className="h-1.5 bg-linear-to-r from-emerald-600 to-emerald-400" />

      <div className="p-7 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-sora text-2xl font-bold text-gray-900 tracking-tight">
              {project.title}
            </h3>
            <p className="font-sora text-sm text-gray-500 mt-1.5">
              {project.subtitle}
            </p>
          </div>
          <span
            className={`text-xl text-emerald-600 transition-transform duration-300 select-none ${
              expanded ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-sora text-xs font-medium text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="font-sora text-sm text-gray-600 leading-relaxed mt-4">
          {project.description}
        </p>

        {(project.github || project.demo) && (
          <div className="flex gap-3 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-sora text-xs font-semibold text-emerald-700 border border-emerald-300 hover:bg-emerald-50 px-4 py-2 rounded-lg transition-colors"
              >
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-sora text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors"
              >
                Demo
              </a>
            )}
          </div>
        )}

        {/* Expanded case study */}
        <div
          className={`grid transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
            expanded
              ? "grid-rows-[1fr] opacity-100 mt-6"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pt-6 border-t border-gray-200">
              <p className="font-sora text-[13px] font-semibold text-emerald-600 uppercase tracking-[0.06em] mb-4">
                Technical Challenges
              </p>

              <div className="flex flex-col gap-4">
                {project.problems.map((p, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-xl p-5 border-l-[3px] border-emerald-400"
                  >
                    <p className="font-sora text-sm font-semibold text-gray-800 mb-3">
                      {p.title}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <span className="font-sora text-[11px] font-semibold text-red-600 uppercase tracking-wide">
                          Problem
                        </span>
                        <p className="font-sora text-[13px] text-gray-600 leading-relaxed mt-1">
                          {p.problem}
                        </p>
                      </div>
                      <div>
                        <span className="font-sora text-[11px] font-semibold text-emerald-600 uppercase tracking-wide">
                          Solution
                        </span>
                        <p className="font-sora text-[13px] text-gray-600 leading-relaxed mt-1">
                          {p.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
