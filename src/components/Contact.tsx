import FadeIn from "./FadeIn";
import { contactLinks } from "../constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 container-main border-b border-stroke-neutral-muted"
    >
      <FadeIn>
        <p className="font-sora text-t3 font-semibold text-fg-brand uppercase tracking-[0.08em] mb-2">
          Contact
        </p>
        <h2 className="font-sora text-t11 md:text-t12 font-bold text-fg-neutral tracking-tight mb-4">
          함께 일하고 싶으시다면
        </h2>
        <p className="font-sora text-t5 text-fg-neutral-subtle leading-relaxed max-w-120 mb-9">
          새로운 기회와 협업에 항상 열려 있습니다. 편하게 연락해주세요.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="flex flex-wrap gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sora text-t4 font-semibold text-fg-neutral-muted bg-bg-layer-default border border-stroke-neutral-muted px-7 py-3.5 rounded-r2 flex items-center gap-2 transition-colors duration-200 hover:border-stroke-brand-weak hover:text-fg-brand"
            >
              <span>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
