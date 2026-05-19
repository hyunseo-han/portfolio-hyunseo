import FadeIn from "./FadeIn";
import { contactLinks } from "../constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-8 md:px-[8vw] lg:px-30 bg-gray-50 border-t border-gray-200"
    >
      <FadeIn>
        <p className="font-sora text-[13px] font-semibold text-emerald-600 uppercase tracking-[0.08em] mb-3">
          Contact
        </p>
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
          함께 일하고 싶으시다면
        </h2>
        <p className="font-sora text-base text-gray-500 leading-relaxed max-w-120 mb-9">
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
              className="font-sora text-sm font-semibold text-gray-700 bg-white border border-gray-200 px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all duration-200 hover:border-emerald-400 hover:text-emerald-700 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(5,150,105,0.15)]"
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
