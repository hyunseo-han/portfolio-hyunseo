import { useState } from "react";
import FadeIn from "./FadeIn";
import { skills } from "../constants";

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-8 md:px-[8vw] lg:px-30">
      <FadeIn>
        <p className="font-sora text-[13px] font-semibold text-emerald-600 uppercase tracking-[0.08em] mb-3">
          Tech Stack
        </p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-12">
          기술 스택
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {skills.map((group, gi) => {
          const isActive = active === group.category;

          return (
            <FadeIn key={group.category} delay={gi * 0.1}>
              <div
                className={`rounded-2xl p-6 md:p-7 cursor-pointer transition-all duration-300 border ${
                  isActive
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-gray-50 border-gray-200"
                }`}
                onMouseEnter={() => setActive(group.category)}
                onMouseLeave={() => setActive(null)}
              >
                <p
                  className={`font-sora text-[13px] font-semibold uppercase tracking-[0.06em] mb-4 transition-colors duration-300 ${
                    isActive ? "text-emerald-700" : "text-gray-500"
                  }`}
                >
                  {group.category}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <span
                      key={item}
                      className={`font-sora text-[13px] font-medium px-3.5 py-1.5 rounded-full border transition-all duration-300 ${
                        isActive
                          ? "text-emerald-800 bg-emerald-100 border-emerald-200"
                          : "text-gray-700 bg-white border-gray-200"
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
