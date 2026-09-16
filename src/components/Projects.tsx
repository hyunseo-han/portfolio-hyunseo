import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className="py-20 container-main">
      <FadeIn>
        <p className="font-sora text-t3 font-semibold text-fg-brand uppercase tracking-[0.08em] mb-2">
          Projects
        </p>
        <h2 className="font-sora text-t11 md:text-t12 font-bold text-fg-neutral tracking-tight mb-4">
          프로젝트
        </h2>
        <p className="font-sora text-t5 text-fg-neutral-subtle mb-8 leading-relaxed">
          카드를 클릭하면 기술적 챌린지와 해결 과정을 볼 수 있습니다.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-5">
        {projects.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.15} direction="left">
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
