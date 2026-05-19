import { contactLinks } from "../constants";

export default function Footer() {
  return (
    <footer className="py-12 container-main border-t border-gray-100">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sora text-[13px] text-gray-400 hover:text-emerald-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <span className="font-sora text-xs text-gray-300">
          &copy; 2026 Hyunseo Han
        </span>
      </div>
    </footer>
  );
}
