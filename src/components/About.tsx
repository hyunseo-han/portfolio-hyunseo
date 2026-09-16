import FadeIn from "./FadeIn";
import { stats } from "../constants";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 container-main border-b border-stroke-neutral-muted"
    >
      <FadeIn>
        <p className="font-sora text-t3 font-semibold text-fg-brand uppercase tracking-[0.08em] mb-2">
          About
        </p>
        <h2 className="font-sora text-t11 md:text-t12 font-bold text-fg-neutral tracking-tight mb-6">
          기술로 문제를 풀어내는 개발자
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.1}>
            <div className="py-7">
              <p className="font-sora text-t12 font-bold text-fg-brand tracking-tight">
                {stat.num}
              </p>
              <p className="font-sora text-t5 font-semibold text-fg-neutral mt-2">
                {stat.label}
              </p>
              <p className="font-sora text-t3 text-fg-neutral-subtle whitespace-pre-line mt-1">
                {stat.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
