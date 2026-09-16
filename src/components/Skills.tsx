import { useState } from "react";
import FadeIn from "./FadeIn";
import { skills } from "../constants";

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 container-main">
      <FadeIn>
        <p className="font-sora text-t3 font-semibold text-fg-brand uppercase tracking-[0.08em] mb-2">
          Tech Stack
        </p>
        <h2 className="font-sora text-t11 md:text-t12 font-bold text-fg-neutral tracking-tight mb-10">
          기술 스택
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {skills.map((group, gi) => {
          const isActive = active === group.category;

          return (
            <FadeIn key={group.category} delay={gi * 0.1}>
              <div
                className={`rounded-r2 p-5 md:p-6 cursor-pointer transition-all duration-300 border ${
                  isActive
                    ? "bg-bg-brand-weak border-stroke-brand-weak"
                    : "bg-bg-layer-default border-stroke-neutral-muted"
                }`}
                onMouseEnter={() => setActive(group.category)}
                onMouseLeave={() => setActive(null)}
              >
                <p
                  className={`font-sora text-t3 font-semibold uppercase tracking-[0.06em] mb-4 transition-colors duration-300 ${
                    isActive ? "text-fg-brand" : "text-fg-neutral-subtle"
                  }`}
                >
                  {group.category}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <span
                      key={item}
                      className={`font-sora text-t3 font-medium px-3.5 py-1.5 rounded-r1_5 border transition-all duration-300 ${
                        isActive
                          ? "text-fg-brand bg-bg-brand-weak border-stroke-brand-weak"
                          : "text-fg-neutral-muted bg-bg-layer-default border-stroke-neutral-muted"
                      }`}
                      style={{ transitionDelay: `${ii * 30}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
