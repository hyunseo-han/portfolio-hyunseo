import FadeIn from "./FadeIn";
import { stats } from "../constants";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-8 md:px-[8vw] lg:px-30 bg-gray-50 border-t border-gray-200"
    >
      <FadeIn>
        <p className="font-sora text-[13px] font-semibold text-emerald-600 uppercase tracking-[0.08em] mb-3">
          About
        </p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
          기술로 문제를 풀어내는 개발자
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.1}>
            <div className="py-7">
              <p className="font-sora text-4xl font-bold text-emerald-600 tracking-tight">
                {stat.num}
              </p>
              <p className="font-sora text-[15px] font-semibold text-gray-800 mt-2">
                {stat.label}
              </p>
              <p className="font-sora text-[13px] text-gray-500 mt-1">
                {stat.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
