import FadeIn from "./FadeIn";
import { contactLinks } from "../constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 container-main border-b border-gray-100"
    >
      <FadeIn>
        <p className="font-sora text-[13px] font-semibold text-emerald-600 uppercase tracking-[0.08em] mb-2">
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
              className="font-sora text-sm font-semibold text-gray-700 bg-white border border-gray-100 px-7 py-3.5 rounded-lg flex items-center gap-2 transition-colors duration-200 hover:border-emerald-300 hover:text-emerald-700"
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
