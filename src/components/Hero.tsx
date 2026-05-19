import { useTyping } from "../hooks";
import { typingTexts } from "../constants";
import FadeIn from "./FadeIn";

export default function Hero() {
  const typed = useTyping(typingTexts, 55, 1600);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-[8vw] lg:px-[120px]">
      {/* Decorative dots */}
      <div
        className="absolute top-[15%] right-[8%] w-[200px] h-[200px] opacity-50 hidden md:block"
        style={{
          backgroundImage: "radial-gradient(#a7f3d0 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute bottom-[20%] right-[15%] w-20 h-20 border-2 border-emerald-200 rounded-full opacity-40 hidden md:block" />

      <FadeIn delay={0.1}>
        <p className="font-sora text-[15px] font-medium text-emerald-600 tracking-[0.08em] uppercase mb-4">
          Portfolio 2026
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight max-w-150">
          안녕하세요,
          <br />
          <span className="text-emerald-600">{typed}</span>
          <span className="inline-block w-[3px] h-[0.9em] bg-emerald-600 ml-0.5 align-text-bottom animate-blink" />
        </h1>
      </FadeIn>

      <FadeIn delay={0.45}>
        <p className="font-sora text-[17px] text-gray-500 mt-6 leading-relaxed max-w-175">
          사용자 경험을 깊이 고민하고 기술적 문제를 끈질기게 파고드는
          개발자입니다. <br />
          React와 Swift로 실제 서비스를 만들어왔습니다.
        </p>
      </FadeIn>

      <FadeIn delay={0.6}>
        <div className="flex gap-3 mt-9">
          <a
            href="#projects"
            className="font-sora text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-7 py-3 rounded-lg transition-all hover:-translate-y-0.5"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="font-sora text-sm font-semibold text-emerald-700 border-[1.5px] border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400 px-7 py-3 rounded-lg transition-all"
          >
            연락하기
          </a>
        </div>
      </FadeIn>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-gray-400 font-sora">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-emerald-400 to-transparent" />
      </div>
    </section>
  );
}
