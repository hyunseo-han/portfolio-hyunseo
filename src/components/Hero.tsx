import { useTyping } from "../hooks";
import { typingTexts } from "../constants";
import FadeIn from "./FadeIn";

export default function Hero() {
  const typed = useTyping(typingTexts, 55, 1600);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center container-main">
      <FadeIn delay={0.1}>
        <p className="font-sora text-t5 font-medium text-fg-brand tracking-[0.08em] uppercase mb-4">
          Portfolio 2026
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <h1 className="font-sora text-t12 md:text-t13 lg:text-t14 font-bold text-fg-neutral leading-tight tracking-tight">
          안녕하세요,
          <br />
          <span className="text-fg-brand">{typed}</span>
          <span className="inline-block w-0.75 h-[1em] bg-bg-brand-solid ml-0.5 align-middle animate-blink" />
        </h1>
      </FadeIn>

      <FadeIn delay={0.45}>
        <p className="font-sora text-t6 text-fg-neutral-muted leading-relaxed mb-10 max-w-2xl">
          안 풀리는 문제 앞에서 더 흥미를 느끼는 프론트엔드 개발자입니다. <br />
          팀과 함께 끝까지 완성도를 만들어왔고, 매일 새로운 것을 배우며 성장하고
          있습니다. <br />
          React와 TypeScript로 사용자에게 닿는 서비스를 만듭니다.
        </p>
      </FadeIn>

      <FadeIn delay={0.6}>
        <div className="flex gap-3 mt-9">
          <a
            href="#projects"
            className="font-sora text-t4 font-bold text-palette-static-white bg-bg-brand-solid hover:bg-bg-brand-solid-pressed px-7 py-3 rounded-r1_5 transition-colors"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="font-sora text-t4 font-semibold text-fg-neutral-muted border border-stroke-neutral-muted hover:border-stroke-brand-weak hover:text-fg-brand px-7 py-3 rounded-r1_5 transition-colors"
          >
            연락하기
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
