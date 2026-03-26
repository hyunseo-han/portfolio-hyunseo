import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-[8vw] lg:px-[120px]">
      <FadeIn>
        <p className="font-sora text-[13px] font-semibold text-emerald-600 uppercase tracking-[0.08em] mb-3">
          Projects
        </p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
          프로젝트 케이스 스터디
        </h2>
        <p className="font-sora text-[15px] text-gray-500 mb-10 leading-relaxed">
          카드를 클릭하면 기술적 챌린지와 해결 과정을 볼 수 있습니다.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.15} direction="left">
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
