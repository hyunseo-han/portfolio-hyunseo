import { useState } from "react";
import type { Project } from "../constants";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-bg-layer-default border border-stroke-neutral-muted rounded-r2 overflow-hidden cursor-pointer transition-colors duration-300 hover:border-[color:var(--seed-color-palette-blue-400)]"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-6 md:px-7">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-sora text-t9 font-bold text-[color:var(--seed-color-palette-blue-1000)] tracking-tight">
              {project.title}
            </h3>
            <p className="font-sora text-t4 text-fg-neutral-subtle mt-1.5">
              {project.subtitle}
            </p>
          </div>
          <span
            className={`text-t9 text-[color:var(--seed-color-palette-blue-600)] transition-transform duration-300 select-none ${
              expanded ? "rotate-180" : ""
            }`}
          >
            ⌄
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-sora text-t2 font-medium text-[color:var(--seed-color-palette-blue-700)] bg-[color:var(--seed-color-palette-blue-100)] border border-[color:var(--seed-color-palette-blue-200)] px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="font-sora text-t4 text-fg-neutral-muted leading-relaxed mt-4">
          {project.description}
        </p>

        {(project.period || project.role) && (
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-t3">
            {project.period && (
              <div>
                <dt className="font-sora font-semibold text-fg-neutral">
                  기간
                </dt>
                <dd className="font-sora text-fg-neutral-muted mt-1">
                  {project.period}
                </dd>
              </div>
            )}
            {project.role && (
              <div>
                <dt className="font-sora font-semibold text-fg-neutral">
                  담당
                </dt>
                <dd className="font-sora text-fg-neutral-muted mt-1">
                  {project.role}
                </dd>
              </div>
            )}
          </dl>
        )}

        {(project.github || project.demo) && (
          <div className="flex gap-3 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-sora text-t2 font-semibold text-[color:var(--seed-color-palette-blue-700)] border border-[color:var(--seed-color-palette-blue-400)] hover:bg-[color:var(--seed-color-palette-blue-100)] px-4 py-2 rounded-r1_5 transition-colors"
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
                className="font-sora text-t2 font-semibold text-palette-static-white bg-[color:var(--seed-color-palette-blue-600)] hover:bg-[color:var(--seed-color-palette-blue-700)] px-4 py-2 rounded-r1_5 transition-colors"
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
            <div className="pt-6 border-t border-stroke-neutral-muted">
              {project.caseStudies ? (
                <div className="flex flex-col gap-6">
                  {project.caseStudies.map((study) => (
                    <article key={study.title}>
                      <p className="font-sora text-t4 font-semibold text-[color:var(--seed-color-palette-blue-1000)] mb-3">
                        {study.title}
                      </p>
                      {study.purpose && (
                        <div className="mb-4">
                          <span className="font-sora text-t1 font-semibold text-[color:var(--seed-color-palette-blue-700)] uppercase tracking-wide">
                            목적
                          </span>
                          <p className="font-sora text-t3 text-fg-neutral-muted leading-relaxed mt-1">
                            {study.purpose}
                          </p>
                        </div>
                      )}
                      <div className="mb-4">
                        <span className="font-sora text-t1 font-semibold text-[color:var(--seed-color-palette-blue-700)] uppercase tracking-wide">
                          실행
                        </span>
                        <ul className="mt-1 space-y-2 list-disc pl-5 font-sora text-t3 text-fg-neutral-muted leading-relaxed">
                          {study.execution.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="font-sora text-t1 font-semibold text-[color:var(--seed-color-palette-blue-700)] uppercase tracking-wide">
                          결과
                        </span>
                        <ul className="mt-1 space-y-2 list-disc pl-5 font-sora text-t3 text-fg-neutral-muted leading-relaxed">
                          {study.results.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <>
                  <p className="font-sora text-t3 font-semibold text-fg-brand uppercase tracking-[0.06em] mb-4">
                    Technical Challenges
                  </p>
                  <div className="flex flex-col gap-4">
                    {project.problems.map((p, i) => (
                      <div
                        key={i}
                        className="bg-bg-layer-fill rounded-r2 p-5 border-l-2 border-stroke-brand-solid"
                      >
                        <p className="font-sora text-t4 font-semibold text-fg-neutral mb-3">
                          {p.title}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <span className="font-sora text-t1 font-semibold text-fg-critical uppercase tracking-wide">
                              Problem
                            </span>
                            <p className="font-sora text-t3 text-fg-neutral-muted leading-relaxed mt-1">
                              {p.problem}
                            </p>
                          </div>
                          <div>
                            <span className="font-sora text-t1 font-semibold text-fg-brand uppercase tracking-wide">
                              Solution
                            </span>
                            <p className="font-sora text-t3 text-fg-neutral-muted leading-relaxed mt-1">
                              {p.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
