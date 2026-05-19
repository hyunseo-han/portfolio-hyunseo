import { useTyping } from "../hooks";
import { typingTexts } from "../constants";
import FadeIn from "./FadeIn";

export default function Hero() {
  const typed = useTyping(typingTexts, 55, 1600);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center container-main">
      <FadeIn delay={0.1}>
        <p className="font-sora text-[15px] font-medium text-emerald-600 tracking-[0.08em] uppercase mb-4">
          Portfolio 2026
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <h1 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
          안녕하세요,
          <br />
          <span className="text-emerald-600">{typed}</span>
          <span className="inline-block w-0.75 h-[0.9em] bg-emerald-600 ml-0.5 align-text-bottom animate-blink" />
        </h1>
      </FadeIn>

      <FadeIn delay={0.45}>
        <p className="font-sora text-[17px] text-gray-500 mt-6 leading-relaxed">
          사용자 경험을 깊이 고민하고 기술적 문제를 끈질기게 파고드는
          개발자입니다. <br />
          React와 Swift로 실제 서비스를 만들어왔습니다.
        </p>
      </FadeIn>

      <FadeIn delay={0.6}>
        <div className="flex gap-3 mt-9">
          <a
            href="#projects"
            className="font-sora text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-7 py-3 rounded-md transition-colors"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="font-sora text-sm font-semibold text-gray-700 border border-gray-200 hover:border-emerald-300 hover:text-emerald-700 px-7 py-3 rounded-md transition-colors"
          >
            연락하기
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
